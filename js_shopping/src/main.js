function loadItems() {
    return fetch('data/data.json').then(response => response.json())
    .then(json => json.items);
}

function displayItems(items) {
    console.log(items);
    const container = document.querySelector('.items');
    console.log(container);
    container.innerHTML = items.map(item => 
        createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtononClick(event, itmes) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return ;
    }

    displayItems(itmes.filter(item => item[key] === value));
}

function setEventListener(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtononClick(event, items));
}

// main
loadItems()
.then(items => {
    displayItems(items);
    setEventListener(items);
})
.catch(console.log);
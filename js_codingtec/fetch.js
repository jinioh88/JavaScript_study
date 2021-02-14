fetch('https://jsonplaceholder.typicode.com/post/1')
    .then(data => {
        if (!data.ok) {
            thorw Error(data.status);
        }
        return data.json();
    })
    .then(post => {
        console.log(post.title);
    })
    .catch(e => {
        console.log(e);
    });

const update = {
    title: 'Clarence White Techniques',
    body: 'Amazing',
    userId: 1,
};
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
};
fetch('https://jsonplaceholder.typicode.com/post', options).then(data => {
    if (!data.ok) {
        thorw Error(data.status);
    }
    return data.json();
})
.then(post => {
    console.log(post.title);
})
.catch(e => {
    console.log(e);
});

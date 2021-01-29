const book = {
    title: 'Reasons and Persons',
    author: 'Derek Parfit',
};

const updated = { ...book, year: 1984 }
console.log(updated);

const defaults = {
    author: '',
    title: '',
    year: 2021,
    rating: null,
};

const book = {
    author: 'Joe Morgan',
    title: 'Simplifying JavaScript',
};

const bookWithDefaults = { ...defaults, ...book };
const employee2 = {
    ...defaultEmployee, 
    name: {
        ...defaultEmployee.name,
    }
};
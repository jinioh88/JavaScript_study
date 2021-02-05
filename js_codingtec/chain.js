const sailors = [
    {
        name: 'yi hong',
        active: true, 
        email: 'yh@gmail.com',
    },
    {
        name: 'alex',
        active: true, 
        email: '',
    },
    {
        name: 'nathan',
        active: false, 
        email: '',
    },
];

const active = sailors.filter(sailor => sailor.active);
const emails = active.map(member => member.email || `${member.name}@gmail.com`);
emails.forEach(sailor => sendEmail(sailor));

sailors.filter(sailor => sailor.active)
       .map(sailor => sailor.email || `${sailor.name}@gmail.com`)
       .forEach(sailor => sendEmail(sailor));
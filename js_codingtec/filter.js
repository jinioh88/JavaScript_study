const team = [
    'Michel B', 
    'Dave L',
    'Dave C',
    'Courteny B',
    'Davina M',
];

const daves = [];
for (let i = 0; i < team.length; i++) {
    if (team[i].match(/Dav/)) {
        daves.push(team[i]);
    }
}

const daves2 = team.filter(member => member.match[/Dav/]); 

const instructors = [
    {
        name: '짐',
        libraries: ['미디어교육정보 도서관'],
    },
    {
        name: '새라',
        libraries: ['기념 도서관', '문헌정보학 도서관'],
    },
    {
        name: '앨리엇',
        libraries: ['중앙 도서관'],
    },
];

let memorialInstructor;
for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].libraries.includes('기념 도서관')) {
        memorialInstructor = instructors[i];
        break;
    }
}
const libraian = instructors.find(instructor => {
    return instructor.libraries.includes('기념 도서관')
});

const profile = images.find(image => image.profile) || {path: './default.png'};
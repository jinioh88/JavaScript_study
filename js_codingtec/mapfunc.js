const band = [
    {
        name: 'corbett',
        instrument: 'guitar',
    },
    {
        name: 'evan',
        instrument: 'guitar',
    },
    {
        name: 'sean',
        instrument: 'bass',
    },
    {
        name: 'brett',
        instrument: 'drum',
    }
];

function getInstrument(member) {
    return member.instrument;
}

const instruments = band.map(member => member.instrument);
const building = {
    hours: '8 a.m - 8 p.m',
    address: 'Jayhawk Blvd',
};

const manager = {
    name: 'Augusto',
    phone: '555-555-5555',
};
const program = {
    name: 'Persenting Reaserch',
    room: '415',
    hours: '3 - 6',
}
const exhibit = {
    name: 'Emerging Scholarship',
    contact: 'Dyan',
};

function mergeProgramInfo(building, manager) {
    const {hours, address} = building;
    const {name, phone} = manager;
    const defaults = {
        hours, 
        address, 
        contact: name, 
        phone,
    };

    return program => {
        return {...defaults, ...program}
    };
}

const programInfo = mergeProgramInfo(building, manager, program);
const exibitInfo = mergeProgramInfo(building, manager, exhibit);

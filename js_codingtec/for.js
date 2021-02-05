const firms = new Map()
    .set(10, 'Ivice Group')
    .set(23, 'SoundScping Source')
    .set(31, 'Big 6');

const entries = [...firms];
for (let i = 0; i < entries.length; i++) {
    const [id, name] = entries[i];
    if (!isAvailable(id)) {
        return `사용할 수 없음`
    }
}
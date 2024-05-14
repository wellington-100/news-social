import { writeFile } from 'node:fs/promises'

async function save(data) {
    const jsonData = JSON.stringify(data, null, 2)
    try {
        await writeFile('./data/rating.json', jsonData);
        console.log('Succes');
    } catch (error) {
        console.error('Error:', error);
    }
}

export default save

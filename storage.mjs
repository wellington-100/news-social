import { readFile } from 'node:fs/promises'

async function load() {
    try {
        const jsonRating = await readFile('./data/rating.json')
        const data = JSON.parse(jsonRating)
        return data
    } catch (error) {
        console.error('Failed to load JSON data:', error)
    }
}

export default load

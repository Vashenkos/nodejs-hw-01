import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';


const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error contacts:', error);
        throw error;
    }
};

export { readContacts };

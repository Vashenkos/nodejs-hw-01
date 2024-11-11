import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    try {
        const data = JSON.stringify(contacts, null, 2)
        await fs.writeFile(PATH_DB, data, 'utf-8');
    } catch (error) {
        console.error('Error contacts:', error);
        throw error;
};

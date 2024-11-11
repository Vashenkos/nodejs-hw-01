import fs from 'fs/promises';
import path from 'path';


const getAllContacts = async () => {
    const filePath = path.resolve('src/db/db.json');
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const contacts = JSON.parse(data);
        return contacts;
    } catch (error) {
        console.error('Error reading contacts from file:', error);
        return [];
    }
};

const showContacts = async () => {
    const contacts = await getAllContacts();
    console.log('Contacts:', contacts);
};

showContacts();

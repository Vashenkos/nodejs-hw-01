import fs from 'fs';
import path from 'path';
import { createFakeContact } from '../utils/createFakeContact.js';

const readContacts = () => {
    const filePath = path.resolve('src/db/db.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

const writeContacts = (contacts) => {
    const filePath = path.resolve('src/db/db.json');
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2), 'utf8');
};

const generateContacts = (count) => {
    try {
        const existingContacts = readContacts();
        const newContacts = Array.from({ length: count }, createFakeContact);
        const updatedContacts = [...existingContacts, ...newContacts];
        writeContacts(updatedContacts);

        console.log(`Successfully generated and added ${count} contacts. Total contacts now: ${updatedContacts.length}`);
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
};

generateContacts(5);

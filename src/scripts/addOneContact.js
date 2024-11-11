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

const addOneContact = async () => {
    try {

        const existingContacts = readContacts();

        const newContact = createFakeContact();

        existingContacts.push(newContact);


        writeContacts(existingContacts);

        console.log(`Successfully added a new contact. Total contacts now: ${existingContacts.length}`);
    } catch (error) {
        console.error('Error adding new contact:', error);
    }
};


addOneContact();





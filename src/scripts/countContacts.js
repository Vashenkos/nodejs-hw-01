import fs from 'fs/promises';
import path from 'path';

const countContacts = async () => {
    const filePath = path.resolve('src/db/db.json');
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const contacts = JSON.parse(data);
        return contacts.length;
    } catch (error) {
        console.error('Error reading contacts from file:', error);
        return 0;
    }
};

const showContactCount = async () => {
    const count = await countContacts();
    console.log(await countContacts());
};

showContactCount();

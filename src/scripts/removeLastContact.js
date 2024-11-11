import fs from 'fs/promises';
import path from 'path';


const removeLastContact = async () => {
    const filePath = path.resolve('src/db/db.json');
    try {

        const data = await fs.readFile(filePath, 'utf8');
        const contacts = JSON.parse(data);

        if (contacts.length > 0) {
            contacts.pop();
            await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
            console.log('The last contact has been removed.');
        } else {
            console.log('No contacts to remove.');
        }
    } catch (error) {
        console.error('Error removing last contact from file:', error);
    }
};

removeLastContact();

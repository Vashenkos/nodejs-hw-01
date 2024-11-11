import fs from 'fs/promises';
import path from 'path';


const removeAllContacts = async () => {
    const filePath = path.resolve('src/db/db.json');
    try {

        await fs.writeFile(filePath, JSON.stringify([]));
        console.log('All contacts have been removed.');
    } catch (error) {
        console.error('Error removing contacts from file:', error);
    }
};

removeAllContacts();

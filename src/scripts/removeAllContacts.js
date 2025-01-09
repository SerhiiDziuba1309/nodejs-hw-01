import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const deleteContacts = [];
    await writeContacts(deleteContacts);
    console.log('All contacts successfully deleted.');
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

removeAllContacts();

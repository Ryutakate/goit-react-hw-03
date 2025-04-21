import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];


function App() {
    const loadContacts = () => {
        const savedContacts = localStorage.getItem('contacts');
        return savedContacts ? JSON.parse(savedContacts) : [];
    };
    
    const [contacts, setContacts] = useState(loadContacts);
    const [filter, setFilter] = useState('');

    const handleAddContact = newContact => {
        const updatedContacts = [...contacts, newContact];
        setContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };

    const handleChangeFilter = value => {
        setFilter(value);
    };
    
    const handleDeleteContact = contactId => {
        const updatedContacts = contacts.filter(contact => contact.id !== contactId);
        setContacts(updatedContacts);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    };
    
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAdd={handleAddContact} />
            <SearchBox value={filter} onChange={handleChangeFilter} />
            <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
        </div>
    );
}

export default App;

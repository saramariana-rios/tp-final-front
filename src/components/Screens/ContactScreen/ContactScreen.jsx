import React, { useState } from 'react';
import ContactList from '../../ContactList/ContactList';
import { getContactList } from '../../../services/contactService';

const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);

    return (
        <>
            <div className="contacts-sidebar">
                <div className="contacts-header">
                    <h1>Chats</h1>
                </div>
                <div className="contacts-list">
                    <ContactList contacts={contactsState} />
                </div>
            </div>
            <div className="welcome-screen">
                <h2>WhatsApp Web</h2>
                <p>Selecciona un chat para comenzar a conversar</p>
            </div>
        </>
    );
};

export default ContactScreen;


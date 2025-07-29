import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default ContactList;
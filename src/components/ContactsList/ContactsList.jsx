import React from 'react';
import { ContactStyled } from './ContactsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactsSlice';
import { getContacts, getFilteredContact } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredContact);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactStyled>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className="contactItem">
            <span>{contact.name} </span>
            <span> {contact.number} </span>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ContactStyled>
  );
};

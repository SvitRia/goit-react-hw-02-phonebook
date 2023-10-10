import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''

  };

  onChangeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value.trim() });
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => {
      const nameFilter = filter.toLowerCase();
      const hasName = contact.name.toLowerCase().includes(nameFilter);
     return hasName
   
    });
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };
 
 deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
   
      return (
        <div>
          <ContactForm onAdd={this.addContact}/>

           <h2>Contacts</h2>
          <Filter
            value = {filter}
            onFilter={this.onChangeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          /> 
        </div>
       
      );
    };
  };


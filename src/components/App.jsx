import { Component } from 'react';
import { Form } from './Form/Form.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from './Filter/Filter.jsx';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    console.log({ name, number });
    const newContact = { id: nanoid(), name, number };
    this.setState(({ contacts: prevState }) => ({
      contacts: [...prevState, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.addContact} />
        <Filter filter={this.state.filter} onChangeFilter={this.addFilter} />

        <ContactList
          contacts={this.getVisibleContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

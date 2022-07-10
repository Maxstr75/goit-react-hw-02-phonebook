import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { Container, Section, TitleH1 } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };
  // Добавляет контакт в список
  addContact = ({ name }) => {
    // const normalizedFind = name.toLowerCase();
    // const findName = this.state.contacts.find(
    //   contact => contact.name.toLowerCase() === normalizedFind
    // );

    this.setState(({ contacts }) => ({
      contacts: [{ name, id: nanoid() }, ...contacts],
    }));
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <TitleH1>Phonebook</TitleH1>
          <ContactForm onSubmit={this.addContact} />
        </Section>
      </Container>
    );
  }
}

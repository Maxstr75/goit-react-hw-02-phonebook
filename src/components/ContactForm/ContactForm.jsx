import PropTypes from 'prop-types';
import React from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends React.Component {
  state = {
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameId}>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;

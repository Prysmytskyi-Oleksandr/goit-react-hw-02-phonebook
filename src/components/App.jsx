import { Component } from 'react';
import { Form } from './Form/Form.jsx';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

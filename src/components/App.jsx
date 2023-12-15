import React, { Component } from 'react';
import initialContacts from './data/contacts.json';
import shortid from 'shortid';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import FormList from './FormList/FormList';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  render() {
    return (
      <div>
        <h1>Phoneook</h1>
        <FormList />
        <h2>Contacts</h2>
      </div>
    );
  }
}

export default App;

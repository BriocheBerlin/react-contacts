import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      selectedContact: null,
    };
  }
  onContactListClick(cntct) {
    this.setState({
      selectedContact: cntct,
    });
  }
  getContacts() {
    return [
      {
        name: "Max Müller",
        details: {
          street: "Sesamestreet 5 ",
          phone: "123456790"
        }
      }, 
      {
        name: "Thuy Le",
        details: {
          street: "Blub Alley 26 ",
          phone: "0987654321"
        }
      },
      {
        name: "Ann Greenberg",
        details: {
          street: "Example Place 256 ",
          phone: "7890123456"
        }
      },
    ];
  }

  render() {
    var contacts = this.getContacts();
    return (
      <div className="App">
        <ContactList contacts={contacts} selectedContact={this.state.selectedContact} onContactListClick={this.onContactListClick.bind(this)}/>
        <ContactDetails details={this.state.selectedContact}/>
      </div>
    );
  }
}

export default App;

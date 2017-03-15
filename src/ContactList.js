import React, { Component } from 'react';

class ContactList extends Component {

  render() {
    var contacts = this.props.contacts;
    var clickHandler = this.props.onContactListClick;
    var getClassName = (c)=> this.props.selectedContact && c.name === this.props.selectedContact.name ? "selected" : "";
    return (
      <ul>
      {contacts.map(c => (<li className={getClassName(c)} onClick={() => clickHandler(c)}>{c.name}</li>))}
      
      </ul>
    );
  }
}

export default ContactList;
import React, { Component } from 'react';

class ContactDetails extends Component {
  render() {
    var contact = this.props.details;
    if(!contact) {return null};
    return (
      <div>
        <div>Contact Details:</div>
        <div>{contact.name}</div>
        <div>{contact.details.street}</div>
        <div>{contact.details.phone}</div>
      </div>
    );
  }
}

export default ContactDetails;
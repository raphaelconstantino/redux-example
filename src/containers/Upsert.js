import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { insertContact, updateContact } from '../actions/contactActionCreator';
import { Link, Redirect } from 'react-router-dom';
import Contact from '../models/Contact';
import {required, email} from '../support/validation/validationRules';
import * as validation from '../support/validation/validationExecutor';

const fieldValidations = [ 
    validation.rulesRunner("firstName", "First Name", required),
    validation.rulesRunner("lastName", "Last Name", required),
    validation.rulesRunner("address", "Address", required),
    validation.rulesRunner("phone", "Phone Number", required),
    validation.rulesRunner("email", "Email", required, email),
];

class Upsert extends Component {

   constructor () {
        super();
        this.state = {
            redirect : false
        }
    }

    submitForm (data) {
        const {handleSubmit} = this.props;
        // Validate
        validation.run(data, fieldValidations);
        // Submit
        handleSubmit(data);
        // Redirect
        this.setState({redirect : true});
    }

    fnRedirect() {
        if (this.state.redirect) 
        {
            return <Redirect to='/'/>;
        }
    }


    render() {
        const {contact} = this.props;
        return (
            <div className="container">
                {this.fnRedirect()}
                <Link to="/">Back</Link>
                <ContactForm contact={contact} onSubmit={this.submitForm.bind(this)} />
            </div>    
        );
    }    
    
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit : (data) => {
        if (data.id)
        {
            dispatch(updateContact(new Contact(data)));
        } else {
            dispatch(insertContact(new Contact(data)));
        }
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  let contact;
  if (ownProps.match.params.id)
  {
      contact =  state.contacts.data.filter(contact => contact.id.toString() === ownProps.match.params.id)[0];
  }

  return {
      contact
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upsert)

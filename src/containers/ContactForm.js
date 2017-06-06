import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderField from '../components/renderField';

class ContactForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
            <Field name="firstName" component={renderField} type="text" label="First Name:"/>
            <Field name="lastName" component={renderField} type="text" label="Last Name:"/>
            <Field name="address" component={renderField} type="text" label="Address:"/>
            <Field name="phone" component={renderField} type="number" label="Phone Number:"/>
            <Field name="email" component={renderField} type="email" label="Email:"/>                        
            <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm);

const mapStateToProps = (state, ownProps) => {
  return {
      initialValues : ownProps.contact || null
  }
}

export default connect(mapStateToProps)(ContactForm)
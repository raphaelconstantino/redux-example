import React from 'react'
import PropTypes from 'prop-types';

const hasError = (touched, error) => {
  if (touched && error)
  {
    return true;
  }
}

const renderField = ({input, label, type, meta: {touched, error}}) => (
  <div className={hasError(touched, error) ? "form-group has-error" : "form-group"}>
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {hasError(touched, error) && <span className="text-danger">{error}</span>}
    </div>
  </div>
)

renderField.propTypes = {
  label: PropTypes.string.isRequired
}

export default renderField;
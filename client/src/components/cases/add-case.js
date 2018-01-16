import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList';
import { Link } from 'react-router-dom';
// create action
import { AddUserCase } from '../../actions'; 
import SquareBox from '../template/square-box';

const form = reduxForm({
  form: 'addCase',
  // validate,
});

const caseTypes = [
  { type: 'Small Claims', value: 'smallClaims' },
  { type: 'Guardianship', value: 'guardianship' },
  { type: 'Family', value: 'family' },
  { type: 'Traffic', value: 'traffic' },
  { type: 'Domestic Violence', value: 'dv' },
  { type: 'Eviction', value: 'eviction' }
]; 

const renderField = field => (
  <div>
    <input className="form-control" {...field.input} />
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

//validate 
// function validate(formProps) {
//   const errors = {};

//   if (!formProps.firstName) {
//     errors.firstName = 'Please enter a first name';
//   }

//   if (!formProps.lastName) {
//     errors.lastName = 'Please enter a last name';
//   }

//   if (!formProps.email) {
//     errors.email = 'Please enter an email';
//   }

//   if (!formProps.password) {
//     errors.password = 'Please enter a password';
//   }

//   return errors;
// }

class AddCase extends Component {

  // create AddUserCase action, then: 
  handleFormSubmit(formProps) {
    this.props.AddUserCase(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="Add-case">
        <h1>Add Case</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          {this.renderAlert()}
          
          <div>
            <label>Select a case type</label>
            <Field
              name="caseType"
              component={DropdownList}
              data={caseTypes}
              valueField="value"
              textField="type" />
          </div>

          <div>
            <label>(optional) Add Case Number</label>
            <Field name="caseNumber" className="form-control" component={renderField} type="text" />
          </div>

          <button type="submit" className="btn btn-primary">AddCase</button>

        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, { AddUserCase })(form(AddCase));
{/*export default AddCase;*/}
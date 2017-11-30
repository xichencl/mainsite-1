import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { postData } from '../../actions/index';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const form = reduxForm({
  form: 'newCase',
  validate,
});

// const renderRadio = field => (
//   <div>
//     <input className="form-control" {...field.input} type="radio" />
//     {field.touched && field.error && <div className="error">{field.error}</div>}
//   </div>
// );

// const renderSelect = field => (
//   <div>
//     <select className="form-control" {...field.input} />
//     {field.touched && field.error && <div className="error">{field.error}</div>}
//   </div>
// );

function validate(formProps) {
  const errors = {};

  if (!formProps.isPlaintiff){
  	errors.isPlaintiff = 'Please select plaintiff or defendant';
  }

  if (!formProps.caseType){
  	errors.caseType = 'Please select a case type';
  }

  
  return errors;
}

class NewCase extends Component{
	handleFormSubmit(formProps) {
		console.log("Find errorType: ", this.props);
    const uid = cookie.get('user')._id;
		this.props.postData('post_data', this.props.error, true, `/user/${uid}/postData`, this.props.dispatch, formProps);
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
    /*handleSubmit a property in reduxForm*/
    	const { handleSubmit, pristine, reset, submitting } = this.props;
    	return (
    		<div>
    		<h1>Create a New Case</h1>
    		<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
    			{this.renderAlert()}
    			<div>
    				<label>Select One</label>
    				<div>
    				<label><Field name="isPlaintiff" component="input" type="radio" value="plaintiff" />Plaintiff</label>
    				<label><Field name="isPlaintiff" component="input" type="radio" value="defendant"/>Defendant</label>
    				</div>
    			</div>

    			<div>
    				<label>Case Number</label>
    				<div>
    				<Field name="caseNumber" component="input" type="text" placeholder="Case Number" />
    				</div>
    			</div>

    			<div>
    				<label>Case Type</label>
    				<div>
    				 <Field name="caseType" component="select">
    				 	<option></option>
    				 	<option value="Small Claims">Small Claims</option>
    				 	<option value="Guardianship">Guardianship</option>
    				 </Field>
    				</div>
    			</div>
    			
    			<div>
			        <button type="submit" disabled={pristine || submitting}>Submit</button>
			        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
		      	</div>

    		</form>
    		</div>
    		);
	}
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    };
}

export default connect(mapStateToProps, { postData })(form(NewCase));
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { postData, CLIENT_ROOT_URL } from '../../actions/index';
import { UPDATE_CASE } from '../../actions/types';
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const form = reduxForm({
  form: 'newCase',
  validate,
});

const renderField = field => (
  <div>
    <input className="form-control" {...field.input} type="text" placeholder={field.placeholder} />
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);

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
  constructor(props){
    super(props);
    this.handleInitialize = this.handleInitialize.bind(this);
    // this.state = {case : {}};
  }

  componentWillMount(){
    //check for existing case id
    // console.log("Location", this.props.location);
    this.handleInitialize();
  }

  handleInitialize() {
    const caseId = this.props.location.state ? this.props.location.state.id : '';
    let initData;
    if (caseId) {
      //load existing case data
      initData = this.props.cases.find( function(e) {return e._id === caseId}) 
    }
    this.props.initialize(initData);
  }

  // findCase(caseNumber){
  //     //load existing case data
  //     if (caseNumber){
  //       return this.props.cases.find( function(e) {return e._id === caseNumber});
  //     }
  // }

	handleFormSubmit(formProps) {
		console.log("FormProps: ", formProps);
    const uid = cookie.get('user')._id;
    // if (this.state.case.length > 0){
    //   formProps.caseId = this.state.case._id;
    // }
		this.props.postData(UPDATE_CASE, this.props.error, true, `/user/${uid}/updateCase`, formProps);
    window.location.href = `${CLIENT_ROOT_URL}/portal`;
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
      // console.log("State - case number:", this.state.case);
      // const caseNumber = this.state.case.caseNumber ? this.state.case.caseNumber : '';
      // console.log("case number: ", caseNumber);
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
            <Field name="caseNumber" component={renderField} placeholder="Case Number"  />    				
    				</div>
    			</div>

    			<div>
    				<label>Case Type</label>
    				<div>
    				 <Field name="caseType" component="select">
    				 	<option></option>
    				 	<option value="Small Claims" >Small Claims</option>
    				 	<option value="Guardianship" >Guardianship</option>
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
    cases: state.user.cases,
    form: state.form,
    };
}

export default connect(mapStateToProps, { postData })(form(NewCase));
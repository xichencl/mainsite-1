import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { postData, CLIENT_ROOT_URL, deleteData } from '../../actions/index';
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

const caseTypes = [
  { type: 'Small Claims', value: 'smallClaims' },
  { type: 'Guardianship', value: 'guardianship' },
  { type: 'Family', value: 'family' },
  { type: 'Traffic', value: 'traffic' },
  { type: 'Domestic Violence', value: 'dv' },
  { type: 'Eviction', value: 'eviction' }
]; 

class NewCase extends Component{ 
  constructor(props){
    super(props);
    this.handleInitialize = this.handleInitialize.bind(this);
    this.state = {newCase : true};
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
      this.setState({newCase : false});
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
		// console.log("FormProps: ", formProps);
    const uid = cookie.get('user')._id;
    // if (this.state.case.length > 0){
    //   formProps.caseId = this.state.case._id;
    // }
		postData(UPDATE_CASE, this.props.error, true, `/user/${uid}/updateCase`, this.props.dispatch, formProps);
    window.location.href = `${CLIENT_ROOT_URL}/portal`;
	}

  handleClick(e) {
    const isDelete = confirm("Are you sure you want to delete this case?");
    if (isDelete){
      const uid = cookie.get('user')._id;
      deleteData(UPDATE_CASE, null, true, `/user/${uid}/${this.props.location.state.id}`, this.props.dispatch);
      window.location.href = `${CLIENT_ROOT_URL}/portal`;
    }
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
      // console.log("Values: ", values);
      // console.log("State - case number:", this.state.case);
      // const caseNumber = this.state.case.caseNumber ? this.state.case.caseNumber : '';
      // console.log("case number: ", caseNumber);
    	return (
    		<div>
    		<h1>{this.state.newCase ? "Create" : "Update"} Your Case</h1>
        <button type="button" onClick={this.handleClick.bind(this)}>Delete Case</button>
    		<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
    			{this.renderAlert()}
    			

          {/*<div>
            <label>Select a Case Type</label>
            <Field
              name="caseType"
              component={DropdownList}
              data={caseTypes}
              valueField="value"
              textField="type" />
          </div>*/}
          <div className="case-form-group select select-case-type">
            <label>Select a Case Type</label>
            <Field className="form-control" name="caseType" component="select">
              <option value="smallClaims">Small Claims</option>
              <option value="guardianship">Guardianship</option>
              <option value="family">Family</option>
              <option value="traffic">Traffic</option>
              <option value="dv">Domestic Violence</option>
              <option value="eviction">Eviction</option>
            </Field>
          </div>

          <div className="case-form-group select select-party">
    				<label>Party (select one)</label>
    				<div className="row">
    				  <div className="col-md-6">
                <label>
                <Field className="form-control" name="isPlaintiff" component="input" type="radio" value="plaintiff" />Plaintiff</label>
        			</div>
              <div className="col-md-6">
                <label>
                <Field className="form-control"name="isDefendant" component="input" type="radio" value="defendant"/>Defendant</label>
    				  </div>
            </div>
    			</div>

    			<div className="case-form-group case-number">
    				<label>Case Number (optional)</label>
    				<div>
            <Field className="form-control" name="caseNumber" component={renderField} placeholder="Case Number"  />    				
    				</div>
    			</div>

    			
    			
    			<div className="case-form-group">
			        <button className="btn btn-submit" type="submit" disabled={pristine || submitting}>Submit</button>
			        <button className="btn btn-submit" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
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
    // form: state.form,
    };
}

// const mapDispatchToProps = (dispatch) => ({
//   handleFormSubmit: () => {
//     console.log("FormProps: ", formProps);
//     const uid = cookie.get('user')._id;
//     // if (this.state.case.length > 0){
//     //   formProps.caseId = this.state.case._id;
//     // }
//     console.log("Values", this.props.values);
//     postData(UPDATE_CASE, this.props.error, true, `/user/${uid}/updateCase`, dispatch, this.props.values);
//     window.location.href = `${CLIENT_ROOT_URL}/portal`;
//   },
// });

export default connect(mapStateToProps)(form(NewCase));
import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import InputToggle from './InputToggle';
class Welcome extends Component {
  render() {
    const { handleSubmit, fields: {userInput}} = this.props;
    return (
      <form className="Signin">
        <fieldset className="form-group emailInput">
          <InputToggle label={userInput.value} placeholder={"Enter Email Here by Clicking on the Text"} labelClassName={"Example-Class-Name"}>
            <input type="email" className="form-control" {...userInput}/>
          </InputToggle>
        </fieldset>
      </form>
    )
  }
}

export default reduxForm({
  form: 'userForm',
  fields: ['userInput']
})(Welcome);

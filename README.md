# Redux Form Toggle Input

####By:
[Dman89](https://www.github.com/dman89/)?

```
	> git clone git@github.com:DMan89/ReactExpressReduxMongoDB.git
	> cd react-input-toggle
	> npm install
	> npm start
```

####How To Use:####

###React Example

```
import InputToggle from 'redux-form-toggle-input';
```
...
```
<InputToggle label={userInput.value} placeholder={"Enter Email Here by Clicking on the Text"} labelClassName={"Example-Class-Name"}>
	<input type="email" className="form-control" {...userInput}/>
</InputToggle>
```

###Redux-Form Example

```
import InputToggle from 'redux-form-toggle-input';
```
...
```
<InputToggle label={userInput.value} placeholder={"Enter Email Here by Clicking on the Text"} labelClassName={"Example-Class-Name"}>
	<input type="email" className="form-control" {...userInput}/>
</InputToggle>
```

Whole File Example:

```
import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import InputToggle from 'redux-form-toggle-input';
class Welcome extends Component {
	render() {
		const { handleSubmit, fields: {userInput}} = this.props;
		return (
			<form className="Signin">
				<fieldset className="form-group emailInput">
					<label>Email:</label>
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
```

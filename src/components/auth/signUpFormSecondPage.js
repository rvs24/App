import React from 'react';
import { Field, reduxForm } from 'redux-form';


import validate from '../validate';
import { userField } from './renderField';




class SignUpFormSecondPage extends React.Component {

    state = {
        type: 'password'
    }

    showPassword = (e) => {
        e.preventDefault();
        console.log('clicked');
        if(this.state.type === 'password'){
          this.setState({ type :'text'});
        }else{ this.setState({ type :'password'});}
      }

    render(){
        const { handleSubmit, previousPage } = this.props
        return (
            <div className='form-container'>
                <div className='form-heading'>
                    Create Account
                    <div className='divider'></div>
                </div>
                
                    <form onSubmit={handleSubmit}>
                    <Field name="userName" type="text" component={userField} label="User Name" />

                    <Field id='password' name='password' type={this.state.type} component={userField} label='Password' showPassword={this.showPassword} />
                    <Field id='password' name='confirmPassword' type={this.state.type} component={userField} label='Confirm Password' showPassword={this.showPassword} />
                    
                    
                    <div className='form-button'>
                        <button type="button" className="previous" onClick={previousPage}>
                        Previous
                        </button>
                        <button type="submit" className='submit' >
                        Submit
                        </button>
                    </div>
                    </form>
            </div>
    
        )
    }
}

export default reduxForm({
  form: 'signup', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SignUpFormSecondPage)
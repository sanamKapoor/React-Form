import React, { Component } from 'react';
import FormUserDetail from './FormUserDeatil';
import FormPersonalDetail from './FormPersonalDetail';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends Component {

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    bio: '',
    college: ''
  }

  //          Proceed to next step

  nextStep = () => {
    const { step} = this.state;
    this.setState({
      step: step + 1
    });
  }

  //    GO to prev step

  prevStep = () => {
    const { step} = this.state;
    this.setState({
      step: step - 1
    });
  }

  //    Handle field change
  handleChange = (e) => {
    const { name, value} = e.target;

    this.setState({
      [name]: value
    })
  }

  render() {
    const { step} = this.state;
    
    const { firstName, lastName, city, email, bio, college} = this.state;

    const values = { firstName, lastName, city, email, bio, college};
    
    switch(step){
      case 1:
        return (
          <FormUserDetail 
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )
      case 2:
        return (
          <FormPersonalDetail 
          prevStep = {this.prevStep}
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )
      
      case 3:
        return <Confirm
        prevStep = {this.prevStep}
        nextStep = {this.nextStep}
        values = {values}
        />

      case 4:
         return (
        <Success 
         values = {values}
         /> )
      default:
        return <h1>Not Working</h1>
    }
  }
}

export default UserForm

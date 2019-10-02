import React, { Component } from 'react'
import Navbar from './Navbar';

class FormUserDeatil extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange} = this.props;
    return (
      <React.Fragment>
        <Navbar title = "Light Details"/>

      <form className="container mt-4"> 
    <input 
    type="text" 
    value={values.firstName}
    name="firstName" 
    placeholder="Enter First name.." onChange={handleChange} className="form-control">

    </input>

    <input 
    type="text" 
    value={values.lastName}
    name="lastName" 
    placeholder="Enter Last name.." onChange={handleChange}
    className="form-control mt-2">

    </input>

    <input 
    type="email" 
    value={values.email}
    name="email" 
    placeholder="Enter Email .." onChange={handleChange}
    className="form-control mt-2">

    </input>

    

    <button className="btn btn-primary mt-3" onClick={this.continue}>Continue</button>
    </form>

    </React.Fragment>
    )
  }
}

export default FormUserDeatil

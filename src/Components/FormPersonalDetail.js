import React, { Component } from 'react'
import Navbar from './Navbar';

class FormPersonalDetail
 extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange} = this.props;
    return (
      <React.Fragment>
        <Navbar title="About You"/>

      <form className="container mt-4"> 
      <input 
    type="text" 
    value={values.city}
    name="city" 
    placeholder="Enter City" onChange={handleChange}
    className="form-control mt-2">

    </input>

    
    <input 
    type="text" 
    value={values.bio}
    name="bio" 
    placeholder="Enter Bio .." onChange={handleChange}
    className="form-control mt-2">

    </input>

    <input 
    type="text" 
    value={values.college}
    name="college" 
    placeholder="Enter College .." onChange={handleChange}
    className="form-control mt-2">

    </input>

    <button className="btn btn-secondary mt-3 mx-4" onClick={this.back}>Go Back</button>

    <button className="btn btn-primary mt-3" onClick={this.continue}>Continue</button>
    </form>

    </React.Fragment>
    )
  }
}

export default FormPersonalDetail


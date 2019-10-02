import React, { Component } from 'react'
import Navbar from './Navbar';

 class Confirm extends Component {


  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values} = this.props;
    return (
      <React.Fragment>
        <Navbar title="Confirm Details"/>
        <ul className="list-unstyled container mt-4 bg-dark text-light p-4">
          <li>FirstName : {values.firstName}</li>
          <li>LastName : {values.lastName}</li>
          <li>Email : {values.email}</li>
          <li>College : {values.college}</li>
          <li>Bio : {values.bio}</li>
          
        </ul>
        <div className="container mt-3">
        <button className="btn btn-secondary mt-3 mx-4" onClick={this.back}>Go Back</button>

<button className="btn btn-primary mt-3" onClick={this.continue}>Continue</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Confirm

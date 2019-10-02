import React from 'react'
import Navbar from './Navbar';

function Success(props) {
  const {values} = props;
  return (
    <React.Fragment>
    <Navbar title="Success" />
    <h1 className="container text-success text-center mt-5">
      Welcome {values.firstName} you are in !!
    </h1>
    </React.Fragment>

  )
}

export default Success

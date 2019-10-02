import React from 'react'

function Navbar(props) {
  return (
    <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">{props.title}</a>
</nav>
  )
}

export default Navbar

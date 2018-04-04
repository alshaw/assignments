import React from 'react'; 
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <h1>Welllllcccccooooommmmmeeeee</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Header;
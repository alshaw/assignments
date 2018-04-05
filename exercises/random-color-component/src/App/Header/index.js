import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <h1>Hi, hey, hello.</h1>
      <nav>
        <Link to='/About'>About</Link>
        <Link to='/PeanutButter'>Peanut Butter</Link>
        <Link to='/Jelly'>Jelly</Link>
      </nav>
    </div>
  )
}

export default Header;
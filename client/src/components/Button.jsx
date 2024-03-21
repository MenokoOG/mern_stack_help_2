// Button.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Button = ({ text, linkTo }) => {
  return (
    <Link to={linkTo} className="button home-btn">
      {text}
    </Link>
  );
}

export default Button;

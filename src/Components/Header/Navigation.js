import React from 'react';
import {NavLink} from 'react-router-dom';

// Component for the navigation menu
const Navigation = (props) => {
  // Looping over the categories provided by props and creating the Navlink component for each
  let tags = props.categories.map((category, index) => (
      <li key={index}>
        <NavLink to={`/${category}`}> {category} </NavLink>
      </li>));

  return (
    <nav className="main-nav">
      <ul>
        {tags}
      </ul>
    </nav>
  );
}

export default Navigation;
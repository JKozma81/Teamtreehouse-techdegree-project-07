import React from 'react';
import {NavLink} from 'react-router-dom';

// Component for the navigation menu
const Navigation = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        {/* Looping over the categories provided by props and creating the Navlink component for each of them */}
        {
          props.categories.map((category, index) => (
            <li key={index}>
              <NavLink to={`/${category}`}> {category} </NavLink>
            </li>))
        }
      </ul>
    </nav>
  );
}

export default Navigation;
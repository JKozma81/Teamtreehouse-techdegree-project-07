import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
  let tags = props.categories.map((category, index) => (
      <li key={index}>
        <NavLink 
          to={`/${category}`}
        >
          {category}
        </NavLink>
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
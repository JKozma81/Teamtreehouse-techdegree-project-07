import React from 'react';

const Navigation = (props) => {
  let tags = props.categories.map((category, index) => (
      <li key={index}>
        <a href='#'>
          {category}
        </a>
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
import React from 'react';

import SearchForm from './SearchForm';
import Navigation from './Navigation';

// Main header component
const Header = (props) => (
  <>
    <h2>Welcome to:<br />
    Johnny's Picture Gallery</h2>
    <SearchForm onSearch={props.onSearch} />
    <Navigation 
      categories={props.categories}
    />
  </>
);

export default Header;
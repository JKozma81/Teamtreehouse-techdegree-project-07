import React from 'react';

import SearchForm from './SearchForm';
import Navigation from './Navigation';

// Main header component
const Header = (props) => (
  <>
    <SearchForm onSearch={props.onSearch} />
    <Navigation 
      categories={props.categories}
    />
  </>
);

export default Header;
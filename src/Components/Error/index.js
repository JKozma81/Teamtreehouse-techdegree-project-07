import React from 'react';
import {Link} from 'react-router-dom';

// 404 Error page component 
const PageError = () => (

  <div className="error-container">
    <Link to='/'>Back to the Home page</Link>
  </div>
);

export default PageError;
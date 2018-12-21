import React from 'react';

const GalleryItem = (props) => {
  return (

          <li>
            <img src={props.imageSrc} alt="" />
          </li>

          // <!-- Not Found -->
          // <li class="not-found">
          //   <h3>No Results Found</h3>
          //   <p>You search did not return any results. Please try again.</p>
          // </li>

      // <img src="http://www.harneedi.com/img/loading_image.gif" alt="loading" />
      // <img src="https://www.achievo.co.in/Content/loader.gif" alt="loading" />
  );
}

export default GalleryItem;
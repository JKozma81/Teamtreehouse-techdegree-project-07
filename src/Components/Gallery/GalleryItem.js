import React from 'react';

// Component for the image display
const GalleryItem = (props) => {
  return (
    <li>
      <img src={props.imageSrc} alt="" />
    </li>
  );
}

export default GalleryItem;
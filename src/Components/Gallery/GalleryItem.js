import React from 'react';

const GalleryItem = (props) => {
  return (
    <li>
      <img src={props.imageSrc} alt="" />
    </li>
  );
}

export default GalleryItem;
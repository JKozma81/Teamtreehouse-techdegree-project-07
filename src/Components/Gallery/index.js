import React from 'react';

import GalleryItem from './GalleryItem';

const Gallery = (props) => {
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {
          props.menuIndex !== undefined ? props.data[props.menuIndex].map((el) => (<GalleryItem key={el.id} imageSrc={`https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}_n.jpg`} />)) : null

        }
      </ul>
    </div>   
  );
}

export default Gallery;
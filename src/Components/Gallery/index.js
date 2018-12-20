import React from 'react';

import GalleryItem from './GalleryItem';

const Gallery = () => {
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>

        <GalleryItem />

      </ul>
    </div>   
  );
}

export default Gallery;
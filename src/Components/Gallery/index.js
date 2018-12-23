import React from 'react';

import GalleryItem from './GalleryItem';

import NoResult from './NoResults';
import Loading from './Loading';

const Gallery = (props) => {
  

  return (
    <div className="photo-container">
      <h2>Results</h2>

      {
        props.searching && !props.data.length ? <Loading /> : 
        !props.searching && props.data && props.data.length <= 0 ? <ul><NoResult /></ul> :
        <ul>
          {props.data.map((el) => (<GalleryItem key={el.id} imageSrc={`https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}_n.jpg`} />))}
        </ul>
      }  

    </div>   
  );
}

export default Gallery;

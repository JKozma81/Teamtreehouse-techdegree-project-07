import React from 'react';

import GalleryItem from './GalleryItem';

import NoResult from './NoResults';
import Loading from './Loading';

const Gallery = (props) => {
  

  console.log(props.data)
  return (
    <div className="photo-container">
      <h2>Results</h2>

      {props.searching && !props.data.length ? <Loading /> :

      <ul>
        {props.noResult && props.data && !props.searching ? <NoResult /> : null}
        {props.data.map((el) => (<GalleryItem key={el.id} imageSrc={`https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}_n.jpg`} />))}
      </ul>
      }  
    </div>   
  );
}

export default Gallery;

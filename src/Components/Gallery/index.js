import React from 'react';

// Component imports
import GalleryItem from './GalleryItem';
import NoResult from './NoResults';
import Loading from './Loading';

// Gallery container component
const Gallery = (props) => {

  return (
    <div className="photo-container">
      <h2>Results for:</h2>
      <h1>"{props.text}"</h1>

      {/* Ternary operators to determine what component to display at certain condition */}
      {props.searching && !props.data.length ? <Loading /> : null}
      {!props.searching && props.data && props.data.length <= 0 ? <ul><NoResult /></ul> : null}
      {!props.searching && props.data && props.data.length > 0 ? 
        <ul>
          {props.data.map((el) => (<GalleryItem key={el.id} imageSrc={`https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}_n.jpg`} />))}
        </ul> : null
      }

    </div>   
  );
};

export default Gallery;

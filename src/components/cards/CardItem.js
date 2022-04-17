import React from 'react';

import { setImg } from '../helperComponents/artwork';

function CardItem(props) {
  let { click, art, drawPrice} = props
  
  return (
    <>
      <ol className='cards__item' onClick={click}>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={art.getPriceString()}  >
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={art.getSrc()}
              id={art.getName()}
            />
            <div className='price' style={drawPrice?{}:{display:"none"}}>
              {art.getPriceString()}
            </div>
          </figure>

          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{art.getName()}</h5>
          </div>
        </div>
      </ol>
    </>
  );
}

//Still have old split screen code (dont know if I want to keep a add to bag button, Idk didnt like look but functionality really cool)

export default CardItem;
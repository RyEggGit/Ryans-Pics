import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button.js';

import { artwork } from '../helperComponents/artwork';

function CardItem(props) {
  let { setImage, click, art} = props
  return (
    <>      
      <li className='cards__item' onClick={click}>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={art.getPriceString()}  >
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={art.getSrc()}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{art.getName()}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

//Still have old split screen code (dont know if I want to keep a add to bag button, Idk didnt like look but functionality really cool)

export default CardItem;
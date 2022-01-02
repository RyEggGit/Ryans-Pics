import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button.js';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.price}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>

          <div class="splitscreen">
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
            <div className='add-to-bag'>
              <Button className='btn' buttonStyle='btn--add-to-bag' buttonSize='btn--small'>
                Add to Bag
              </Button>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
import React, { useEffect } from 'react'
import Button from '../Button'
import './Item.css'

import { artwork } from '../helperComponents/artwork'
import { Link } from 'react-router-dom'

const Item = (props) => {

    let { list, removeIndex, empty } = props
    const ItemsInBag = () => {
        return (
            list.map((value, index) => {
                return (
                    <div key={index} className='item'>
                        <img src={value.getSrc()} />
                        <div className='description'>
                            <p>{value.getName()}</p>
                            <p>Artist: {value.getArtist()}</p>
                            <p>Price: {value.getPriceString()}</p>
                        </div>
                        <div className='remove-button'>
                            <Button buttonStyle={'btn--blue'} click={() => removeIndex(value)}>Remove</Button>
                        </div>
                    </div>

                )
            })
        )
    }
    const NoItemsInBag = () => {
        return (
            <div className='empty'>
                <h1>Looks like your bag is Empty</h1>
                <div className='to-store'>
                    <Link to='/store' >
                        <Button buttonStyle={'btn--outline-grey'}>Back to Store</Button>
                    </Link>
                </div>
            </div>

        )
    }


    if (empty) {
        return <NoItemsInBag />;
    }
    return <ItemsInBag />;

}

export default Item


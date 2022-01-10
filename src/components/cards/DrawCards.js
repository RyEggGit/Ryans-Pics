import React from 'react'
import { artwork } from '../helperComponents/artwork'
import CardItem from './CardItem'


const DrawCards = (props) => {
    let { artworkList, setArtwork } = props
    return (
        artworkList.map((value, index) => {
            return (
                <ul className='cards__items'>
                    <CardItem key={index}
                        art={value}
                        click={() => setArtwork(value)}
                    />
                </ul>

            )
        })
    )
}

export default DrawCards


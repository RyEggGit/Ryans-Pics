import React, { useEffect, useState } from 'react'
import './Expand.css'
import Button from '../helperComponents/Button';
import { setImg } from '../helperComponents/artwork';


const Expand = (props) => {
  
  let { addItem, selectedArtwork, err } = props
  const [index, setIndex] = useState(-1)

  useEffect(() => {
    if (selectedArtwork.getName() !== err.getName() ) {
      setIndex(1);
    }
  }, [selectedArtwork])

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      props.setArtwork(err)
      setIndex(-2);
      console.log("Artwork " + selectedArtwork.getName() + "\t Index: " + index)
    }
  }
  setImg(selectedArtwork.getSrc(),selectedArtwork.getName() +"-expand" )
  return (
    <div className='backdrop' onClick={handleClick} style={{ zIndex: index }}>
      <div className="splitscreen">
        <img className="image" src={selectedArtwork.getSrc()} id = {selectedArtwork.getName() +"-expand"} alt="englarged Image" />
        <div className='description'>
          <h1>{selectedArtwork.getName()}</h1>
          <p>{selectedArtwork.getArtist()}</p>
          <p>{selectedArtwork.getPriceString()}</p>
          <Button className="add-to-bag" buttonSize={"btn--large"} buttonStyle={"btn--add-to-bag"} click={() => addItem(selectedArtwork)}>Add to bag</Button>
        </div>
      </div>
    </div>
  )
}


export default Expand


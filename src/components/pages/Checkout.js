import React, {useState} from 'react'
import Navbar from '../Navbar';
import BuyItem from '../checkout/BuyItem';
import Footer from '../Footer';
import { artwork } from '../helperComponents/artwork'
import { useEffect } from 'react/cjs/react.development';



const Checkout = (props) => {
    let {list, setList} = props;
    
    return (
        <>
        <Navbar/>
        <BuyItem list = {list} setList = {setList}/>
        <Footer/>
        </>
    )
}

export default Checkout

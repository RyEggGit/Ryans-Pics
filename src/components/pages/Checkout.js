import React from 'react'
import Navbar from '../helperComponents/Navbar';
import BuyItem from '../checkout/BuyItem';
import Footer from '../helperComponents/Footer';



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


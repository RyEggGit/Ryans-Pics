import React, { useState, useEffect } from 'react'
import './BuyItem.css'
import Items from './Item';
import Buy from './Buy'
import Button from '../helperComponents/Button';


function BuyItem(props) {
    let { list, setList } = props

    let removeIndex = (index) => {
        const temp = list[list.indexOf(index)]
        list[list.indexOf(index)] = list[list.length - 1]
        list[list.length - 1] = temp
        list.pop()

        console.log(temp.getName())
        setList([...list])
    }

    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        if (list.length === 0) {
            setEmpty(true);
        }
        else {
            setEmpty(false);
        }

    }, [list])

    const[total, setTotal] = useState(0)

        
    return (
        <div>
            <h1>Checkout </h1>
            <div className='splitscreen'>
                <div className='items-in-bag-grid' >
                    <Items list={list} removeIndex={removeIndex} empty={empty} />
                </div>
                <div className='checkout'>
                    <div className='splitcheckout'>
                        <h2 className='name'>
                            Name
                        </h2>
                        <h2 className='price'>Price</h2>
                    </div>
                    <Buy list={list} setTotal ={setTotal}/>
                    <hr style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .5,
                        borderColor: '#000000'
                    }} />
                    <div className='splitcheckout'>
                        <h2 className='name'>
                            Total
                        </h2>
                        <p className='price'>${total}</p>
                    </div>
                        
                    <Button buttonStyle = 'btn--blue' >Proceed to Checkout <i className="fab fa-paypal"></i></Button>
                </div>
            </div>
        </div>
    )
}

export default BuyItem

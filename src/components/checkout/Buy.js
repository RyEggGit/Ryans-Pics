import React from 'react'
import { useEffect } from 'react/cjs/react.development'

const Buy = (props) => {
    let { list, setTotal } = props
    var tot = 0

    useEffect(() => {
        console.log(tot)
        setTotal(tot)
    })

    return (
        list.map((value, index) => {
            tot += parseInt(value.getPriceInt())
            return (
                <div key={index} className='splitcheckout'>
                    <p className='name'>
                        {value.getName()}
                    </p>
                    <p className='price'>
                        {value.getPriceString()}
                    </p>
                </div>

            )
        })

    )

}

export default Buy

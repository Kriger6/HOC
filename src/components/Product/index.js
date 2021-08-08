import React from 'react'
import withLoading from '../HOC/withLoading';
import {useEffect, useState} from 'react'

function Product(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://the-mobile-store.herokuapp.com/api/phones/').then(response => response.json(response)).then(data => setData(data))
    }, [])
    const id = props.match.params.id
    return (
        <div>
            <h1>Item</h1>
            {data !== null ? 
            <>
            <h3>{data[id - 1].model}</h3> 
            <h3>{data[id - 1].price}</h3>
            <img src={data[id - 1].image} alt="smartphone" /> 
            </> : <br />}
        </div>
    )
}

export default withLoading(Product)

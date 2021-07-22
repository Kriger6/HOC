import React from 'react'
import index from '../../json/index.json'

export default function Product({match}) {
    const id = match.params.id

    return (
        <div>
            <h1>Item</h1>
            <h3>{index[id - 1].model}</h3>
            <h3>{index[id - 1].price}</h3>
            <h3>{index[id - 1].availability}</h3>
            <h3>{index[id - 1].status}</h3>
            
        </div>
    )
}

import React from 'react'
import {useEffect, useState} from 'react'
import index from '../../json/index.json'
import Product from '../Products/product'



export default function Products() {
    

    return (
        <div>
            <h1>Products</h1>
            {index.map(index => (
                <Product key={index.id} props={index}/>
            ))}
            
            
        </div>
    )
}

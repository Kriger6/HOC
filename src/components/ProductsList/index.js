import React from 'react'
import index from '../../json/index.json'
import ProductCard from '../ProductCard/index'
import {Link} from 'react-router-dom'



export default function ProductsList() {
    

    return (
        <div>
            <h1>Products</h1>
            
            {index.map(index => (
                <Link key={index.id} to={`ProductsList/${index.id}`} ><ProductCard props={index} /></Link>
            ))}
            
            
            
        </div>
    )
}

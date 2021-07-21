import React from 'react'
import index from '../../json/index.json'
import ProductCard from '../ProductCard/index'



export default function ProductsList() {
    

    return (
        <div>
            <h1>Products</h1>
            {index.map(index => (
                <ProductCard key={index.id} props={index}/>
            ))}
            
            
        </div>
    )
}

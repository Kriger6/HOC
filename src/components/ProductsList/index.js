import React from 'react'
import index from '../../json/index.json'
import ProductCard from '../ProductCard/index'
import {Link} from 'react-router-dom'
import withLoading from '../HOC/withLoading'



function ProductsList() {
    return (
        <div>
            <h1>Products</h1>
            
            {index.map(index => (
                <Link  key={index.id} to={{
                    pathname:`ProductsList/${index.id}`,
                    aboutProps:{
                        name:'name'
                    }
                }} ><ProductCard props={index} /></Link>
            ))}
            
        </div>
    )
}

export default withLoading(ProductsList)

import React from 'react'
import ProductCard from '../ProductCard/index'
import {Link} from 'react-router-dom'
import withLoading from '../HOC/withLoading'
import {useState, useEffect} from 'react'



function ProductsList() {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://the-mobile-store.herokuapp.com/api/phones/').then(response => response.json(response)).then(data => setData(data))
    }, [])

    return (
        <div className="productsList">
            <h1>Products</h1>
            <section className="list-section">
            {data !== undefined ? data.map(data => (
                <Link key={data.id} to={{ pathname:`ProductsList/${data.id}`}} ><ProductCard props={data} /></Link>
            )) : <br/> }
            </section>
            
        </div>
    )
}

export default withLoading(ProductsList)


// {
//     index.map(index => (
//         <Link key={index.id} to={{
//             pathname: `ProductsList/${index.id}`
//         }} ><ProductCard props={index} /></Link>
//     ))
// }
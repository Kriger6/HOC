import React from 'react'
import withLoading from '../HOC/withLoading';
import {useEffect, useState} from 'react'

function Product(props) {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://the-mobile-store.herokuapp.com/api/phones/${window.location.pathname.split('/')[2]}`)
            .then(response => response.json())
            .then(data => setData(data))
        }

        fetchData()
    }, [])

    return (
        <div className="product">
            {data !== null && data !== undefined ? 
            <>
            <section className="product-section">
                <div>
                    <h2>{data.model}</h2> 
                    <h2>{data.price}$</h2>
                </div>
                <img src={data.image} alt="smartphone" />
            </section>
            <section className="description-section">
                <p>{data.description}</p> 
            </section>
            </> : <br />}
        </div>
    )
}

export default withLoading(Product)

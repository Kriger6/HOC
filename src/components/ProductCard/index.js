import React from 'react'

function ProductCard(props) {
    const {model, price, image} = props.props
    return (
        <div className="productCard">
            <h2>{model}</h2>
            <h2>{price}$</h2> 
            <img src={image} alt="smartphone" />
        </div>
    )
}

export default ProductCard

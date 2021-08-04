import React from 'react'

function ProductCard(props) {
    const {model, price, availability, status, image} = props.props
    return (
        <div className="productCard">
            <h4>{model}</h4>
            <h4>{price}</h4>
            <h4>{availability}</h4>
            <h4>{status}</h4>
        </div>
    )
}

export default ProductCard

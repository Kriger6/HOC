import React from 'react'

function ProductCard(props) {
    const {model, price, image} = props.props
    return (
        <div className="productCard">
            <h4>{model}</h4>
            <h4>{price}</h4>
            <img src={image} alt="smartphone" />
        </div>
    )
}

export default ProductCard

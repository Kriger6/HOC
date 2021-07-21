import React from 'react'

function ProductCard(props) {
    const {model, price, availability, status} = props.props
    return (
        <div style={{background: "blue"}}>
            <h3>{model}</h3>
            <h4>{price}</h4>
            <h4>{availability}</h4>
            <h4>{status}</h4>
        </div>
    )
}

export default ProductCard

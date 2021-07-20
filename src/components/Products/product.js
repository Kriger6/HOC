import React from 'react'

function Product(props) {
    const {model, price, image, availability, status} = props.props
    console.log(props);
    return (
        <div >
            <h3>{model}</h3>
            <h4>{price}</h4>
            <h4>{availability}</h4>
            <h4>{status}</h4>
        </div>
    )
}

export default Product

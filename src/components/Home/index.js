import React from 'react'
import { ReactComponent as Image } from '../../undraw_gone_shopping_vwmc.svg'

function Home() {
    return (
        <div>
            <div className="home">
            <h1>Welcome to Phonestore</h1>
            <h5>We have the latest smartphones on the market</h5>
            <Image style={{paddingTop: "100px"}}/>
            </div>
        </div>
    )
}

export default Home

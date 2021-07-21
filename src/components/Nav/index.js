import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
        <div>
            <nav>
                <Link style={navStyle} to="/" >
                    <h1>Logo</h1>
                </Link>
                <ul className="nav-links">
                    <Link style={navStyle} to="/ProductsList">
                        <li>Products</li>
                    </Link>
                    <Link style={navStyle} to="/About">
                        <li>About us</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

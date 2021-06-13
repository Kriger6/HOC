import React from 'react'
import { ReactComponent as Image } from '../../undraw_about_me_wa29.svg'

function About() {
    return (
        <div>
            <div className="about">
                <h2>About us</h2>
                <div className="aboutContent">
                    <h3>One idea inspired millions</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores atque placeat, totam voluptatem neque sapiente excepturi! Dolor nulla vitae error, molestiae non quisquam a repellat minima mollitia iure aliquid.</p>
                    <Image style={{height: "400px"}} />
                </div>
            </div>
        </div>
    )
}

export default About

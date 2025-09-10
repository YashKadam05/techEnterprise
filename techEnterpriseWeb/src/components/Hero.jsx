import React from 'react'

import "./hero.css"
import Silver from "./3DSilver.png"

export default function Hero() {
  return (
    <>
    <div className="hero">
        <div className="heroText">
            <h1>We Give.</h1>
            <h1 id="secondHead">You <span>Experience</span>.</h1>
            <p>Get Hands on the most Futuristic and Coolest Products in the Market.</p>
            <a href="#products">Products</a>
        </div>
        <div className="heroImg">
            <img src={Silver} alt=""/>
        </div>
    </div>

    </>
  )
}

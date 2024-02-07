import React from 'react'
import image from '../assets/images/hero.png'

function About() {
  return (
<div id="about">
  <div className="about-model">
    <img src={image} alt="" />
  </div>
  <div className="about-text">
    <h2>About Me</h2>
    <h3>I'm Passionate <span className='web' >Web Desginer</span> </h3>
    <p> Enjoy the ultimate web design editor. Divi is like Photoshop or Sketch for the web. It brings an advanced design interface to WordPress that both beginners and experts will fall in love with. It's incredibly smart, super flexible, amazingly powerful and visual by nature. This is how designing for the web is meant to be done.</p>
    <button>Veiw More Details</button>
  </div>
</div>  )
}

export default About
import React from 'react'
import Cards from './Cards'
import image1 from "../assets/images/s1.png"
import image2 from "../assets/images/s2.png"
import image3 from "../assets/images/s3.png"


function Services() {
  return (
    <div id="services">
      <div className="service-heading">
        <h1>Services</h1>
        <p>Here Is The Some Servies Which We Provide You.</p>
      </div>
      <div className="b-container">
      <Cards stype="React"
      simage={image1}
      sdescription="With Divi bas, every part of your website is customizable. You have complete freedom to create the perfect website for you or your clients. Easily change"
      />
      <Cards stype="Python"
      simage={image2}
      sdescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio animi eos doloribus ipsa dolores, ratione atque nesciunt sint deleniti sed."
      />
      <Cards stype="Java"
      simage={image3}
      sdescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime vitae error esse impedit quos"
      />
      </div>
     
     
    </div>
  )
}

export default Services
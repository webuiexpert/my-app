import React from 'react'
import Cards from './Cards/Cards'
import Data from './Cards/Data'
import image1 from './Cards/s1.png'


function Services() {
  return (
    <div id="services">
      <div className="service-heading">
        <h1>Services</h1>
        <p>Here Is The Some Servies Which We Provide You.</p>
      </div>
      <div className="b-container">
      <Cards  
      stype={Data[0].stype}
      simage={image1}
      sdescription={Data[0].sdescription}
      />
      <Cards  
      stype={Data[1].stype}
      simage={image1}
      sdescription={Data[1].sdescription}
      />
      <Cards  
      stype={Data[2].stype}
      simage={image1}
      sdescription={Data[2].sdescription}
      />
      </div>
     
     
    </div>
  )
}

export default Services
import React from 'react'

function Cards(Props) {
  return (
<div className="service-box">
  <div className="service-box-img">
    <div className="service-type">{Props.stype}</div>
    <div className="service-image">{Props.simage}</div>
  </div>
  <div className="service-box-text">
    <a href="#">
      {Props.sdescription}
    </a>
  </div>

</div> 
 )
}

export default Cards
import React from 'react'
import dealsImg from "../../assets/deals.png"
const DealSection = () => {
  return (
   <section className='section__container deals__container'>
<div className="deals__images">
    <img src={dealsImg} alt="" />
</div>
<div className="deals__content">
    <h5>Gets up To 20% Discount</h5>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ab repudiandae dolorum magni voluptate fuga accusantium, 
        neque ipsa deserunt suscipit optio, a sit vitae! Repellat, nobis. Amet fugiat natus eligendi.</p>
        <div className="deals__countdown flex-wrap">
            <div className="deals__countdown__card">
                <h4>14</h4>
                <p>Days</p>
            </div>
            <div className="deals__countdown__card">
                <h4>20</h4>
                <p>Hours</p>
            </div>
            <div className="deals__countdown__card">
                <h4>15</h4>
                <p>Minutes</p>
            </div>
            <div className="deals__countdown__card">
                <h4>05</h4>
                <p>Seconds</p>
            </div>
        </div>
</div>
   </section>
  )
}

export default DealSection;

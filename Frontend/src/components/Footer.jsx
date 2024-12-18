import React from 'react'
import instaImg1 from "../assets/instagram-1.jpg"
import instaImg2 from "../assets/instagram-2.jpg"
import instaImg3 from "../assets/instagram-3.jpg"
import instaImg4 from "../assets/instagram-4.jpg"
import instaImg5 from "../assets/instagram-5.jpg"
import instaImg6 from "../assets/instagram-6.jpg"
const Footer = () => {
  return (
    <>
     <footer className='section__container footer__container'>
        <div className="footer__col">
            <h4>CONTACT INFO</h4>
            <p>
                <span><i class="ri-map-pin-2-fill"></i></span>
                123,London Bridge Street,London
            </p>
            <p>
                <span><i class="ri-mail-fill"></i></span>
                support@ecommerce.com
            </p>
        </div>

        <div className="footer__col">
            <h4>COMPANY</h4>
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Work with Us</a>
            <a href="">Our Blogs</a>
            <a href="">Terms and & condditions</a>
        </div>

        <div className="footer__col">
        <h4>Useful Links</h4>
            <a href="">Help</a>
            <a href="">Track your order</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">Dresses</a>
        </div>

        <div className="footer__col">
            <h4>Instagram</h4>
            <div className="instagram__grid">
<img src={instaImg1} alt="instaImg1" />
<img src={instaImg2} alt="instaImg2" />
<img src={instaImg3} alt="instaImg3" />
<img src={instaImg4} alt="instaImg4" />
<img src={instaImg5} alt="instaImg5" />
<img src={instaImg6} alt="instaImg6" />
            </div>
        </div>
    </footer> 
    <div className="footer__bar">
        Copyright @ 2025 Ecommerce web design.
    </div>
    </>
  )
}

export default Footer

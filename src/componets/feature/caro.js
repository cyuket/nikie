 import React from 'react'
 import Slider from "react-slick";
 import image1 from '../../resources/images/nikie1.jpg';
 import image2 from '../../resources/images/nikie2.jpg';
 import image3 from '../../resources/images/nikie3.jpg';
 const Carrousel = ()=> {
    let settings = {
        dots: false,
        infinite: true,
        autoplay: true, 
        speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1
      };
     return (
       <div className="carrousel_wrapper"
        style={{
            height: `${window.innerHeight}px` ,
            overflow:'hidden'
            }}
       >
       
        <Slider {...settings}>
            <div>
                <div 
                className="carrousel_image"
                style={{
                    background: `url(${image3})`,
                    height:`${window.innerHeight}px`
                }}
                >

                </div> 
            </div>
            <div>
            <div 
                className="carrousel_image"
                style={{
                    background: `url(${image2})`,
                    height:`${window.innerHeight}px`
                }}
                >

                </div>  
            </div>
            <div>
            <div 
                className="carrousel_image"
                style={{
                    background: `url(${image1})`,
                    height:`${window.innerHeight}px`
                }}
                >
 
                </div> 
            </div>
        </Slider>
       </div>
     )
   
 }
 export default Carrousel
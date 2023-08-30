import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper";

import './testimonial.css'
import AVT from '../assests/goku.jpg'

const data=[
  {
    avatar: AVT,
    name: 'Lucifer',
    review:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, atque. Autem quos quae tempora, dolorum cum sapiente illo, numquam eveniet suscipit ipsam exercitationem amet commodi hic sunt reiciendis, adipisci odit!' 

  },
  {
    avatar: AVT,
    name: 'Lucifer',
    review:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, atque. Autem quos quae tempora, dolorum cum sapiente illo, numquam eveniet suscipit ipsam exercitationem amet commodi hic sunt reiciendis, adipisci odit!' 

  },
  {
    avatar: AVT,
    name: 'Lucifer',
    review:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, atque. Autem quos quae tempora, dolorum cum sapiente illo, numquam eveniet suscipit ipsam exercitationem amet commodi hic sunt reiciendis, adipisci odit!' 

  },
  {
    avatar: AVT,
    name: 'Lucifer',
    review:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, atque. Autem quos quae tempora, dolorum cum sapiente illo, numquam eveniet suscipit ipsam exercitationem amet commodi hic sunt reiciendis, adipisci odit!' 

  }
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
          
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper container testimonials_container">{
        data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className='client_name'>{name}</h5>
              <small className='client_review'>
                {review}
              </small>
          </SwiperSlide>
          )
        })      }
      </Swiper>
    </section>
  )
}

export default Testimonial
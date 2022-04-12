import React from 'react'
import './testimonials.css';
import AVTR from '../../../../assets/images/avatar1.jpg'

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data = [
  {
    avatar:AVTR,
    name: 'Avatar 1',
    review: 'lorem30'
  },
  {
    avatar:AVTR,
    name: '2',
    review: 'lorem30'
  },
  {
    avatar:AVTR,
    name: '3',
    review: 'lorem30'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <div className="container testimonials_container">
      {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar}/>
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">
                  {review}
                </small>
              </article>
            )
          })
        }
    </div>

    {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper> */}
  </section>
  )
}

export default Testimonials
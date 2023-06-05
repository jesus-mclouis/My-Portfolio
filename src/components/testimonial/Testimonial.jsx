import React from 'react'
import './testimonial.css'
import T1 from '../../assets/berry.png'
import T2 from '../../assets/czar.png'
import T3 from '../../assets/drake.png'
import T4 from '../../assets/scott.png'
import T5 from '../../assets/harry.png'
import T6 from '../../assets/bryan.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
      id: 1,
      review:
        " I just wanted to take a moment to thank you for all of your help with my last sitetele. Your expertise and guidance were invaluable, and I couldn’t have done it without you. Thanks again for everything!” .",
      avatar: T1,
      name: "Duesenberry Ako",
    },
    {
      id: 2,
      review:
        "I am Epie courage an entrepreneur and I came into contact with Abangma Arrah a through other remarks from friends about his great skills i IT that web building graphic designs etc so I was in need of a web developer to build an e-commerce website which he delivered and even proposed an app for the site which is still to be published names Prime Bay I’ll say this guys is 5star rating he knows his stuff 👍",
      avatar: T2,
      name: "Epie Courage",
    },
    {
      id: 3,
      review:
        "Your willingness to share your knowledge and experience has helped me grow as a developer and has enabled me to deliver a better product to our client. I appreciate your professionalism, attention to detail, and ability to work collaboratively as a team. You truly are a fantastic web developer, and I feel fortunate to have had the opportunity to work with you..",
      avatar: T3,
      name: "Djouse Loic",
    },
    {
      id: 4,
      review:
        "  I just wanted to take a moment to express my sincere gratitude for everything you've done for me as my manager. Your hard work, dedication, and guidance have been invaluable to my success as an artist. Your tireless efforts behind the scenes have allowed me to focus on my craft and create the best possible music. I appreciate your professionalism, attention to detail, and ability to navigate the music industry with ease. Your support and encouragement have meant the world to me, and I feel incredibly fortunate to have you on my team. Thank you for everything you do, and I look forward to continuing our journey together. ",
      avatar: T4,
      name: "Scott",

    },
    {
      id: 5,
      review:
        "As a photographer & videographer, I have worked with many videographers in the past, but your work truly stands out. Your ability to seamlessly blend into the event and capture the important moments without being intrusive was remarkable. The final product was nothing short of spectacular. .",
      avatar: T5,
      name: "Harry",

    },
    {
      id: 6,
      review:
        "I'm glad i was opportune to reach out and thank you for all the help and guidance you provided during our training sessions. Your expertise and motivation have been instrumental in helping me achieve my fitness goals. I appreciate your professionalism, attention to detail, and ability to tailor the workout sessions to my individual needs. You truly are a fantastic trainer, and I feel fortunate to have had the opportunity to work with you. Looking forward to continuing our sessions and achieving even greater results together. Thanks again!",
      avatar: T6,
      name: "Bryan",

    },
  ];

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
          return(
         
        <SwiperSlide  key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
         </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
            {review}
            </small>
          
        </SwiperSlide>
          )
           })
         
         }
        
      </Swiper>
    </section>
  )
}

export default Testimonial

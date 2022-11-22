import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar5.jpg'
import AVTR2 from '../../assets/avatar6.jpg'
import AVTR3 from '../../assets/avatar7.jpg'
import AVTR4 from '../../assets/avatar8.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'Hà Nguyễn',
    review: 'Tôi cảm thấy thật sự yên tâm khi sử dụng dịch vụ tư vấn bảo hiểm nhân thọ của bạn, với những chuyên môn bạn đã chia sẻ tôi đã có những quyết định đúng đắn về việc sử dụng bảo hiểm nhân thọ'
  },
  {
    avatar: AVTR2,
    name: 'Tiến Lê',
    review: 'Kỹ năng về chuyên môn rất tốt, tôi hoàn toàn bị thuyết phục khi sử dụng dịch vụ của cô ấy'
  },
  {
    avatar: AVTR3,
    name: 'Hoàng Anh Vũ',
    review: 'Nghe được tư vấn của bạn là một quyết định vô cùng đúng đắn của tôi, tôi đã có những bước tiến không thể ngờ'
  },
  {
    avatar: AVTR4,
    name: 'Hoa Nguyễn',
    review: 'Dịch vụ của bạn rất tuyệt vời, tôi sẽ sủ dụng nhiều hơn nữa'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Đánh giá từ khách hàng</h5>
      <h2>Lời chứng thực</h2>

      <Swiper className="container testimonials__container" 
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt="Avatar One" />
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

export default Testimonials
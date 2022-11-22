import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Trình độ chuyên môn</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Khách Hàng</h5>
              <small>200+ Worlwide</small>
            </article>
            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Dự án</h5>
              <small>69+ Completed</small>
            </article>
          </div>

          <p>Rất vui vì mọi người đã đến với website cá nhân của tôi. Trải qua nhiều năm làm việc trau dồi tôi đã có được rất nhiều kinh nghiệm quý báu và đó cũng chính là chìa khoá để các bạn có thể mở được cánh cổng của mình. Hãy đến với những dịch vụ mà tôi cung cấp để có thể hiểu và được tôi tư vấn một cách hiệu quả để bạn có được những dịch vụ tuyệt vời nhất !</p>

          <a href="#contact" className='btn btn-primary'>Liên hệ ngay</a>
        </div>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Tôi có những kỹ năng gì</h5>
      <h2>Kinh nghiệm của tôi</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          {/* <h3>Frontend Development</h3> */}
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
                <h4>Học vấn</h4>
                <small className='text-light'>Cử nhân</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
                <h4>Tư vấn bảo hiểm</h4>
                <small className='text-light'>Nhiều năm</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
                <h4>Tư vấn tài chính</h4>
                <small className='text-light'>Chuyên nghiệp</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
                <h4>Chuyên viên hoạch định tài chính</h4>
                <small className='text-light'>1 năm</small>
              </div>
            </article>
     
          </div>
        </div>
        {/* <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
                <h4>MVC</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Experience
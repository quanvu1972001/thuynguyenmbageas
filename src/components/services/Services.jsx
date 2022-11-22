import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>Những gì tôi cung cấp</h5>
      <h2>Dịch vụ</h2>

      <div className="container services__container">

        <article className='service'>
          <div className='service__head'>
            <h3>MỤC ĐẦU TƯ</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>ULLP (sản phẩm doanh nghiệp)</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Sản phẩm đầu tư ngắn bảo vệ dài ( thời hạn 5 năm)</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>SẢN PHẨM CHÍNH</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <a href=""><p>Kiến tạo tương lai</p></a>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <a href=""><p>Món quà phú quý</p></a>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <a href=""><p>Vững tương lai</p></a>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <a href=""><p>Hành trình hạnh phúc</p></a>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <a href=""><p>Ngày mai sẵn sàng</p></a>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <a href=""><p>Bảo hiểm tai nạn – Bảo hiểm toàn diện</p></a>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <a href=""><p>Bảo hiểm ung thư – Ung dung sống trọn</p></a>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>TUYỂN DỤNG</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Trợ lý nhân sự - (3-7tr) + Thưởng</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Quản lý tập sự - (20-25tr) + Thưởng </p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Nhân viên kinh doanh - (10-15tr) + Thưởng</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
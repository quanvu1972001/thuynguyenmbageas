import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaWhatsappSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
// import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Thuý Nguyễn</a>

      <ul className='permalinks'>
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#about">Về tôi</a></li>
        <li><a href="#experience">Kinh nghiệm</a></li>
        <li><a href="#services">Dịch vụ</a></li>
        <li><a href="#portfolio">Sản phẩm</a></li>
        <li><a href="#testimonials">Phản hồi</a></li>
        <li><a href="#contact">Liên hệ</a></li>
      </ul>

      <div  className='footer__socials'>
        <a href=""><BsFacebook/></a>
        <a href=""><AiFillInstagram/></a>
        {/* <a href=""><AiFillTwitterCircle/></a> */}
        <a href="https://zalo.me/0332656697" target="_blank"><FaWhatsappSquare/></a>
      </div>

      <div className='footer__copyright'>
        {/* <small>&copy; QuanVu. All rights reservice</small> */}
      </div>
    </footer>
  )
}

export default Footer
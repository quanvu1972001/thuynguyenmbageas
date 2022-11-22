import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'
import LOGO from '../../assets/logoMB.png'

const Header = () => {
  return (
    <header>
      <div className='logo'>
          <img src={LOGO} alt="" />
        </div>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Thuý Nguyễn</h1>
        <h5 className='text-light'>Chuyên viên hoạch định tài chính</h5>
        <HeaderSocials />
        <CTA />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
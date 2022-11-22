import React from 'react'
import {BsLinkedin,BsInstagram} from 'react-icons/bs'
import {FaWhatsappSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/THUY.HR1368" target="_blank"><BsLinkedin/></a>
        <a href="" target="_blank"><BsInstagram/></a>
        <a href="https://zalo.me/0332656697" target="_blank"><FaWhatsappSquare/></a>
    </div>
  )
}

export default HeaderSocials
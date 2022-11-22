import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsappSquare} from 'react-icons/fa'

import { useRef } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_5nfs0y8', 'service_5nfs0y8', form.current, 'ujPgwmLYOl81j8GPT')
    
  //   e.target.reset();
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5nfs0y8', 'template_xymdfdk', form.current, 'ujPgwmLYOl81j8GPT')
      .then((result) => {
          console.log(result.text);
          // console.log("Gửi thông điệp thành công")
          toast('Bạn đã gửi thông điệp thành công')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Liên hệ ngay</h5>
      <h2>LIÊN HỆ</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>thuy.nt18@mbageaslife.com</h5>
            <a href="">Gửi tin nhắn</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messager</h4>
            <h5>Thuý Nguyễn</h5>
            <a href="">Gửi tin nhắn</a>
          </article>

          <article className='contact__option'>
            <FaWhatsappSquare className='contact__option-icon' />
            <h4>Zalo</h4>
            <h5>0332656697</h5>
            <a href="">Gửi tin nhắn</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Họ và tên' required/>
          <input type="email" name='email' placeholder='Email của bạn' required/>
          <textarea name="message" rows="7" placeholder='Thông điệp của bạn' required></textarea>
          <button type='submit' className='btn btn-primary'>Gửi tin nhắn</button>
          <ToastContainer />
        </form>
      </div>
    </section>
  )
}

export default Contact
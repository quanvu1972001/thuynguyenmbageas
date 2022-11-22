import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpg'
import IMG10 from '../../assets/portfolio10.jpg'
import IMG11 from '../../assets/portfolio11.jpg'
// import IMG12 from '../../assets/portfolio12.jpg'
import IMG13 from '../../assets/portfolio13.jpg'

const data = [
  {
    id:1,
    image: IMG13,
    title: 'ULLP - (sản phẩm doanh nghiệp)',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18492081-Vencold-Cloud-Storage-Dashboard-Design'
  },
  {
    id:6,
    image: IMG8,
    title: 'Bảo hiểm tai nạn – Bảo hiểm toàn diện',
    github: 'https://github.com',
    demo: 'https://www.mbageas.life/san-pham/bao-hiem-tai-nan-toan-dien'
  },
  {
    id:5,
    image: IMG7,
    title: 'Bảo Hiểm Ung Thư - Ung dung sống trọn',
    github: 'https://github.com',
    demo: 'https://www.mbageas.life/san-pham/bao-hiem-ung-dung-song-tron'
  },
  {
    id:2,
    image: IMG9,
    title: 'Ngày mai sẵn sàng',
    github: 'https://github.com',
    demo: 'https://www.mbageas.life/san-pham/ngay-mai-san-sang'
  },
  {
    id:3,
    image: IMG11,
    title: 'Vững tương lai',
    github: 'https://github.com',
    demo: 'https://www.mbageas.life/san-pham/vung-tuong-lai-chung'
  },
  {
    id:4,
    image: IMG10,
    title: 'Hành trình hạnh phúc',
    github: 'https://github.com',
    demo: 'https://www.mbageas.life/san-pham/hanh-trinh-hanh-phuc'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Công việc gần đây của tôi</h5>
      <h2>Danh mục đầu tư</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className='portfolio__item' key={id}>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Liên Hệ</a>
                  <a href={demo} className='btn btn-primary btn__product' target='_blank'>Xem Ngay</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import CV from '../../assets/cvthuynguyen.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Liên hệ ngay</a>
        <a href="https://www.mbageas.life/" className='btn btn-primary'>MB AGEAS</a>
    </div>
  )
}

export default CTA
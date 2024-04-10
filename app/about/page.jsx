import React from 'react'
import HeaderBackground from '../components/HeaderBackground'

// import AboutBackground from '../asset/about_me.jpg'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'




const page = () => {
  const AboutBackground = 'https://www.xero.com/content/dam/xero/pilot-images/product-pages/xero-me/xero-me-video-header.1646877536840.jpg'
  return (
    <>
    <HeaderBackground title={'About Me'} background={AboutBackground}/>
    <AboutMe/>
    <Skills/>
    </>
  )
}

export default page
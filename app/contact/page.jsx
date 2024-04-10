import React from 'react'
import HeaderBackground from '../components/HeaderBackground'
import ContactForm from '../components/ContactForm'

const page = () => {
  return (
    <>
    <HeaderBackground title={'Contact Me'} background={'https://www.droptica.com/sites/droptica.com/files/styles/blog_banner_image/public/media/image/contact-pages.png?itok=hIt85Ptt'}/>
    <ContactForm/>
    </>
  )
}

export default page
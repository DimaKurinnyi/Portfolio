import React from 'react'
import Portfolio from '../components/Portfolio'
import HeaderBackground from '../components/HeaderBackground'

const page = () => {
  return (
    <>
    <HeaderBackground title={'My Projects'} background={'https://www.mgpu.ru/wp-content/uploads/2021/02/img-20191017093350-430.jpg'}/>
    <Portfolio/>
    </>
  )
}

export default page

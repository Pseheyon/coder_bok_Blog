import React from 'react'
import Aside from './Contents/aside/Aside'
import MainListBox from './Contents/writeList/MainListBox'
// import {HomePage} from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className='contents'>
      <Aside></Aside>
      <MainListBox></MainListBox>
    </div>
  )
}

export default HomePage
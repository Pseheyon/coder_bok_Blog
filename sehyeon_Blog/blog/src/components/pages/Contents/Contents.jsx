import React from 'react'
import Aside from './aside/Aside'
import MainListBox from './writeList/MainListBox'

const Contents = () => {
  return (
    <div className='contents'>
      <Aside></Aside>
      <MainListBox></MainListBox>
    </div>
  )
}

export default Contents
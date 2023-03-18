import React from 'react'
import WritePostMain from './WritePostMain'
import Aside from '../Contents/aside/Aside'


const WritePost = () => {
  return (
    <div className='contents'>
      <Aside></Aside>
      <WritePostMain></WritePostMain>
    </div>
  )
}

export default WritePost
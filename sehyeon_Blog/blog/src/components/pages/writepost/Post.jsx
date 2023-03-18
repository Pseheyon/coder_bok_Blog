/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
// import Button from '../../styldeComponents/StyldeTemplate'
// import styled, {css} from 'styled-components';
// import React, {useState} from 'react';



const Post = () => {

  return (

      <ul className='postArea'>
        <li className='postInner'>
          <div className='postTop'>
            <div className='hartCenter'>
              <img src='http://localhost:3000/img/hartPuple.png' alt='hartPuple'className='hartPuple'/>
            </div>
            <div className='postBtnright'>
              <button className='blkBtnline postpenBtn'><img src='http://localhost:3000/img/penBtn.png' alt="penBtn" /></button>
              <button className='blkBtnline postcloseBtn'><Link to="/"><img src='http://localhost:3000/img/closeBtn.png' alt="closeBtn" /></Link></button>
            </div>
          </div>
          <form className='postBox'>
              <div className='postText'>
                
                <div className='postTXT'>
                <input className='postInput title'name='title' type="text"  placeholder='글 제목을 입력하세요.' />
                <textarea className='postInput txt'name='txt' type="text" placeholder='글 내용을 입력하세요.' />
                </div>
              </div>
            <button className='blkBtnline postDone' type='submit'><Link to="/">완료</Link></button>
          </form>
          
        </li>
      </ul>
    
  )
}

export default Post
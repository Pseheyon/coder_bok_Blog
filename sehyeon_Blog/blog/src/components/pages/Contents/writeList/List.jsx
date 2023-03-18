import React from 'react'

const List = () => {
  return (

      <ul className='listBox'>
        <li className='listInner'>
          <div className='postTop'>
            <div className='hartCenter'>
              <img src='http://localhost:3000/img/hartPuple.png' alt='hartPuple'className='hartPuple'/>
            </div>
            <div className='postBtnright'>
              <button className='blkBtnline postpenBtn'><img src='http://localhost:3000/img/penBtn.png' alt="penBtn" /></button>
              <button className='blkBtnline postcloseBtn'><img src='http://localhost:3000/img/closeBtn.png' alt="closeBtn" /></button>
            </div>
          </div>
          <div className='listText'>
              <div className='listTitle'>
                <img src='http://localhost:3000/img/dia.png' alt='dia'className='dia'/>
                <div className='TXT'>
                <h3 name='title'>POST/GET 사용법</h3>
                <p className='TXTmin' name='txt'>안녕하세요 코딩 1일차 박세현입니다.</p>
                </div>
              </div>
            <p className='date' name='date'>2월 19일 발행</p>
          </div>
          <div></div>
        </li>
    </ul>

  )
}

export default List
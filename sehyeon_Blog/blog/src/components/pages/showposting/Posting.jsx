import React from 'react'

const Posting = () => {
  return (
    <div>
      <ul className='listBox'>
        <li className='listInner'>
          <img src='http://localhost:3000/img/hartPuple.png' alt='hartPuple'className='hartPuple'/>
          <div className='listText'>
              <div className='listTitle'>
                <img src='http://localhost:3000/img/dia.png' alt='dia'className='dia'/>
                <div className='TXT'>
                <h3>POST/GET 사용법</h3>
                <p className='TXTmin'>안녕하세요 코딩 1일차 박세현입니다.</p>
                </div>
              </div>
            <p className='date'>2월 19일 발행</p>
          </div>
          <div></div>
        </li>
      </ul>
    </div>
  )
}

export default Posting
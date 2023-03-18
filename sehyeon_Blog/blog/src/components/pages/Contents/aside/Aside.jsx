import React from 'react'

const Aside = () => {
  return (
    <div className='aside'>
      {/* <div className='blckboxs'>
        <div className='box box1'></div>
        <div className='box box2'></div>
        <div className='box box3'></div>
        <div className='box box4'></div>
      </div> */}
      <div className='asideBox'>
        <img src='http://localhost:3000/img/hartRing.png' alt='hartRing'className='hartRing'/>
        <img src='http://localhost:3000/img/profil.png' alt='profil'className='profil'/>
        <ul className='index'>
          INDEX
          <li><a href="">All</a></li>
          <li><a href="">Coding</a>
            <ul>
              <li><a href="">React</a></li>
              <li><a href="">JavaScript</a></li>
              <li><a href="">Html/Css</a></li>
            
            </ul>
          </li>
          <li><a href="">TIL</a></li>
          <li><a href="">W</a></li>
          <li><a href="">Design</a></li>
        </ul>
      </div>
    </div>

  )
}

export default Aside
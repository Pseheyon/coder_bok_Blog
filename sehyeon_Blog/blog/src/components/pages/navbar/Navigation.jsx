import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <div className='nav'>
          <div className='navLeft' href='/'>
            <img src='http://localhost:3000/img/leftStar.png' alt='leftStar' className='leftStar'/>
            <Link to='/'><div className='blogName'>coder_Bok_Blog</div></Link>
          </div>
          <nav className='navRight'>
          <p className='login'><Link to="./login">Login</Link></p>
            <div className='addNav'>
              <Link to="./post"><img title='글쓰기' className='writePen' src='http://localhost:3000/img/writePen.png'alt='wirtePen'/></Link>
            </div>
            
            <Link to="./signup"><img title='sign in' className='darkMode rightStar' src='http://localhost:3000/img/rightStar.png' alt='rightStar' /></Link>
          </nav>
    </div>

  )
}

export default Navigation
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';



export default function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState('false');
  const navigate = useNavigate()
  async function login(ev){
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login',{
      method:'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
      credentials:'include',
    });

    if (response.ok){
      setRedirect(true);
    }else{
      alert('잘못된 로그인입니다.')
    }
    if(redirect){
      return navigate('/')
    }
  }
  return (
    <div className='main loginBox'>
      <div className='blckboxs'>
        <div className='box box1'></div>
        <div className='box box2'></div>
        <div className='box box3'></div>
        <div className='box box4'></div>
      </div>
      
        <div className='mainInner'>
                
          <div className='listOtuline'>
            <div className='listWrap loinWrap' id='loinWrap onlylogin'>
                <h2 className='logindo' id='onlylogin'>Log in</h2>
                <form className='formLogin logIn' onSubmit={login}>
                  <span><span>ID : </span><input type="text" className='loginInput' placeholder='username' value={username} onChange={ev => setUsername(ev.target.value)}/></span>
                  <span><span>PW : </span> <input type="password"className='loginInput' placeholder='password' value={password} onChange={ev => setPassword(ev.target.value)}/></span>
                  <span><button className='loginBtn'>Login</button></span>
                </form>
              </div>
          </div>
        </div>
      </div>
  )
}


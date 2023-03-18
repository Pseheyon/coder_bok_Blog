import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Signup(){
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
async function signup(ev){
  ev.preventDefault();
  const response = await fetch('http://localhost:4000/signup',{
    method:'POST',
    body: JSON.stringify({username,password}),
    headers: {'Content-Type':'application/json'},
    });

    if (response.status === 200){
      alert('로그인에 성공하셨습니다.')
    }else{
      alert('가입에 실패하였습니다. 잠시후 시도해 주세요.')
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
          <div className='listWrap loinWrap' id='loinWrap'>
              <h2 className='logindo'>Sign up</h2>
              <p className='docomf'>Alredady amember?<span> <Link to='../login'>Log-in</Link></span></p>
              <form className='formLogin singUp' onSubmit={signup}>
                <span><span>ID : </span><input type="text" className='loginInput' placeholder='username' value={username} onChange={ev => setUsername(ev.target.value)}/></span>
                <span><span>PW : </span> <input type="password" className='loginInput' placeholder='password' value={password} onChange={ev => setPassword(ev.target.value)}/></span>
                <span><button className='loginBtn'>Sing up</button></span>
              </form>
            </div>
        </div>
      </div>
    </div>
      )
}


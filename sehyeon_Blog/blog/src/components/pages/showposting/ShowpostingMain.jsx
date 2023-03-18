import React from 'react'
import Posting from './Posting'

const ShowpostingMain = () => {
  return (
    <div className='main'>
    <div className='blckboxs'>
      <div className='box box1'></div>
      <div className='box box2'></div>
      <div className='box box3'></div>
      <div className='box box4'></div>
    </div>

    <div className='mainInner'>
        
        <div className='listOtuline'>
        <div className='listWrap'>
            <Posting></Posting>
        </div>
        </div>
        
    </div>
    
</div>

  )
}

export default ShowpostingMain
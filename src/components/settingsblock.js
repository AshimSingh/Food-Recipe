import React from 'react'

const Settingsblock = () => {
  return (
    <div className='settingsBody'>
      <div className='chefBox'>
        <div className='block'>
            <h2>Preferred Theme</h2>
           <div className='sblock'>
            <div className='colorBox'></div>
             <div className='colorBox'></div>
           </div>
        </div>
      </div>
      <div className='chefBox'>
        <div className='block'>
            <h2>Primary Color</h2>
           <div className='sblock p'>
            <div className='colorBox'></div>
             <div className='colorBox'></div>
             <div className='colorBox'></div>
             <div className='colorBox'></div>
             <div className='colorBox'></div>
           </div>
        </div>
      </div>
      <div className='chefBox'>
        <div className='block'>
            <h2>Font Size</h2>
           <div className='sblock'>
                <button className='sbtn'>Small</button>
                <button className='sbtn'>Medium</button>
                <button className='sbtn'>Large</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Settingsblock

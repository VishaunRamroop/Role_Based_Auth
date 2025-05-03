import { useState} from 'react'

export default function CustomButton({ icon:Icon,children,...props}) {
  return (
    <div className='custom-btn-container' style={{display:'flex',justifyContent:'center',gap:'10px'}}>
          <div className="icon-wrapper" style={{display:'flex',justifyContent:'center',alignItems:'center', gap:'10px'}}>
            <Icon/>
          </div>
          <button {...props}>{children}</button>
    </div>
  )
}

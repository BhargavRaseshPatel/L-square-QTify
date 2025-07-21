import React from 'react'

const Button = ({value}) => {
  return (
    <div>
        <input type='button' className='button' value={value} />
    </div>
  )
}

export default Button
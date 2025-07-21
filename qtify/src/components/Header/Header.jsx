import React from 'react'
import './Header.css'
import Button from './Button'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='header-content'>

      <Logo />

      <div className='header-search'>
        <input type='text' className='text-search' placeholder='Search a album of your choice' />
      </div>

      {/* <Button variant='contained' className='header-button'>Give Feedback</Button> */}
      <div>
        <Button value={'Give Feedback'} />
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import './Header.css'
import Button from './Button'
import Logo from './Logo'
import Search from './Search'

const NavBar = () => {
  return (
    <div className='header-content'>

      <Logo />

      <Search />

      <div>
        <Button value={'Give Feedback'} />
      </div>
    </div>
  )
}

export default NavBar
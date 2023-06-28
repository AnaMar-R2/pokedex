import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='header__rectangle_red'>
          <img className='header__img' src="/images/pokedex.png" alt="pokedex" />
        </div>
        <div className='header__rectangle_black'>
          <div className='header__circle_big'>
            <div className='header__circle_small'></div>
          </div>
        </div>
    </header>
  )
}

export default Header
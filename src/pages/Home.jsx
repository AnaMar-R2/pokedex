import React, { useRef } from 'react'
import { setTrainerNameG } from '../store/slices/trainerName.slices'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/home.css'

const Home = () => {

  const trainerNameRef = useRef()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerNameG(trainerNameRef.current.value.trim())) 
    navigate('/pokedex')
  }

  return (
    <div className='home'>

      <div className='home__body'>
        <div className='home__container_img'>
          <img className='home__img' src="/images/pokedex.png" alt="" />
        </div>
        <div className='home__title_text'>
          <h2 className='home__title'>Hi Trainer!</h2>
          <p className='home__text'>To start in this application, please, give me your trainer name.</p>
        </div>
        <form className='home__form' onSubmit={handleSubmit}>
          <input className='home__input' ref={trainerNameRef} type="text" />
          <button className='home__button'>Catch them all!</button>
        </form>
      </div>
      <footer className='home__footer'>
        <div className='home__rectangle_red'></div>
        <div className='home__rectangle_black'>
          <div className='home__circle_big'>
            <div className='home__circle_small'></div>
          </div>
        </div>
    </footer>
    </div>
  )
}

export default Home
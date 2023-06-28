import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux'
import PokeContainer from '../components/Pokedex/PokeContainer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Pokedex/Header'
import './styles/Pokedex.css'

const Pokedex = () => {

  const [selectValue, setSelectValue] = useState('all-pokemons')

  const trainerName = useSelector(states => states.trainerName)

  let url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  const [pokemons, getAllPokemons, hasError, setPokemons] = useFetch(url)
  const urlTypes = `https://pokeapi.co/api/v2/type`
  const [types, getAllTypes] = useFetch(urlTypes)

  useEffect(() => {
    if (selectValue === 'all-pokemons') {
      getAllPokemons()
    } else {
      axios.get(selectValue)
        .then(res => {
          const data = {
            results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
          }
          setPokemons(data)
        })
        .catch(err => console.log(err))
    }
  }, [selectValue])
  

  useEffect(() => {
    getAllTypes()
  }, [])

  const searchPokemon = useRef()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = searchPokemon.current.value.trim().toLowerCase()
    navigate(`/pokedex/${inputValue}`)
  }

  const handleChangeType = e => {
    setSelectValue(e.target.value)
  }

  return (
    <>
      <Header/>
      <div className='pokedex'>
        <p className='pokedex__text'> <span className='pokedex__span'>Welcome {trainerName},</span> you can dind your favorite pokemon</p>
        <div className='pokedex__search'>
          <form className='pokedex__form' onSubmit={handleSubmit}>
            <input className='pokedex__input' ref={searchPokemon} placeholder='Look for a pokemon...' type="text" />
            <button className='pokedex__button'>Search</button>
          </form>
          <select className='pokedex__select' onChange={handleChangeType}> 
            <option value='all-pokemons'>All Pokemons</option>
            {
              types?.results.map(typeInfo => (
                <option 
                value={typeInfo.url}
                key={typeInfo.url}
                >{typeInfo.name}</option>
                ))
              }
          </select>
        </div>
      </div>
      <PokeContainer pokemons={pokemons?.results}/>
    </>
  )
}

export default Pokedex
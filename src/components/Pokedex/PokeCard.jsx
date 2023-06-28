import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './styles/pokeCard.css'

const PokeCard = ({ url }) => {

  const [pokemon, getPokemonById] = useFetch(url)

  useEffect(() => {
    getPokemonById()
  }, [])

  const navigate = useNavigate()
  
  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.name}`)
  }

  return (
    <article className={`pokecard border-${pokemon?.types[0].type.name}`} onClick={handleNavigate}>
      <header className={`pokecard__header bg-${pokemon?.types[0].type.name}`}>
        <img 
          className='pokecard__img'
          src={pokemon?.sprites.other['official-artwork'].front_default} 
          alt="image-pokemon" />
      </header>
      <section className='pokecard__body'>
        <h3 className={`pokecard__name ${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <ul className='pokecard__types'>
          {
            pokemon?.types.map(typeInfo => (
              <li 
                className='pokecard__types_item' 
                key={typeInfo.url}
              >{typeInfo.type.name}</li>
            ))
          }
        </ul>
      </section>
      <footer className='pokecard__footer'>
        <ul className='pokecard__stats'>
          {
            pokemon?.stats.map(statinfo => (
              <li className='pokecard__stats_items' key={statinfo.stat.url}>
                <span className='pokecard__stats_label'>{statinfo.stat.name}</span>
                <span className={`pokecard__stats_value ${pokemon?.types[0].type.name}`}>{statinfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokeCard
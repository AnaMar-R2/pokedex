import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Header from '../components/Pokedex/Header'
import './styles/pokedexName.css'

const PokedexName = () => {

  const { name } = useParams()

  const url =  `https://pokeapi.co/api/v2/pokemon/${name}`
  const [pokemon, getPokemonByName, hasError] = useFetch(url)

  useEffect(() => {
    getPokemonByName()
  }, [name])

  console.log(pokemon)

  return (
    <div>
      <Header/>
      {
        hasError
        ? <h1>The pokemon "<span>{name}</span>" doesn't exist</h1>
        : (
            <>
              <div>
                <section className="Pokeinfo">
                  <div className="pokeinfo__bx1">
                    <div className={`pokein__bx1__header bg-${pokemon?.types[0].type.name}`}>
                      <img
                        className="pokein__bx1__header-img"
                        src={pokemon?.sprites.other["official-artwork"].front_default}
                        alt="photo_pokemon"
                      />
                    </div>
                    <div className="pokeinfo__bx1__id__container">
                      <h2 className={`pokeinfo__bx1__id color-${pokemon?.types[0].type.name}`}>
                        #{pokemon?.id}
                      </h2>
                    </div>
                    <div className="pokeinfo__bx1__name__container">
                      <h1 className={`pokeinfo__bx1__name color-${pokemon?.types[0].type.name}`}>
                        {pokemon?.name}
                      </h1>
                    </div>
                    <div className="pokeinfo__bx1__characters">
                      <span className="pokeinfo__bx1__character">Weight</span>
                      <span className="pokeinfo__bx1__character">Height</span>
                      <span className="pokeinfo__bx1__character-value">{pokemon?.weight}</span>
                      <span className="pokeinfo__bx1__character-value">{pokemon?.height}</span>
                    </div>
                    <div className="pokeinfo__bx1__container-all">
                      <div className="pokeinfo__bx1__TA">
                        <div className="pokeinfo__bx1__types">
                          <h2 className="pokeinfo__bx1__type">Type</h2>
                          {pokemon?.types.map((type) => (
                            <span
                              className={`pokeinfo__bx1__type-info bg-${type.type.name}`}
                              key={type.type.url}
                            >
                              {type.type.name}
                            </span>
                          ))}
                        </div>
                        <div className="pokeinfo__bx1__abilities">
                          <h2 className="pokeinfo__bx1__ability">Ability</h2>
                          {pokemon?.abilities.map((ability) => (
                            <span
                              className="pokeinfo__bx1__ability-info"
                              key={ability.ability.url}
                            >
                              {ability.ability.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="pokeinfo__bx1__h2__container">
                        <h2 className="pokeinfo__bx1__h2">Stats</h2>
                      </div>
                      <div className="pokeinfo__bx1__stat-info">
                        {pokemon?.stats.map((stat) => (
                          <div className="pokeinfo__bx1__stat__subcontainer">
                            <div className="pokeinfo__bx1__stat__items">
                              <span className="pokeinfo__bx1__stat-name">
                                {stat.stat.name}
                              </span>
                              <p className="pokeinfo__bx1__stat-percentage">
                                {stat.base_stat}/100
                              </p>
                            </div>
                            <div
                              className="pokeinfo__bx1__stat__bar"
                              style={{
                                background: `linear-gradient(90deg, #e6901e 0, #fcd676 ${stat.base_stat}%, rgb(231, 231, 231) ${stat.base_stat}% )`,
                              }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pokeinfo__box2">
                    <div className="pokeinfo__bx2__h2__container">
                      <h2 className="pokeinfo__bx2__h2">Movements</h2>
                    </div>
                    <div className="pokeinfo__bx2__moves__container">
                      {pokemon?.moves.map((move) => (
                        <h3 className="pokeinfo__bx2__move">{move.move.name}</h3>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </>
          )
      }
    </div>
  )
}

export default PokedexName
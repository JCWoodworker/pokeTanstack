import "./App.css"
import { useEffect, useState } from "react"

interface Pokemon {
  name: string
  url: string
}

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const getPokeData = async (limit: number, offset: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const data = await response.json()
    setPokemon(data.results)
  }

  console.log(pokemon)  

  useEffect(() => {
    getPokeData(20, 20)
  }, [])

	return (
		<>
			<div>
				<h1>Testing Tanstack Query</h1>
        {pokemon.map((pokemon, index) => (
          <div key={pokemon.name}>
            <h2>{pokemon.name} - {index + 1}</h2>
          </div>
        ))}
			</div>
		</>
	)
}

export default App

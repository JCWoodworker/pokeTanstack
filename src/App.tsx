import "./App.css"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Pagination from "./pagination"
import PokeCard from "./PokeCard"

export interface Pokemon {
	name: string
	url: string
}

function App() {
	const [page, setPage] = useState(1)
	const limit = 20
	const offset = (page - 1) * limit

	const getPokeData = async (limit: number, offset: number) => {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
		)
		return await response.json()
	}

	const { data, isLoading, isError } = useQuery({
		queryKey: ["pokemon", page],
		queryFn: () => getPokeData(limit, offset),
	})

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error: {data?.error}</div>

	return (
		<>
			<h1>Testing Tanstack Query</h1>
			<Pagination
				page={page}
				setPage={setPage}
				totalCount={151}
				limit={limit}
			/>
			<div className="app-container">
				{data?.results.map((pokemon: Pokemon) => (
					<PokeCard key={pokemon.name} {...pokemon} />
				))}
			</div>
		</>
	)
}

export default App

import { useQuery } from "@tanstack/react-query"
import { Pokemon } from "./App"

const PokeCard = ({ name, url }: Pokemon) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["individual-pokemon", name],
		queryFn: () => fetch(url).then((res) => res.json()),
	})

	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error: {data?.error}</div>

	return (
		<div className="poke-card" onClick={() => alert(`# ${data?.id} of 151`)}>
			<h2>{name}</h2>
			<img src={data?.sprites.front_default} />
		</div>
	)
}

export default PokeCard

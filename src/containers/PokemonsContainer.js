import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Pokemon } from '../components/Pokemons';
import { GET_POKEMONS } from '../graphql/get-pokemons';

// import "../src/App.css";

export default function PokemonsContainer() {
	const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
		variables: { first: 9 }
	});

	return (
		<div className="container">
			<h1>REACT WITH GRAPHQL</h1>
			{pokemons && pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
		</div>
	);
}

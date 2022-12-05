import { createContext, useState } from "react";

import { isFavorita } from '../api/axios.js'

export const SearchContext = createContext()

export function SearchContextProvider(props) {
	const [buscar, setBuscar] = useState("star war")

	const checkFavorita = (peliID, userID) => {
		isFavorita(peliID, userID)
			.then(data => {
				const marcado = data.id !== undefined ? true : false
				console.log("IS FAVORITOooo", {data}, {marcado}, {peliID}, {userID})
				return data
			}
		)
	}

	return (
		<SearchContext.Provider value={
			{buscar, setBuscar, checkFavorita}
		}>
			{props.children}
		</SearchContext.Provider>
	)
}

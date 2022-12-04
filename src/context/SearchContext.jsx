import { createContext, useState } from "react";

export const SearchContext = createContext()

export function SearchContextProvider(props) {
	const [buscar, setBuscar] = useState("star war")

	return (
		<SearchContext.Provider value={
			{buscar, setBuscar}
		}>
			{props.children}
		</SearchContext.Provider>
	)
}

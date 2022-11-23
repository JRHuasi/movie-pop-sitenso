import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import React from 'react'
import { parse } from '@fortawesome/fontawesome-svg-core';
const star = <FontAwesomeIcon icon={faStar} />
const starHalf = <FontAwesomeIcon icon={faStarHalf} />

function Rating({valor}) {
	const entero = parseInt(valor);
	const resto = parseInt((valor - entero) * 10);
	// console.log({resto})
	// si este
	const estrellas = resto > 7 ? Math.round(valor) : entero;
	const media = (resto >= 3 && resto <= 7) ? true :false

	return (
		<div className='estrellas'>
			{[...Array(estrellas)].map((e, i) => <div key={i}>{star}</div>)}
			
			<div>
				{media && (starHalf)}
			</div>
			<small>[{valor}]</small>
		</div>
	)
}
export default Rating
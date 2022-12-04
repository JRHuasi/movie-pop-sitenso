import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import React from 'react'
import { parse } from '@fortawesome/fontawesome-svg-core';
const star = <FontAwesomeIcon icon={faStar} />
const starHalf = <FontAwesomeIcon icon={faStarHalf} />
const heart = <FontAwesomeIcon icon={faHeart} />


function Rating({valor, setFarovito, favorito}) {
	const entero = parseInt(valor);
	const resto = parseInt((valor - entero) * 10);
	// console.log({resto})
	// si este
	const estrellas = resto > 7 ? Math.round(valor) : entero;
	const media = (resto >= 3 && resto <= 7) ? true :false
	console.log({valor})

	return (
		<div className="rating-fav">
			<div className="calificacion">
				<div className='estrellas'>
					{[...Array(estrellas)].map((e, i) => <div key={i}>{star}</div>)}			
					<div>
						{media && (starHalf)}
					</div>
					<small>[{valor}]</small>
				</div>
			</div>
			<div className={"favorito " + (favorito ? 'elegido' : '') + " boton"}>
				<div onClick={setFarovito}>
					{heart}
				</div>
			</div>

		</div>
	)
}
export default Rating
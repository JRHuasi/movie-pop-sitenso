export const tomarFechaFormatoArg = (fechahora) => {
	const fecha = fechahora.split(" ")[0];
	const partes = fecha.split("-");
	return partes[2]+"/"+partes[1]+"/"+partes[0];
}
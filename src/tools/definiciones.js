
const uris = 
[
	"http://localhost/movie-pop-sitenso/public/api",
	"https://moviepop.tucma.com/api"
];

// 0 localhost
// 1 dominio real
const entorno = window.location.hostname == "localhost" ? 0 : 1;
export const apiURL = uris[entorno];
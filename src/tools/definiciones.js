
const uris = 
[
	"http://localhost/movie-pop-sitenso/public/api",
	"https://moviepop.tucma.com/api"
];

const urisTV = 
[
	"http://127.0.0.1:8000/api/",
	"https://apimoviepop.tucma.com/api/"
];

// 0 localhost
// 1 remote
const entorno = window.location.hostname == "localhost" ? 0 : 1;
export const apiURL = uris[entorno];
export const apiURLTV = urisTV[entorno];
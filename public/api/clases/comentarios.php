<?php 
	class Comentarios extends Conexion{

		function __construct($OrdenID=null){
			parent::__construct();
		}

		function listaComentarios($peliID){
			$query = "SELECT * FROM comentarios WHERE peliID = '$peliID'";
			$lista = $this->obtenerDatos($query);
			return $lista;
		}	

		function nuevoNroOrden(){
			$query = "SELECT ordenNro FROM orden_de_trabajo WHERE 1 ORDER BY fechaCarga DESC LIMIT 1";			
			$lista = $this->obtenerDato($query);
			return $lista?$lista['ordenNro']+1:1;
		}

		function addComentario($userID, $peliID, $texto){
			// Evita injeción de SQL
			$texto = $this->filtrar($texto);
			$query = "INSERT INTO comentarios SET peliID = '$peliID', userID = '$userID', texto = '$texto'";			
			$lista = $this->nonQueryId($query);
			return $lista;
		}
		
		function setFavorito($userID, $peliID, $afiche, $nombre){
			$query = "INSERT INTO favoritos SET peliID = '$peliID', userID = '$userID', afiche = '$afiche', nombre = '$nombre'";
			$lista = $this->nonQueryId($query);
			return $lista;
			// return $query;
		}
		
		function getFavorito($userID, $peliID){
			$query = "SELECT * FROM favoritos WHERE peliID = '$peliID' AND userID = '$userID'";
			$lista = $this->obtenerDato($query);
			return $lista;
			// return $query;
		}

		function getPelisFavoritas($userID){
			$query = "SELECT * FROM favoritos WHERE userID = '$userID'";			
			$lista = $this->obtenerDatos($query);
			return $lista;
			// return $query;
		}
		

	}
?>
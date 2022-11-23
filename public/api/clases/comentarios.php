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
			$nro = false;
			$lista = $this->obtenerDato($query);
			return $lista?$lista['ordenNro']+1:1;
		}

		function addComentario($userID, $peliID, $texto){
			// Evita injeción de SQL
			$texto = $this->filtrar($texto);
			$query = "INSERT INTO comentarios SET peliID = '$peliID', userID = '$userID', texto = '$texto'";
			$nro = false;
			$lista = $this->nonQueryId($query);
			return $lista;
		}
		
		function setFavorito($userID, $peliID){
			$query = "INSERT INTO favoritos SET peliID = '$peliID', userID = '$userID'";
			$nro = false;
			$lista = $this->nonQueryId($query);
			return $lista;
			// return $query;
		}
		
		function getFavorito($userID, $peliID){
			$query = "SELECT * FROM favoritos WHERE peliID = '$peliID' AND userID = '$userID'";
			$nro = false;
			$lista = $this->obtenerDato($query);
			return $lista;
			// return $query;
		}
		

	}
?>
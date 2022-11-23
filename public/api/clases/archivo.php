<?php 
	class Archivo{

		public function getListadoImagenes($prefijo,$camino="imagenes/alojamientos/lugar",$album=null,$invertir=null){
			$listado=array();
			$fotos = scandir($camino);
			if($invertir) $fotos = rsort($fotos);
			foreach ($fotos as $key => $elemento) 
			{
				// $partes = explode(".", $elemento);
				$largo = strlen($elemento);
				// echo substr($elemento, $largo-(stripos($elemento, "ch")?14:11),3)."<br>";
				// tomo solo el prefijo del nombre del archivo para comparar
				$perma = substr($elemento, 0, ($largo-(stripos($elemento, "ch")?11:8)));
				$sufijo = substr($elemento, $largo-(stripos($elemento, "ch")?10:7),3);
				// tomo el nombre del archivo sin el "_ch" ni ".jpg"
				$nombre_archivo = substr($elemento, 0, ($largo-(stripos($elemento, "ch")?6:4)));
				if(strtolower($perma)==strtolower($prefijo) && $sufijo != "000" && !(stripos($elemento, "ch"))){
					$listado[$key]=$nombre_archivo;
				}
			}
			return $listado;
		}

	}


?>
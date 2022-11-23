<?php

class conexion extends Extra
{

  private $server;
  private $user;
  private $password;
  private $database;
  private $port;
  private $conexion;

  /* {
    "conexion": {
      "server": "localhost",
      "user": "u782511739_moviepop",
      "password": "LhEqFXrPR9SYbtP",
      "database": "u782511739_moviepop",
      "port": "3306"
    }
  }
  */

  function __construct()
  {
		if($_SERVER['DOCUMENT_ROOT']=='F:/Usuarios/Julian/www'){
			$this->server = "localhost";
			$this->user = "root";
			$this->password = "ariana";
			$this->database = "sitenso_moviepop";
			$this->port = 3306;
		}else{
			$this->server = "localhost";
			$this->user = "u782511739_moviepop";
			$this->password = "LhEqFXrPR9SYbtP";
			$this->database = "u782511739_moviepop";
			$this->port = 3306;
		}
		$this->conexion = new mysqli($this->server, $this->user, $this->password, $this->database, $this->port);
    if ($this->conexion->connect_errno) {
      echo "algo va mal con la conexion".$this->conexion->connect_errno;
      die();
    }
  }

  private function datosConexion()
  {
    $direccion = dirname(__FILE__);
    $jsondata = file_get_contents($direccion . "/" . "config.json");
    return json_decode($jsondata, true);
  }

  private function convertirUTF8($array)
  {
		array_walk_recursive($array, function (&$item, $key) {
			if (!mb_detect_encoding($item, 'utf-8', true)) {
				$item = utf8_encode($item);
      }
    });
    return $array;
  }
	
	function filtrar($texto){
		return $this->conexion->real_escape_string($texto);
	}

  public function obtenerDatos($sqlstr)
  {
    $results = $this->conexion->query($sqlstr);
    $resultArray = [];
    foreach ($results as $key) {
      $resultArray[] = $key;
    }
    return $this->convertirUTF8($resultArray);
  }

  public function obtenerDato($sqlstr)
  {
    $results = $this->conexion->query($sqlstr);
    $resultado = [];
    foreach ($results as $key) {
      $resultado = $key;
    }
    return $this->convertirUTF8($resultado);
  }
  
  public function nonQuery($sqlstr)
  {
    $results = $this->conexion->query($sqlstr);
    return $this->conexion->affected_rows;
  }

  //INSERT 
  public function nonQueryId($sqlstr)
  {
    $results = $this->conexion->query($sqlstr);
    $filas = $this->conexion->affected_rows;
    if ($filas >= 1) {
      return $this->conexion->insert_id;
    } else {
      return 0;
    }
  }

  //encriptar

  protected function encriptar($string)
  {
    return md5($string);
  }

	function guidv4($data = null) {
    // Generate 16 bytes (128 bits) of random data or use the data passed into the function.
    $data = $data ?? random_bytes(16);
    assert(strlen($data) == 16);

    // Set version to 0100
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
    // Set bits 6-7 to 10
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80);

    // Output the 36 character UUID.
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
	}
}

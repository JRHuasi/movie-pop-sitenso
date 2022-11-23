<?php 
	class Conectar extends Extra{
		public $mysqli;

		public function __construct(){
			// if($_SERVER['DOCUMENT_ROOT']==_SERVER_ROOT){
				$this->mysqli = new mysqli("localhost","root","ariana","tafidelvalle");
			// }else{
				// $this->mysqli = new mysqli("localhost","tdv_web","~~f7bG%1HZO5","tafidelvalleweb");
			// }
			$this->mysqli->query("SET NAMES 'utf8'");
		}

		function testigo($texto,$donde,$usuario="888"){
			// textos testigos del sitio
			$query = "INSERT INTO testigo(usuario, donde, texto) VALUES ('$usuario', '$donde', '$texto')";
			return($this->mysqli->query($query));
		}
	}

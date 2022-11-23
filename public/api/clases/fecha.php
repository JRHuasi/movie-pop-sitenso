<?php 
	class Fecha{
		public $mes;
		public $dia;
		public $ano;
		public $mesh;
		public $diah;
		public $anoh;
		public $idioma;
		public $limite;
		public $bisiesto;
		public $fecha;

		function __construct(){
			$fecha=date('Y-m-d');
			$this->mes="";
			$this->dia="";
			$this->ano="";
			$this->mesh=date('m');
			$this->diah=date('d');
			$this->anoh=date('Y');
			$this->idioma="esp";
			$this->bisiesto=$this->es_bisiesto();
			$this->limite=$this->calcula_limite();
		}

		private function es_bisiesto(){
			if(($this->anoh%4==0 && $this->anoh%100!=0)|| $this->anoh%400==0)
				return true;
			else
				return false;	
		}

		private function calcula_limite(){
			return true;
		}

		function fecha_msql($cadena){// dato, delimitador
			$cadena = substr($fecha,-4)."-".substr($fecha,3,2)."-".substr($fecha,0,2);
			return($cadena);
		}

		function dia_dela_semana ($dia, $mes, $ano, $idioma) {
			switch ($idioma){ // esp eng ita fra
				case "esp":
					$dias = array('Domingo', 'Lunes', 'Martes', 'Mi&éacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado');
					break;
				case "eng":
					$dias = array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
					break;
				case "ita":
					$dias = array('Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato');
					break;
				case "fra":
					$dias = array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
					break;
			}
			return $dias[date("w", mktime(0, 0, 0, $mes, $dia, $ano))];
		}


		function dia_dela_semana_num ($dia, $mes, $ano) {
			return date("w", mktime(0, 0, 0, $mes, $dia, $ano));
		}

		function dias_semana_L ($idioma=NULL) {
			switch ($idioma){ // esp eng ita fra
				case "eng":
					$dias = array('M','T','W','J','F','S','S');
					break;
				case "ita":
					$dias = array('L', 'M', 'M', 'G', 'V', 'S','D');
					break;
				case "fra":
					$dias = array('L', 'M', 'M', 'J', 'V', 'S', 'D');
					break;
				default:
					$dias = array('L','M','M','J','V','S','D');
					break;
			}
			return $dias;
		}

		function mes_idioma($mes, $idioma){

		}

		function dias_mes($mes,$ano){
			// cantidad de días del mes
			// mes mm, ano yyyy
			if($mes<10) $mes = "0".$mes;
			return date("t", mktime(1, 1, 1, $mes, 1, $ano));
		}

		function meses($idioma=NULL) {
			switch ($idioma){ // esp eng ita fra
				case "eng":
					$meses = array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
					break;
				case "ita":
					$meses = array('Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato');
					break;
				case "fra":
					$meses = array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
					break;
				default:
					$meses = array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
					break;
			}
			return $meses;
		}

		function meses_3($idioma=NULL) {
			switch ($idioma){ // esp eng ita fra
				case "eng":
					$meses = array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
					break;
				case "ita":
					$meses = array('Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato');
					break;
				case "fra":
					$meses = array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
					break;
				default:
					$meses = array('Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Ago','Sep','Oct','Nov','Dic');
					break;
			}
			return $meses;
		}
	
	}
 ?>
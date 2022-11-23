<?php 
class Extra{

/*	function acaptaCookies(){
		setcookie("test_cookie", "test", time() + 3600, '/');
		if(count($_COOKIE) > 0) {
    	return true;
		}else{
	    return false;
		}
	}*/

	function __construct(){
	}

	function fechaUSAtoArg($fecha){ // db.format <--> texto
    $fnac = explode("-", $fecha);
    $cadena = $fnac[2]."-".$fnac[1]."-".$fnac[0];
    return($cadena);
	}

	function fechaArgtoSql($fecha){ // db.format <--> texto
    $fnac = explode("/", $fecha);
    $cadena = $fnac[2]."-".$fnac[1]."-".$fnac[0];
    return($cadena);
	}

	function randCod($len)
	{
		$pw = ''; //intialize to be blank
		for($i=0;$i<$len;$i++)
		{
			switch(rand(1,3))
		{
			case 1: $pw.=chr(rand(48,57));  break; //0-9
			case 2: $pw.=chr(rand(65,90));  break; //A-Z
			case 3: $pw.=chr(rand(97,122)); break; //a-z
	   }
	 }
	 return $pw;
	}

	function getTagsPills($cadena){
		$salida = "";
		if($cadena!=""){
			$lista = explode(",", $cadena);
			$salida = '<div class="tagcloud clearfix bottommargin">';
			foreach ($lista as $key => $tag) {
				$tag = trim($tag);
				// buscar-'.$tag.'
				if($tag!=""){
					$salida .= '<a href="#">'.$tag.'</a>';
				}
			}
			$salida .= '</div>';
		}
		return $salida;
	}

	function cambiarNxP($cadena){
		$stringWithPs = str_replace("\n", "</p>\n<p>", $cadena);
		$stringWithPs = "<p>" . $stringWithPs . "</p>";
		return $stringWithPs;
	}

	function cambiarNxLI($cadena){
		$stringWithPs = str_replace("\n", "</li>\n<li>", $cadena);
		$stringWithPs = "<li>" . $stringWithPs . "</li>";
		return $stringWithPs;
	}

	function cambiarNxVector($cadena){
		$elementos = [];
		$stringWithDosPuntos = str_replace("\n", ":", $cadena);
		$elementos = explode(":", $stringWithDosPuntos);
		return $elementos;
	}

	function fechar($fecha,$idioma='esp'){
		// de db.format a texto
		$mes['esp']['01'] = "Ene";
		$mes['esp']['02'] = "Feb";
		$mes['esp']['03'] = "Mar";
		$mes['esp']['04'] = "Abr";
		$mes['esp']['05'] = "May";
		$mes['esp']['06'] = "Jun";
		$mes['esp']['07'] = "Jul";
		$mes['esp']['08'] = "Ago";
		$mes['esp']['09'] = "Sep";
		$mes['esp']['10'] = "Oct";
		$mes['esp']['11'] = "Nov";
		$mes['esp']['12'] = "Dic";
    $fnac = explode("-", $fecha);
    $mess = $mes[$idioma][$fnac[1]];
    $cadena = $fnac[2]."-".$mess."-".$fnac[0];
    return($cadena);
	}

	function getFechaFromStamp($timestamp,$numMes=null,$idioma="esp"){
		$separa = explode(" ",$timestamp);
		$fecha = explode("-", $separa[0]);
		$dia = $fecha[2];
		$mess = $numMes?$this->mes[$idioma][$fecha[1]]:$fecha[1];
		$ano = $fecha[0];
		$cadena = $dia."-".$mess."-".$ano;
		return $cadena;
	}

	function getFechaHoraFromStamp($timestamp,$numMes=null,$idioma="esp"){
		$separa = explode(" ",$timestamp);
		$fecha = explode("-", $separa[0]);
		$horario = explode(":", $separa[1]);
		$dia = $fecha[2];
		$mess = $numMes?$this->mes[$idioma][$fecha[1]]:$fecha[1];
		$ano = $fecha[0];
		$hora = $horario[0];
		$minuto = $horario[1];
		$segundo = $horario[2];
		$cadena = $dia."-".$mess."-".$ano." ".$hora.":".$minuto."hs";
		return $cadena;
	}

	function sanitize($string, $force_lowercase = true, $anal = false) {
		/**
		 * Function: sanitize
		 * Returns a sanitized string, typically for URLs.
		 *
		 * Parameters:
		 *     $string - The string to sanitize.
		 *     $force_lowercase - Force the string to lowercase?
		 *     $anal - If set to *true*, will remove all non-alphanumeric characters.
		*/

    $strip = array("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "+", "[", "{", "]",
                   "}", "\\", "|", ";", ":", "\"", "'", "&#8216;", "&#8217;", "&#8220;", "&#8221;", "&#8211;", "&#8212;",
                   "â€”", "â€“", ",", "<", ".", ">", "/", "?");
    $clean = trim(str_replace($strip, "", strip_tags($string)));
    $clean = preg_replace('/\s+/', "-", $clean);
    $clean = ($anal) ? preg_replace("/[^a-zA-Z0-9]/", "", $clean) : $clean ;
    return ($force_lowercase) ?
			((function_exists('mb_strtolower')) ? mb_strtolower($clean, 'UTF-8') :           strtolower($clean)) : $clean;
	}

	function convertirTags($string) {
		// la coma permanece
    $strip = array("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "+", "[", "{", "]","}", "\\", "|", ";", ":", "\"", "'", "&#8216;", "&#8217;", "&#8220;", "&#8221;", "&#8211;", "&#8212;","â€”", "â€“", "<", ".", ">", "/", "?");
    $clean = trim(str_replace($strip, "", strip_tags($string)));
    // espacios vacíos
    // $clean = preg_replace('/\s+/', "-", $clean);
    $clean = str_replace(array("á","é","í","ó","ú","ñ","Á","É","Í","Ó","Ú","Ñ","º","ª"), array("a","e","i","o","u","n", "A","E","I","O","U","N","o","a"), $clean);
    return (function_exists('mb_strtolower')) ?  mb_strtolower($clean, 'UTF-8') : strtolower($clean);
	}

	function convert_to_filename ($string) {
		$string = strtolower($string);
		$string = str_replace ("ø", "oe", $string);
		$string = str_replace ("å", "aa", $string);
		$string = str_replace ("æ", "ae", $string);
		$string = str_replace (" ", "_", $string);
		$string = str_replace ("..", ".", $string);
		preg_replace ("/[^0-9^a-z^_^.]/", "", $string);
		return $string;
	}

  function cuerpo_email($texto_cuerpo){
  	// texto para la confirmación de pagos
  	/* Variables:
  		$nombre,
  		$apellido,$dni,
  		$mabonado,
  		$pechera,
  		$fechapago,
  		$categoria,
  		$cbarras,
  		$titulo
  	*/
		/*
		$texto_cuerpo = '
			<table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateBody">
				<tr>
					<td valign="top" class="bodyContent" mc:edit="body_content00">
						<h1>Confirmaci&oacute;n de su pago</h1>
						<h3>Tus datos son los siguientes</h3>
						<ul style="font-size: 1.3em">
						  <li>
							<strong>Nombre:</strong> '.$apellido.", ".$nombre.'
						  </li>
						  <li>
							<strong>DNI:</strong> '.$dni.'
						  </li>
						  <li>
							<strong>Categor&iacute;a:</strong> '.$categoria.'
						  </li>
						  <li>
							<strong>Monto abonado:</strong> $'.$mabonado.'
						  </li>
						  <li>
							<strong>Fecha de pago:</strong> '.$fechapago.'
						  </li>
						  <li>
							<strong>C&oacute;digo de barras</strong> '.$cbarras.'
						  </li>
						  <li>
							<strong>Pechera:</strong> '.$pechera.'
						  </li>
						</ul>
					</td>
				</tr>
				<tr>
					<td valign="top" class="bodyContent" mc:edit="body_content01">
						<h2>Bienvenido al '.$titulo.'</h2>
						<h4>Guard&aacute; este correo para futuras referencias.</h4>
						<h4>Documentos &uacute;tiles:</h4>
			  <h3><a href="http://2500tafi.com.ar/Reglamento-VII-2500Tafi-MTB.zip">Reglamento de la Competencia </a><br>
			  <a href="http://2500tafi.com.ar/certificado_medico.zip">Certificado M&eacute;dico</a>
			  </h3>
						 
					</td>
				</tr>
			</table>';*/

	  return '
			<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
			<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<title>*|MC:SUBJECT|*</title>
			<style type="text/css">
			/* /\/\/\/\/\/\/\/\/ CLIENT-SPECIFIC STYLES /\/\/\/\/\/\/\/\/ */
			#outlook a{padding:0;} /* Force Outlook to provide a "view in browser" message */
			.ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */
			.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */
			body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */
			table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */
			img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */

			/* /\/\/\/\/\/\/\/\/ RESET STYLES /\/\/\/\/\/\/\/\/ */
			body{margin:0; padding:0;}
			img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}
			table{border-collapse:collapse !important;}
			body, #bodyTable, #bodyCell{height:100% !important; margin:0; padding:0; width:100% !important;}

			/* /\/\/\/\/\/\/\/\/ TEMPLATE STYLES /\/\/\/\/\/\/\/\/ */

			#bodyCell{padding:20px;}
			#templateContainer{width:600px;}

			/* ========== Page Styles ========== */

			/**
			* @tab Page
			* @section background style
			* @tip Set the background color and top border for your email. You may want to choose colors that match your company\'s branding.
			* @theme page
			*/
			body, #bodyTable{
			/*@editable*/ background-color:#DEE0E2;
			}

			/**
			* @tab Page
			* @section background style
			* @tip Set the background color and top border for your email. You may want to choose colors that match your company\'s branding.
			* @theme page
			*/
			#bodyCell{
			/*@editable*/ border-top:4px solid #BBBBBB;
			}

			/**
			* @tab Page
			* @section email border
			* @tip Set the border for your email.
			*/
			#templateContainer{
			/*@editable*/ border:1px solid #BBBBBB;
			}

			/**
			* @tab Page
			* @section heading 1
			* @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
			* @style heading 1
			*/
			h1{
			/*@editable*/ color:#202020 !important;
			display:block;
			/*@editable*/ font-family:Helvetica;
			/*@editable*/ font-size:26px;
			/*@editable*/ font-style:normal;
			/*@editable*/ font-weight:bold;
			/*@editable*/ line-height:100%;
			/*@editable*/ letter-spacing:normal;
			margin-top:0;
			margin-right:0;
			margin-bottom:10px;
			margin-left:0;
			/*@editable*/ text-align:left;
			}

			/**
			* @tab Page
			* @section heading 2
			* @tip Set the styling for all second-level headings in your emails.
			* @style heading 2
			*/
			h2{
			/*@editable*/ color:#404040 !important;
			display:block;
			/*@editable*/ font-family:Helvetica;
			/*@editable*/ font-size:20px;
			/*@editable*/ font-style:normal;
			/*@editable*/ font-weight:bold;
			/*@editable*/ line-height:100%;
			/*@editable*/ letter-spacing:normal;
			margin-top:0;
			margin-right:0;
			margin-bottom:10px;
			margin-left:0;
			/*@editable*/ text-align:left;
			}

			/**
			* @tab Page
			* @section heading 3
			* @tip Set the styling for all third-level headings in your emails.
			* @style heading 3
			*/
			h3{
			/*@editable*/ color:#606060 !important;
			display:block;
			/*@editable*/ font-family:Helvetica;
			/*@editable*/ font-size:16px;
			/*@editable*/ font-style:italic;
			/*@editable*/ font-weight:normal;
			/*@editable*/ line-height:100%;
			/*@editable*/ letter-spacing:normal;
			margin-top:0;
			margin-right:0;
			margin-bottom:10px;
			margin-left:0;
			/*@editable*/ text-align:left;
			}

			/**
			* @tab Page
			* @section heading 4
			* @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
			* @style heading 4
			*/
			h4{
			/*@editable*/ color:#808080 !important;
			display:block;
			/*@editable*/ font-family:Helvetica;
			/*@editable*/ font-size:14px;
			/*@editable*/ font-style:italic;
			/*@editable*/ font-weight:normal;
			/*@editable*/ line-height:100%;
			/*@editable*/ letter-spacing:normal;
			margin-top:0;
			margin-right:0;
			margin-bottom:10px;
			margin-left:0;
			/*@editable*/ text-align:left;
			}

			/* ========== Header Styles ========== */

			/**
			* @tab Header
			* @section preheader style
			* @tip Set the background color and bottom border for your email\'s preheader area.
			* @theme header
			*/
			#templatePreheader{
			/*@editable*/ background-color:#F4F4F4;
			/*@editable*/ border-bottom:1px solid #CCCCCC;
			}

			/**
			* @tab Header
			* @section preheader text
			* @tip Set the styling for your email\'s preheader text. Choose a size and color that is easy to read.
			*/
			.preheaderContent{
			/*@editable*/ color:#808080;
			/*@editable*/ font-family:Helvetica;
			/*@editable*/ font-size:10px;
			/*@editable*/ line-height:125%;
			/*@editable*/ text-align:left;
			}

			/**
			* @tab Header
			* @section preheader link
			* @tip Set the styling for your email\'s preheader links. Choose a color that helps them stand out from your text.
			*/
			.preheaderContent a:link, .preheaderContent a:visited, /* Yahoo! Mail Override */ .preheaderContent a .yshortcuts /* Yahoo! Mail Override */{
			/*@editable*/ color:#606060;
			/*@editable*/ font-weight:normal;
			/*@editable*/ text-decoration:underline;
			}

			/**
			* @tab Header
			* @section header style
			* @tip Set the background color and borders for your email\'s header area.
			* @theme header
			*/
			#templateHeader{
			/*@editable*/ background-color:#F4F4F4;
			/*@editable*/ border-top:1px solid #FFFFFF;
			/*@editable*/ border-bottom:1px solid #CCCCCC;
			}

			/**
			* @tab Header
			* @section header text
			* @tip Set the styling for your email\'s header text. Choose a size and color that is easy to read.
			*/
			.headerContent{
			/*@editable*/ color:#505050;
			/*@editable*/ font-family:Helvetica;
			/*@editable*/ font-size:20px;
			/*@editable*/ font-weight:bold;
			/*@editable*/ line-height:100%;
			/*@editable*/ padding-top:0;
			/*@editable*/ padding-right:0;
			/*@editable*/ padding-bottom:0;
			/*@editable*/ padding-left:0;
			/*@editable*/ text-align:left;
			/*@editable*/ vertical-align:middle;
			}

			/**
			* @tab Header
			* @section header link
			* @tip Set the styling for your email\'s header links. Choose a color that helps them stand out from your text.
			*/
			.headerContent a:link, .headerContent a:visited, /* Yahoo! Mail Override */ .headerContent a .yshortcuts /* Yahoo! Mail Override */{
			/*@editable*/ color:#EB4102;
			/*@editable*/ font-weight:normal;
			/*@editable*/ text-decoration:underline;
			}

			#headerImage{
			height:auto;
			max-width:600px;
			}

			/* ========== Body Styles ========== */

			/**
			* @tab Body
			* @section body style
			* @tip Set the background color and borders for your email\'s body area.
			*/
			#templateBody{
			/*@editable*/ background-color:#F4F4F4;
			/*@editable*/ border-top:1px solid #FFFFFF;
			/*@editable*/ border-bottom:1px solid #CCCCCC;
			}

			/**
			* @tab Body
			* @section body text
			* @tip Set the styling for your email\'s main content text. Choose a size and color that is easy to read.
			* @theme main
			*/
			.bodyContent{
			/*@editable*/ color:#505050;
			/*@editable*/ font-family:Helvetica;
			/*@editable*/ font-size:14px;
			/*@editable*/ line-height:150%;
			padding-top:20px;
			padding-right:20px;
			padding-bottom:20px;
			padding-left:20px;
			/*@editable*/ text-align:left;
			}

			/**
			* @tab Body
			* @section body link
			* @tip Set the styling for your email\'s main content links. Choose a color that helps them stand out from your text.
			*/
			.bodyContent a:link, .bodyContent a:visited, /* Yahoo! Mail Override */ .bodyContent a .yshortcuts /* Yahoo! Mail Override */{
			/*@editable*/ color:#EB4102;
			/*@editable*/ font-weight:normal;
			/*@editable*/ text-decoration:underline;
			}

			.bodyContent img{
			display:inline;
			height:auto;
			max-width:560px;
			}

			/* ========== Footer Styles ========== */

			/**
			* @tab Footer
			* @section footer style
			* @tip Set the background color and borders for your email\'s footer area.
			* @theme footer
			*/
			#templateFooter{
			/*@editable*/ background-color:#F4F4F4;
			/*@editable*/ border-top:1px solid #FFFFFF;
			}

			/**
			* @tab Footer
			* @section footer text
			* @tip Set the styling for your email\'s footer text. Choose a size and color that is easy to read.
			* @theme footer
			*/
			.footerContent{
			/*@editable*/ color:#808080;
			/*@editable*/ font-family:Helvetica;
			/*@editable*/ font-size:10px;
			/*@editable*/ line-height:150%;
			padding-top:20px;
			padding-right:20px;
			padding-bottom:20px;
			padding-left:20px;
			/*@editable*/ text-align:left;
			}

			/**
			* @tab Footer
			* @section footer link
			* @tip Set the styling for your email\'s footer links. Choose a color that helps them stand out from your text.
			*/
			.footerContent a:link, .footerContent a:visited, /* Yahoo! Mail Override */ .footerContent a .yshortcuts, .footerContent a span /* Yahoo! Mail Override */{
			/*@editable*/ color:#606060;
			/*@editable*/ font-weight:normal;
			/*@editable*/ text-decoration:underline;
			}

			/* /\/\/\/\/\/\/\/\/ MOBILE STYLES /\/\/\/\/\/\/\/\/ */

			@media only screen and (max-width: 480px){
			/* /\/\/\/\/\/\/ CLIENT-SPECIFIC MOBILE STYLES /\/\/\/\/\/\/ */
			body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} /* Prevent Webkit platforms from changing default text sizes */
			body{width:100% !important; min-width:100% !important;} /* Prevent iOS Mail from adding padding to the body */

			/* /\/\/\/\/\/\/ MOBILE RESET STYLES /\/\/\/\/\/\/ */
			#bodyCell{padding:10px !important;}

			/* /\/\/\/\/\/\/ MOBILE TEMPLATE STYLES /\/\/\/\/\/\/ */

			/* ======== Page Styles ======== */

			/**
			* @tab Mobile Styles
			* @section template width
			* @tip Make the template fluid for portrait or landscape view adaptability. If a fluid layout doesn\'t work for you, set the width to 300px instead.
			*/
			#templateContainer{
			max-width:600px !important;
			/*@editable*/ width:100% !important;
			}

			/**
			* @tab Mobile Styles
			* @section heading 1
			* @tip Make the first-level headings larger in size for better readability on small screens.
			*/
			h1{
			/*@editable*/ font-size:24px !important;
			/*@editable*/ line-height:100% !important;
			}

			/**
			* @tab Mobile Styles
			* @section heading 2
			* @tip Make the second-level headings larger in size for better readability on small screens.
			*/
			h2{
			/*@editable*/ font-size:20px !important;
			/*@editable*/ line-height:100% !important;
			}

			/**
			* @tab Mobile Styles
			* @section heading 3
			* @tip Make the third-level headings larger in size for better readability on small screens.
			*/
			h3{
			/*@editable*/ font-size:18px !important;
			/*@editable*/ line-height:100% !important;
			}

			/**
			* @tab Mobile Styles
			* @section heading 4
			* @tip Make the fourth-level headings larger in size for better readability on small screens.
			*/
			h4{
			/*@editable*/ font-size:16px !important;
			/*@editable*/ line-height:100% !important;
			}

			/* ======== Header Styles ======== */

			#templatePreheader{display:none !important;} /* Hide the template preheader to save space */

			/**
			* @tab Mobile Styles
			* @section header image
			* @tip Make the main header image fluid for portrait or landscape view adaptability, and set the image\'s original width as the max-width. If a fluid setting doesn\'t work, set the image width to half its original size instead.
			*/
			#headerImage{
			height:auto !important;
			/*@editable*/ max-width:600px !important;
			/*@editable*/ width:100% !important;
			}

			/**
			* @tab Mobile Styles
			* @section header text
			* @tip Make the header content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
			*/
			.headerContent{
			/*@editable*/ font-size:20px !important;
			/*@editable*/ line-height:125% !important;
			}

			/* ======== Body Styles ======== */

			/**
			* @tab Mobile Styles
			* @section body image
			* @tip Make the main body image fluid for portrait or landscape view adaptability, and set the image\'s original width as the max-width. If a fluid setting doesn\'t work, set the image width to half its original size instead.
			*/
			#bodyImage{
			height:auto !important;
			/*@editable*/ max-width:560px !important;
			/*@editable*/ width:100% !important;
			}

			/**
			* @tab Mobile Styles
			* @section body text
			* @tip Make the body content text larger in size for better readability on small screens. We recommend a font size of at least 16px.
			*/
			.bodyContent{
			/*@editable*/ font-size:18px !important;
			/*@editable*/ line-height:125% !important;
			}

			/* ======== Footer Styles ======== */

			/**
			* @tab Mobile Styles
			* @section footer text
			* @tip Make the body content text larger in size for better readability on small screens.
			*/
			.footerContent{
			/*@editable*/ font-size:14px !important;
			/*@editable*/ line-height:115% !important;
			}

			.footerContent a{display:block !important;} /* Place footer social and utility links on their own lines, for easier access */
			}
			</style>
			</head>
			<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
			<center>
			<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
			<tr>
			<td align="center" valign="top" id="bodyCell">
			<!-- BEGIN TEMPLATE // -->
			<table border="0" cellpadding="0" cellspacing="0" id="templateContainer">
			  <tr>
				  <td align="center" valign="top">
					  <!-- BEGIN PREHEADER // -->
						<table border="0" cellpadding="0" cellspacing="0" width="100%" id="templatePreheader">
							<tr>
								<td valign="top" class="preheaderContent" style="padding-top:10px; padding-right:20px; padding-bottom:10px; padding-left:20px;" mc:edit="preheader_content00">
			<!-- Use this area to offer a short teaser of your email\'s content. Text here will show in the preview area of some email clients.-->
								</td>
								<!-- *|IFNOT:ARCHIVE_PAGE|* -->
								<td valign="top" width="180" class="preheaderContent" style="padding-top:10px; padding-right:20px; padding-bottom:10px; padding-left:0;" mc:edit="preheader_content01">
			<!--                                               Email not displaying correctly?<br /><a href="*|ARCHIVE|*" target="_blank">View it in your browser</a>.-->
								</td>
								<!-- *|END:IF|* -->
							</tr>
						</table>
						<!-- // END PREHEADER -->
					</td>
				</tr>
			  <tr>
				  <td align="center" valign="top">
					  <!-- BEGIN HEADER // -->
						<table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateHeader">
							<tr>
								<td valign="top" class="headerContent">
								  <img src="http://2500tafi.com.ar/imagenes/marquesina-viii-email.jpg" style="max-width:600px;" id="headerImage" mc:label="header_image" mc:edit="header_image" mc:allowdesigner mc:allowtext />
								</td>
							</tr>
						</table>
						<!-- // END HEADER -->
					</td>
				</tr>
			  <tr>
				  <td align="center" valign="top">
					  <!-- BEGIN BODY // -->
				'.$texto_cuerpo.'
						<!-- // END BODY -->
					</td>
				</tr>
			  <tr>
				  <td align="center" valign="top">
					  <!-- BEGIN FOOTER // -->
						<table border="0" cellpadding="0" cellspacing="0" width="100%" id="templateFooter">
							<tr>
								<td valign="top" class="footerContent" mc:edit="footer_content00">
									<a href="https://www.facebook.com/2500tafi">Seguinos en Facebook</a>
								</td>
							</tr>
							<tr>
								<td valign="top" class="footerContent" style="padding-top:0;" mc:edit="footer_content01">
									<em>La Administración del 2500Taf&iacute; Copyright &copy; '.date('Y').', Derechos Reservados</em>
									<br />
									<br />
									<br />
									<strong>Por consultas:</strong>
									<br />
									<a href="mailto:2500tafi@tafidelvalle.com" >2500tafi@tafidelvalle.com</a>
								</td>
							</tr>
							<tr>
								<td valign="top" class="footerContent" style="padding-top:0;" mc:edit="footer_content02">
			<!--  CODIGO PARA QUITAR SUSCRIPCIÓN  
					<a href="*|UNSUB|*">unsubscribe from this list</a>&nbsp;&nbsp;&nbsp;<a href="*|UPDATE_PROFILE|*">update subscription preferences</a>&nbsp;-->
								</td>
							</tr>
						</table>
						<!-- // END FOOTER -->
					</td>
				</tr>
			</table>
			<!-- // END TEMPLATE -->
			</td>
			</tr>
			</table>
			</center>
			</body>
			</html>
	  ';

	}

	function extras_email(){
	}

	function decimal_a_grados($val){
		list ($entero,$decimal)=explode(".",$val); // Separamos parte entera y decimal
		$grados = $entero;
		$val=("0.".$decimal)*60; // Los grados seria la parte entera. Y la parte decimal le unimos el 0. y lo multiplicamos por 60
		list ($entero,$decimal)=explode(".",$val); // Separamos entero y decimal 
	
		$minutos = $entero;
		$val=("0.".$decimal)*60; // La parte entera son los minutos y la parte decimal le unimos el 0. y lo multiplicamos por 60
	
		list($entero,$decimal)=explode(".",$val); // Separamos entero y decimal
	
		$segundos = $entero; // La parte entera son los segundos y la pare decimal ya nos da igual.
		return($grados."&deg;&nbsp;".$minutos."'&nbsp;".$segundos."\"");
	}

	function decimal_a_grados_2puntos($val){
		list ($entero,$decimal)=explode(".",$val); // Separamos parte entera y decimal
		$grados = $entero;
		$val=("0.".$decimal)*60; // Los grados seria la parte entera. Y la parte decimal le unimos el 0. y lo multiplicamos por 60
		list ($entero,$decimal)=explode(".",$val); // Separamos entero y decimal 
	
		$minutos = $entero;
		$val=("0.".$decimal)*60; // La parte entera son los minutos y la parte decimal le unimos el 0. y lo multiplicamos por 60
	
		list($entero,$decimal)=explode(".",$val); // Separamos entero y decimal
	
		$segundos = $entero; // La parte entera son los segundos y la pare decimal ya nos da igual.
		return($grados.":".$minutos.":".$segundos);
	}

	function decimal_GEarth($val){
		list ($entero,$decimal)=explode(".",$val); // Separamos parte entera y decimal
		$grados = $entero;
		$val=("0.".$decimal)*60; // Los grados seria la parte entera. Y la parte decimal le unimos el 0. y lo multiplicamos por 60
		// list ($entero,$decimal)=explode(".",$val); // Separamos entero y decimal 
		
		// $decimal = $val-$entero;
		
		return($entero."&nbsp;".substr($val,0,7));
	}

	function gen_uuid() {
    return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        // 32 bits for "time_low"
        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),

        // 16 bits for "time_mid"
        mt_rand( 0, 0xffff ),

        // 16 bits for "time_hi_and_version",
        // four most significant bits holds version number 4
        mt_rand( 0, 0x0fff ) | 0x4000,

        // 16 bits, 8 bits for "clk_seq_hi_res",
        // 8 bits for "clk_seq_low",
        // two most significant bits holds zero and one for variant DCE1.1
        mt_rand( 0, 0x3fff ) | 0x8000,

        // 48 bits for "node"
        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
    );
}

}
?>
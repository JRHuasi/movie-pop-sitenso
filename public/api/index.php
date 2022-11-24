<?php
  require_once('clases/autoload.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');


$_comentarios = new Comentarios;

if ($_SERVER['REQUEST_METHOD'] == "GET") {
	switch ($_GET['accion']) {
    // ALOJAMIENTO
		case 'lista-comentarios':
			$datosArray = $_comentarios->listaComentarios($_GET['peli-id']);
			// $datosArray = $_GET;
			break;
    case 'get-favorito':
      $datosArray = $_comentarios->getFavorito($_GET['userID'],$_GET['peliID']);
      // $datosArray = $_GET;
      break;
    case 'pelis-favoritas':
      $datosArray = $_comentarios->getPelisFavoritas($_GET['userID']);
      // $datosArray = $_GET;
			break;
		}
  // devuelvo una respuesta
  header('Content-Type: application/json');
  echo json_encode($datosArray);
  http_response_code(200);
} else if ($_SERVER['REQUEST_METHOD'] == "POST") {

  // enviar al manejador
  $postBody = file_get_contents("php://input");
	switch ($_GET['accion']) {
		case 'add-comentario':
			$datosArray = $_comentarios->addComentario($_POST['userID'],$_POST['peliID'], $_POST['texto']);
			break;
		case 'set-favorito':
			$datosArray = $_comentarios->setFavorito($_POST['userID'],$_POST['peliID'],$_POST['afiche'],$_POST['nombre']);
			break;
	}  // devuelvo una respuesta
  header('Content-Type: application/json');
  if (isset($datosArray["result"]["error_id"])) {
    $responseCode = $datosArray["result"]["error_id"];
    http_response_code($responseCode);
  } else {
    http_response_code(200);
  }
  echo json_encode($datosArray);
  print_r($resp);
} else if ($_SERVER['REQUEST_METHOD'] == "PUT") {
  // recibe los datos enviados
  $postBody = file_get_contents("php://input");

  // enviamos datos al manejador
  $datosArray = $_eventos->put($postBody);

  header('Content-Type: application/json');
  if (isset($datosArray["result"]["error_id"])) {
    $responseCode = $datosArray["result"]["error_id"];
    http_response_code($responseCode);
  } else {
    http_response_code(200);
  }
  echo json_encode($datosArray);
} else if ($_SERVER['REQUEST_METHOD'] == "DELETE") {
  // recibe los datos enviados
  $postBody = file_get_contents("php://input");

  // enviamos datos al manejador
  $datosArray = $_eventos->delete($postBody);
  header('Content-Type: application/json');
  if (isset($datosArray["result"]["error_id"])) {
    $responseCode = $datosArray["result"]["error_id"];
    http_response_code($responseCode);
  } else {
    http_response_code(200);
  }
  echo json_encode($datosArray);
} else {
  header('Content-Type: application/json');
  $datosArray = $_respuestas->error_405();
  echo json_encode($datosArray);
}

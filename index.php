<?php 
//http://localhost/...
//https://www.h2prog.com/...
define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS']) ? "https" : "http").
"://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]"));

require_once("controllers/back/API.controler.php");
$apiControllers = new APIControllers();

try {
    if(empty($_GET['page'])){
        throw new Exception("La page n'existe pas");
    }
    else{
        $url = explode("/", filter_var($_GET['page'],FILTER_SANITIZE_URL));
        if(empty($url[0]) || empty($url[1])) throw new Exception("La page n'existe pas");
            switch($url[0]){
                case "front":
                    switch($url[1]){
                        case "animaux": 
                                if(!isset($url[2]) || !isset($url[3]))
                                    $apiControllers ->getAnimaux(-1,-1);
                                else
                                $apiControllers ->getAnimaux((int)$url[2],(int)$url[3]);
                        break;
                        case "animal": 
                            if(empty($url[2])) throw new Exception("identifiant de l'animal non renseigner");
                            $apiControllers->getAnimal($url[2]);
                        break;
                        case "familles": $apiControllers->getfamilles();
                        break;
                        case "continents": $apiControllers->getContinents();
                        break;
                        default: 
                            throw new Exception("La page n'existe pas");
                    }
                break;
                case "back":
                    echo"page back end demandé";
                break;
                default:
                    throw new Exception("La page n'existe pas");
            }
    }
    } catch (Exception $e) {
        $msg = $e->getMessage();
        echo $msg;
}
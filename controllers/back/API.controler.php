<?php
require_once("models/front/API.manager.php");
require_once("models/Model.php");

class APIControllers{
    private $apiManager;

    public function __construct(){
        $this->apiManager = new APIManager();
    }
    private function formatDataLignesAnimaux($lignes){
        $tab = [];
            foreach($lignes as $ligne){
                if(!array_key_exists($ligne['animal_id'],$tab)){
                    $tab[$ligne['animal_id']] = 
                    [
                        "id" => $ligne['animal_id'],
                        "NomAnimal" => $ligne['animal_nom'],
                        "DescriptionAnimal" => $ligne['animal_description'],
                        "ImageAnimal" => URL."public/images/".$ligne['animal_image'],
                        "Famille" => 
                        [
                            "idFamille" => $ligne['famille_id'],
                            "LibelleFamille" => $ligne['famille_libelle'],
                            "DescriptionFamille" => $ligne['famille_description']
                        ]
                    ];
                }    
                $tab[$ligne['animal_id']]['continents'][] = [
                    "idContinent" => $ligne['continent_id'],
                    "LibelleContinent" => $ligne['continent_libelle']
                ];
            }
            /*echo"<pre>";        
                print_r($tab);
            echo"</pre>";  */  
        return $tab;

    }

    public function getAnimaux($idFmaille, $idContinent){
        $animaux = $this->apiManager->getDBAnimaux($idFmaille, $idContinent);
        $resultat = $this-> formatDataLignesAnimaux($animaux);
        Model::sendJSON($resultat);
    }

    public function getAnimal($idAnimal){
        $lignesAnimal =$this->apiManager->getDBAnimal($idAnimal);
        Model::sendJSON($this->formatDataLignesAnimaux($lignesAnimal));

    }

    public function getContinents(){
        $lignesContinents = $this->apiManager->getDBContinent();
        Model::sendJSON($lignesContinents);
    }

    public function getFamilles(){
        $ligneFamille = $this->apiManager->getDBFamille();
        Model::sendJSON($ligneFamille);
    }

}

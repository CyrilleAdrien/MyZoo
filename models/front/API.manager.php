
<?php
require_once("models/Model.php");

class APIManager extends Model{
    public function getDBAnimaux($idFamille, $idContinent){
        $whereClause = "";
        if($idContinent !== -1 || $idFamille !== -1) $whereClause .= "WHERE ";
        if($idFamille !== -1) $whereClause .= "f.famille_id = :idFamille";
        if($idContinent !== -1 && $idFamille !== -1) $whereClause .= " AND ";
        if($idContinent!== -1) $whereClause .= "a.animal_id IN(
            select animal_id from continent_animal where continent_id =:idContinent)";

        $req = "SELECT * 
        from animal a inner join famille f on f.famille_id = a.famille_id
        inner join continent_animal ac on a.animal_id = ac.animal_id
        inner join continent c on c.continent_id = ac.continent_id ".$whereClause;

        $stm = $this->getBdd()->prepare($req);
        if($idFamille !== -1) $stm->bindValue(":idFamille",$idFamille,PDO::PARAM_INT);
        if($idContinent!== -1) $stm->bindValue(":idContinent",$idContinent,PDO::PARAM_INT);
        $stm->execute();
        $animaux = $stm->fetchAll(PDO::FETCH_ASSOC);
        $stm->closeCursor();
        return $animaux;
    }

    public function getDBAnimal($idAnimal){
        $req = "SELECT * from
        animal a inner join famille f on f.famille_id = a.famille_id
        inner join continent_animal ac on a.animal_id = ac.animal_id
        inner join continent c on c.continent_id = ac.continent_id
        WHERE a.animal_id = :idAnimal"
        ;
        $stm = $this->getBdd()->prepare($req);
        $stm->bindValue(":idAnimal", $idAnimal, PDO::PARAM_INT);//un filtre sur la variable passée en paramètre pour éviter les injections de code dans le formulaire ou sur le navigateur
        $stm->execute();
        $Animal = $stm->fetchAll(PDO::FETCH_ASSOC);//On récupère tout les lignes de la base de donnée sans rédondance grace à "FETCH_ASSOC"
        $stm->closeCursor();
        return $Animal;
    }

    public function getDBFamille(){
        $req = "SELECT * from famille";
        $stm = $this->getBdd()->prepare($req);
        $stm->execute();
        $famille = $stm->fetchALL(PDO::FETCH_ASSOC);
        $stm ->closeCursor();

        return $famille;
    }

    public function getDBContinent(){
        $req = "SELECT * from continent";
        $stm = $this->getBdd()->prepare($req);
        $stm->execute();
        $continent = $stm->fetchALL(PDO::FETCH_ASSOC);
        $stm ->closeCursor();

        return $continent;
    }

}
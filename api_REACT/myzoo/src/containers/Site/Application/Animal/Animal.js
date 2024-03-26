import React from "react";
import classes from '../../../../../src/App.css';
import Bouton from "../../../../components/UserInterface/buttons/button";

const animal = (props) => (
    <>
        <div className="card mb-3">
            <h3 className="card-header"></h3>
            <div className="card-text"></div>   

            <div className="card-body">
                <h5 className="card-title">{props.id} - {props.NomAnimal}</h5>
                <h6 className="card-subtitle text-muted, text-center">{props.DescriptionAnimal}</h6>
            </div>
            <div style={{"height":"100px"}} className={["d-block user-select-none", "img-fluid h-100 my-2 pd-1", "width=50%", "height=50%", "focusable=false", "role=img", "aria-label=Placeholder: Image cap", "preserveAspectRatio=xMidYMid slice", "viewBox=0 0 318 180", "text-center", classes.bootSP].join(" ")}>
                <img src ={props.ImageAnimal} alt = {props.NomAnimal} fill="#868e96" />
            </div>
            <div className="card-body">
                <h3> Famille : <Bouton typeBtn = "btn-dark" clic = {() => props.filtreFamille(props.Famille.idFamille)}>{props.Famille.LibelleFamille.toUpperCase()}</Bouton></h3>   
                {props.Famille.DescriptionFamille}
            </div>
            <div className="card-body">
                <h3> continents : </h3>
                {   
                    props.continents.map(continent =>{
                        let colorBtn = "";
                        switch(continent.idContinent){
                            case 1 : colorBtn = "btn-primary";
                            break;
                            case 2 : colorBtn = "btn-success";
                            break;
                            case 3 : colorBtn = "btn-danger";
                            break;
                            case 4 : colorBtn = "btn-info";
                            break;
                            case 5 : colorBtn = "btn-warning";
                            break;
                            default : colorBtn = "btn-secondary";
                        }
                        return <Bouton typeBtn = {colorBtn} css = "m-1" key ={continent.idContinent} 
                        clic = {() => props.filtreContinent(continent.idContinent)}>
                        {continent.LibelleContinent}</Bouton> 
                    })
                }      
            </div>
        </div>
    </>
);

export default animal;
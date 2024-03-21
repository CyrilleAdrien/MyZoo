import { Component } from 'react';
import TitreH1 from '../../../components/UserInterface/Titre/TitreH1';
import axios from "axios";
import Animal from '../Application/Animal/Animal';
import Bouton from '../../../components/UserInterface/buttons/button';

class Application extends Component {
    // Récupération des données sur la page serveur animaux
    state = {
        animaux : null,
        filtreContinent : null,
        filtreFamille : null,
        ListeFamilles : null,
        ListeContinents : null,
    }


    LoadData = () => {
        const famille = this.state.filtreFamille? this.state.filtreFamille : "-1";
        const continent = this.state.filtreContinent? this.state.filtreContinent : "-1";
        axios.get(`http://localhost/ServeurAnimaux/front/animaux/${famille}/${continent}`)
        .then(response => {
           console.log(response); // Affichage des données récupérées dans la console
            this.forceUpdate(); // Forcer le rendu après la récupération des données
            this.setState({animaux : Object.values(response.data)})
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });

        axios.get(`http://localhost/ServeurAnimaux/front/familles`)
        .then(response => {
           console.log(response);
            this.forceUpdate(); 
            this.setState({ListeFamilles : Object.values(response.data)})
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });

        axios.get(`http://localhost/ServeurAnimaux/front/continents`)
        .then(response => {
           console.log(response); 
            this.forceUpdate();
            this.setState({ListeContinents : Object.values(response.data)})
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });
    }

    componentDidMount() {
        this.LoadData();
    }
    componentDidUpdate (oldProps, oldState){
        if(oldState.filtreFamille !== this.state.filtreFamille || oldState.filtreContinent !== this.state.filtreContinent)
            this.LoadData();
    }

    HandleSelectionFamille = (idFamille) =>{
        if(idFamille === "-1") this.HandleResetFiltreFamille();
        else this.setState({filtreFamille : idFamille});
    }
    HandleSelectionContinent = (idContinent) =>{
        if(idContinent === "-1") this.HandleResetFiltreContinent()
        else  this.setState({filtreContinent : idContinent});
    }
    HandleResetFiltreContinent=()=>{
        this.setState({filtreContinent : null});
    }
    HandleResetFiltreFamille=()=>{
        this.setState({filtreFamille : null});
    }
    render() {

        let nomFamilleFiltre = "";
        if(this.state.filtreFamille) {
            const numFamilleFiltre = this.state.ListeFamilles.findIndex(famille =>{
                return famille.famille_id === this.state.filtreFamille;
            })
        console.log(numFamilleFiltre);    
        //nomFamilleFiltre = this.state.ListeFamilles[numFamilleFiltre].famille_libelle;
        }
        
        let nomContinentFiltre = "";
        if(this.state.filtreContinent) {
            const numContinentFiltre = this.state.ListeContinents.findIndex(continent =>{
                return continent.continent_id === this.state.filtreContinent;
            })
        console.log(numContinentFiltre);        
        //nomContinentFiltre = this.state.ListeContinents[numContinentFiltre].continent_libelle;

        //console.log(`${nomContinentFiltre}, ${nomFamilleFiltre}`);
        }

        return (
            <>
                <TitreH1 bgColor="bg-success">Les animaux du Parc</TitreH1> 

                    <div className='container-Fluid'>
                        <span>Filtres :</span>
                            <select onChange = {(event) => this.HandleSelectionFamille(event.target.value)}>
                                <option value = "-1" selected = {this.state.filtreFamille === null}>Familles</option> 
                                {   
                                    this.state.ListeFamilles && 
                                    this.state.ListeFamilles.map(famille => {
                                        return <option 
                                        value = {famille.famille_id}  key = {famille.famille_id}
                                        selected = {this.state.filtreFamille === famille.famille_id }>
                                        {famille.famille_libelle}
                                        </option>
                                    })
                                }    
                            </select>
                            <select onChange = {(event) => this.HandleSelectionContinent(event.target.value)}>
                                <option value = "-1" selected = {this.state.filtreContinent === null}>continents</option> 
                                {   
                                    this.state.ListeContinents && 
                                    this.state.ListeContinents.map(continent => {
                                        return <option 
                                        value = {continent.continent_id}  key = {continent.continent_id}
                                        selected = {this.state.filtreContinent === continent.continent_id}>
                                        {continent.continent_libelle}
                                        </option>
                                    })
                                }    
                            </select>

                        {   
                            this.state.filtreContinent &&
                            <Bouton typeBtn = "btn-danger" clic={this.HandleResetFiltreContinent}>                           
                                {/* {nomContinentFiltre} &nbsp;  */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                </svg>
                            </Bouton>
                        }
                        {
                            this.state.filtreFamille  &&
                            <Bouton typeBtn = "btn-danger" clic={this.HandleResetFiltreFamille}>                           
                                {/* {nomFamilleFiltre} &nbsp; */}
                                <svg xmlns="http://www.w3.org/2000/svg" text-center width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                </svg>
                            </Bouton>
                        }
                        <div className='container-fluid'>
                            <div className='row no-gutters'>
                            {
                                this.state.animaux &&
                                this.state.animaux.map(animal => {
                                    return (
                                        <div className='col-12 col-md-6 col-xl-4' key = {animal.id}>
                                            <Animal {...animal} 
                                            filtreFamille = {this.HandleSelectionFamille}
                                            filtreContinent = {this.HandleSelectionContinent}
                                            />
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>    
            </>
        );
    }
}

export default Application;

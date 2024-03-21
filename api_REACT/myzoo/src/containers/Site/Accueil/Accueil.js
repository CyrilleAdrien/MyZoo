import React, { Component } from 'react';
import TitreH1 from '../../../components/UserInterface/Titre/TitreH1';
import banderole from '../../../assets/images/banderole.png'
import logo from '../../../assets/images/logo.png'
import lion  from '../../../assets/images/lion.jpeg'

class Accueil extends Component {
    componentDidMount = () => { //Elle permet de lancer des actions après que le composant soit monté
        document.title = "Parc d'animaux MyZoo";
    }

    render() {
        return (
            <div>
                <TitreH1 >
                    Venez visiter le parc d'animaux MyZoo !!!
                </TitreH1>
                <img src = {banderole} alt = "banderole" className='img-fluid'/>
                <div className='container'>
                    <p>
                        Bienvenue dans notre zoo, un sanctuaire de la faune sauvage où chaque visiteur devient gardien 
                        d'un monde fascinant. Explorez nos habitats naturels recréés avec amour, découvrez la diversité animale 
                        et laissez-vous émerveiller par la majesté des créatures. En tant que partenaire de cette aventure, votre
                        présence contribue à la préservation de la biodiversité. Bienvenue dans notre famille zoo, où la magie de 
                        la nature prend vie sous vos yeux émerveillés !
                    </p>
                    <p>
                    Welcome to our zoo, a wildlife sanctuary where every visitor becomes a keeper
                         of a fascinating world. Explore our lovingly recreated natural habitats, discover the animal diversity
                         and marvel at the majesty of the creatures. As a partner in this adventure, your
                         presence contributes to the preservation of biodiversity. Welcome to our zoo family, where the magic of
                         nature comes to life before your amazed eyes!
                    </p>
                    <div className='row no-gutters align-items-center'>{/*cette classe row utilise des arguments Css telques "no-gutters"
                    pour éviter d'avoir des marges dans le système de row et "align-items-center" center les elts des lignes verticalement */}
                        <div className='col-12 col-md-6'>
                        {/* col-12 pour signifier que l'on prendra la moitié de l'écran pour les petits affichages et 
                        "col-md-6" pour faire deux colones de moitié(6/12 = 1/2) à partir d'une taille moyenne d'écran */}
                            <img src={logo} alt ='logo du site' className='img-fluid' />
                        </div>
                        <div className='col-12 col-md-6'>
                            <p>
                            Dans nos vastes habitats naturels, vous découvrirez des créatures majestueuses provenant des quatre coins du monde. 
                            Du rugissement puissant des lions à la grâce élégante des girafes, chaque rencontre promet une expérience inoubliable. 
                            Nous nous engageons à recréer des environnements authentiques pour nos pensionnaires, garantissant ainsi 
                            leur bien-être et permettant à nos visiteurs de s'immerger dans leur univers.
                            </p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <p>
                            Le Zoo Explorer n'est pas seulement un lieu de divertissement, mais aussi un partenaire actif dans la préservation de notre planète.
                             Nous sommes reconnaissants de votre présence aujourd'hui et espérons que cette aventure renforcera 
                             votre connexion avec la nature et l'importance de sa conservation.
                            </p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <img src={logo} alt ='logo du site' className='img-fluid' />
                        </div>
                        <div className='col-12 col-md-6'>
                        {/* col-12 pour signifier que l'on prendra la moitié de l'écran pour les petits affichages et 
                        "col-md-6" pour faire deux colones de moitié(6/12 = 1/2) à partir d'une taille moyenne d'écran */}
                            <img src={lion} alt ='logo du site' className='img-fluid'/>
                        </div>
                        <div className='col-12 col-md-6'>
                            <p>
                            Dans nos vastes habitats naturels, vous découvrirez des créatures majestueuses provenant des quatre coins du monde. 
                            Du rugissement puissant des lions à la grâce élégante des girafes, chaque rencontre promet une expérience inoubliable. 
                            Nous nous engageons à recréer des environnements authentiques pour nos pensionnaires, garantissant ainsi 
                            leur bien-être et permettant à nos visiteurs de s'immerger dans leur univers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accueil;
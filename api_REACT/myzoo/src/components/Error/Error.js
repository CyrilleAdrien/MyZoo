import React from "react";
import TitreH1 from "../UserInterface/Titre/TitreH1";

const Error = (props) => (
        <>
            <TitreH1 bgColor = "bg-danger">
                Erreur {props.type}
            </TitreH1>

            <div align = "center">
                {props.children}
            </div>
            
        </>
);

export default Error;
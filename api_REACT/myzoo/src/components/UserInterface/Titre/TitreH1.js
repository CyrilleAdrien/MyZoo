import React from "react";

const TitreH1 = (props) => {
    let backgroundColor = props.bgColor ? props.bgColor : "bg-primary";
    let MonCss = `border border-black my-2 p-2 text-white text-center  ${backgroundColor}`;
    // "My-0" pour avoir des marges de taille 0 de Bootstrap en haut et en bas, "p-2" pour avoir des paddings de taille 2 de Bootstrap 
    return <h1 className={MonCss}>{props.children}</h1>;
};

export default TitreH1;

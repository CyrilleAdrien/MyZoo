import React from "react";

const Cadre = (props) => {
    let backgroundColor = props.bgColor ? props.bgColor : "bg-primary";
    let bordure = props.bordure;
    let MonCss = `border border-black my-0 p-2 text-white text-center ${bordure} ${backgroundColor}`;
    // "My-0" pour avoir des marges de taille 0 de Bootstrap en haut et en bas, "p-2" pour avoir des paddings de taille 2 de Bootstrap 
    return <h2 className={MonCss}>{props.children}</h2>;
};

export default Cadre;
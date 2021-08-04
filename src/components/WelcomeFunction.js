import React from 'react';

const WelcomeFunction = ({nombre,anios}) =>{ //IDEM ABAJO

// const WelcomeFunction = (props) =>{
    // const {nombre,anios}= props; // CARGO LAS VARIABLES CON EL CONTENIDO DE PROPS
    //PARA QUE SEA UN COMPONENTE DE REACT YIENE QUE DEVOLVER UN JSX
    return <div>Hola, {nombre} de {anios} años , ¿paso usted ya por casa?</div>
}

export default WelcomeFunction;
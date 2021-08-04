import React from 'react';

class WelcomeClass extends React.Component{
    render(){

        const nombre = this.props.nombre; //Llama a la propiedad nombre que estaba declarada en el index.js
        return <div>Hola, {nombre}</div>
    }
}

export default WelcomeClass;
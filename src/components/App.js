import React, { Children } from 'react';
// import WelcomeFunction from './WelcomeFunction';
import Comentario from './Comentario';
import NavBar from './NavBar';
import '../style.css'


const comentarios=[
    {
    nombre: 'Milena',
    mensaje: 'felicitaciones'
    },
    {
        nombre: 'Jose',
        mensaje: 'Viva Perón'
    },
    {
        nombre: 'Kitana',
        mensaje: 'Flawless victory'
    },
    {
        nombre: 'Bart Simpson',
        mensaje: 'Yo no fui'
    }
];

const renderComentarios = onSeleccionarComentario =>{
    return comentarios.map(comentario => {
        return(
            <Comentario 
                nombre={comentario.nombre}
                comentario={comentario.mensaje}
                onSeleccionar={() => onSeleccionarComentario(comentario.mensaje)}
            />
        );
    });
} ;

//HAGO LO MISMO QUE ABAJO PERO LLAMO A LA FUNCION RENDERCOMENTARIOS()
class App extends React.Component {
    //Se invoca el constructor la primera vez que se convoca el React
    constructor(props){
        super(props);
        //crea una variable donde va a almacenar el comentario
        this.state = { mensaje:null};
    }

    onSeleccionarComentario(mensaje){
        //MODIFICA EL CONTENIDO DE LA VARIABLE COMENTARIO
        this.setState({mensaje: mensaje})
    }
    itemListContainer(){
        return (
            <div className='listadoItems'>
                <h1>Bienvenidos a nuestra tienda</h1>
                <div>
                    <h2>Estos son nuestros Productos</h2>
                    <li>Relojes</li>
                    <li>Billeteras</li>
                    <li>Cinturones</li>
                    <li>Zapatos</li>
                </div>
            </div>
        )
    }
    render(){
        return (<div>
            <NavBar />
            <div>
                {this.itemListContainer()}
            </div>
            {/* {this.props.children}
            {renderComentarios(this.onSeleccionarComentario.bind(this))}
            <div className='mensajeLoco'>{this.state.mensaje}</div> */}
        </div>);
    }
}
// const App = () =>{
//     // return <WelcomeFunction  nombre='Mati Scava' anios='30'/>
//     return (
//     <div>
//         {/* HAGO UN FOR EACH DONDE RECORRE EL ARRAY */}
//         {
//             comentarios.map(comentario => {
//                 return <Comentario nombre={comentario.nombre} comentario={comentario.comentario} /> 
//             })
//         }
//     {/* <Comentario  nombre={comentario.nombre} comentario={comentario.comentario}/> */}
//     </div>
//         )

// }

export default App;

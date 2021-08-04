import React from 'react';
import ReactDOM from 'react-dom';
// import WelcomeClass from './components/WelcomeClass';
// import WelcomeFunction from './components/WelcomeFunction';
import App from './components/App';


const Titulo = ()=>{
    return <h1>Lista de Posts</h1>
}

//renderizo el componenete welcome class
// ReactDOM.render(<div><WelcomeClass/><WelcomeFunction/></div>, document.getElementById('root'));

//Le agrego una propiedad al WelcomeClass
// ReactDOM.render(<WelcomeClass nombre='Matias Scavarelli'/>, document.getElementById('root'));

//Le agrego una propiedad al WelcomeFunction
// ReactDOM.render(<WelcomeFunction nombre='Matias Scavarelli' anios='30'/>, document.getElementById('root'));

ReactDOM.render(
<App>
    <Titulo />
</App>, document.getElementById('root'));


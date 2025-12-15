import React from "react";
import { useState } from "react";
// Cambio de prueba para activar deploy en rama dev

import Header from "./components/Header"; 
import Nav from "./components/Nav";
import Main from "./components/Main"; 
import Gallery from "./components/Gallery";
import EquipoTalentoLab from "./components/EquipoTalentoLab"; 
import TarjetaProyecto from "./components/TarjetaProyecto"; 
import GaleriaIntereses from "./components/GaleriaIntereses"; 
import Footer from "./components/Footer"; 
import ContadorSumaResta from "./components/ContadorSumaResta";
//import FormularioEnvio from "./components/Formulario";
import FormObjetos from "./components/FormularioObjetos";
import Hover from "./components/Hover";
import EcommerceSimple from "./components/CarritoSimple";
import EcommerceTotal from "./components/CarritoTotal";

//import './estilos/estilo.css';
import "./App.css"

function App() {

  const equipo = [
    {
      nombre: "Mariela",
      rol: "Pastelera artesanal",
      imagen: "https://picsum.photos/id/64/4326/2884",
    },

    {
      nombre: "Ezequiel",
      rol: "Logística",
      imagen: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
      nombre: "Federico",
      rol: "Atención al cliente",
      imagen: "https://media.istockphoto.com/id/2195226068/es/foto/retrato-al-aire-libre-de-un-hombre-alegre-en-una-naturaleza-llena-de-sol.webp?a=1&b=1&s=612x612&w=0&k=20&c=VOeGqZTdWfIFOVQPXCdNe560phcPw53w71y8EN145BA=",
    },

    {
      nombre: "Sofía",
      rol: "Diseño y decoración",
      imagen:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const intereses = ['Tortas', 'Brownies', 'Cookies NY', 'Cookies decoradas', 'Fechas especiales'];

  return ( 
    // invoco al componente ListaUsuario || elimino las líneas <h1>React</h1> y    <hr></hr>
    <> 
    <Header />
    <Nav />
    <Main />
    <Gallery />
    <EquipoTalentoLab equipo={equipo} />
    <TarjetaProyecto
      titulo="Torta de Chocolate"
      descripcion="Bizcochuelo húmedo con ganache artesanal."
      botonTexto="Agregar - (leer mensaje al profe)"
    />    
    <GaleriaIntereses intereses={intereses}/>
    <ContadorSumaResta />
    <FormObjetos />
    <Hover />
    <EcommerceSimple />
    <EcommerceTotal />
    <Footer />
    </>
  );
} export default App;

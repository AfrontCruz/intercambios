import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MenuInterchange = () => (
    <div className="full-page">
        <Navbar />
        <div className="wrapper">
            <div className="container-center">
                <div className="container-primary-wp pb-5">
                    <div className="header-primary d-flex flex-row justify-content-around">
                        <h3>Nombre del intercambio</h3>                        
                    </div>
                    <div className="pt-4 pl-3 pr-3">
                        <button className="button-red w-100">Ver integrantes</button>
                    </div>
                    <div className="pt-4 pl-3 pr-3">
                        <button className="button-red w-100">Realizar sorteo</button>
                    </div>
                    <div className="pt-4 pl-3 pr-3">
                        <button className="button-red w-100">Ver sorteo</button>
                    </div>
                    <div className="pt-4 pl-3 pr-3">
                        <button className="button-red w-100">Editar intercambio</button>
                    </div>
                    <div className="pt-4 pl-3 pr-3">
                        <button className="button-red w-100">Cancelar intercambio</button>
                    </div>
                    <div className="pt-4 pl-3 pr-3">
                        <button className="button-blue w-100">Volver al menu</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default MenuInterchange;
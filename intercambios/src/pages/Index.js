import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Index = ({go}) => (
    <div className="full-page">
        <Navbar />
        <div className="wrapper">
            <div className="container-center">
                <div className="container-primary">
                    <h5 className="text-red text-center pt-5">Nosotros organizamos tu intercambio</h5>
                    <ul className="list-item">
                        <li>Crea una cuenta</li>
                        <li>Invita a tus amigos</li>
                        <li>Sortea tu intercambio</li>
                        <li>Recibe tus regalos</li>
                    </ul>
                    <div className="text-center pr-5 pt-3 pl-5">
                        <button id="register" onClick={go} className="button-red w-100">Ir</button>
                    </div>
                    <h5 className="text-red text-center pt-4">¿Ya tienes una cuenta?</h5>
                    <div className="text-center pr-5 pt-3 pl-5 pb-5">
                        <button id="login" onClick={go} className="button-red w-100">Iniciar</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default Index;
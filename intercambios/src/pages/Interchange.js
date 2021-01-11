import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Interchange = () => (
    <div className="full-page">
        <Navbar />
        <div className="wrapper">
            <div className="container-center">
                <div className="container-primary-wp">
                    <div className="header-primary d-flex flex-row justify-content-around">
                        <h3>Mis intercambios</h3>
                        <button className="button-header">+</button>
                    </div>
                    <div className="items pt-3">
                        <div className="container-item pl-2 pr-2">
                            <div className="w-75 item-info">
                                <h5 className="text-red">Familia y amigos</h5>
                                <p>Integrantes: 20</p>
                                <p>Monto: 250MXN</p>
                                <p>Fecha: 14/02/2021</p>
                            </div>
                            <div className="w-25 flex-center">
                                <button className="button-info">i</button>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="container-item pl-2 pr-2">
                            <div className="w-75 item-info">
                                <h5 className="text-red">Appsmx Team</h5>
                                <p>Integrantes: 20</p>
                                <p>Monto: 250MXN</p>
                                <p>Fecha: 14/02/2021</p>
                            </div>
                            <div className="w-25 flex-center">
                                <button className="button-info">i</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default Interchange;
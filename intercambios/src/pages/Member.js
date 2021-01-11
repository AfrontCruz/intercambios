import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Member = () => (
    <div className="full-page">
        <Navbar />
        <div className="wrapper">
            <div className="container-center">
                <div className="container-primary-wp">
                    <div className="header-primary d-flex flex-row justify-content-around">
                        <h3>Mis integrantes</h3>
                        <button className="button-header">+</button>
                    </div>
                    <div className="items pt-3">
                        <div className="container-item pl-2 pr-2">
                            <div className="w-75 item-info">
                                <h5 className="text-red">Daniel Juárez</h5>
                                <p>Correo:</p>
                                <p>danafront0@gmail.com</p>
                                <p className="text-red">CONFIRMADO</p>
                            </div>
                            <div className="w-25 flex-center">
                                <button className="button-info">i</button>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="container-item pl-2 pr-2">
                            <div className="w-75 item-info">
                                <h5 className="text-red">Isabella Torres</h5>
                                <p>Correo:</p>
                                <p>itorres@gmail.com</p>
                                <p className="text-blue">NO CONFIRMADO</p>
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

export default Member;
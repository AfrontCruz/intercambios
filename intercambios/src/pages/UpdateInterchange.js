import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const UpdateInterchange = () => (
    <div className="full-page">
        <Navbar />
        <div className="wrapper">
            <div className="container-center">
                <div className="container-primary">
                    <h2 className="text-center mt-5">Actualizar intercambio</h2>
                    <div className="p-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className="form-control" id="nombre" value="Familia y amigos" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="monto">Monto</label>
                                <input type="number" className="form-control" id="monto" value="250.00"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="sorteo">Fecha del sorteo</label>
                                <input type="date" className="form-control" id="sorteo" value="2021-02-09" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="intercambio">Fecha del intercambio</label>
                                <input type="date" className="form-control" id="intercambio" value="2021-02-14"/>
                            </div>
                            <div className="text-right">
                                <button type="button" className="w-100 button-red">
                                    Actualizar intercambio
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default UpdateInterchange;
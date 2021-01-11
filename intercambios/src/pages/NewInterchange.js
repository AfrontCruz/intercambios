import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const NewInterchange = () => (
    <div className="full-page">
        <Navbar />
        <div className="wrapper">
            <div className="container-center">
                <div className="container-primary">
                    <h2 className="text-center mt-5">Nuevo intercambio</h2>
                    <div className="p-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className="form-control" id="nombre" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="monto">Monto</label>
                                <input type="number" className="form-control" id="monto" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sorteo">Fecha del sorteo</label>
                                <input type="date" className="form-control" id="sorteo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="intercambio">Fecha del intercambio</label>
                                <input type="date" className="form-control" id="intercambio" />
                            </div>
                            <div className="text-right">
                                <button type="button" className="w-100 button-red">
                                    Crear intercambio
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

export default NewInterchange;
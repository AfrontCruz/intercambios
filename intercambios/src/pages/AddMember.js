import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AddMember = () => (
    <div className="full-page">
        <Navbar />
        <div className="wrapper">
            <div className="container-center">
                <div className="container-primary">
                    <h2 className="text-center mt-5">Agregar integrante</h2>
                    <div className="p-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className="form-control" id="nombre" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="correo">Correo</label>
                                <input type="email" className="form-control" id="correo" />
                                <p className="text-red f-12 mt-2">No necesita estar registrado</p>
                            </div>
                            <div className="text-right">
                                <button type="button" className="w-100 button-red">
                                    Agregar
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

export default AddMember;
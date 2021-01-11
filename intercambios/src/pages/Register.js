import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Register = () => (
    <div className="full-page">
        <Navbar />
        <div className="wrapper">
            <div className="container-center">
                <div className="container-primary">
                    <h2 className="text-center mt-2">Regístrate</h2>
                    <div className="p-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="correo">Correo</label>
                                <input type="text" className="form-control" id="correo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" className="form-control" id="nombre" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="usuario">Usuario</label>
                                <input type="text" className="form-control" id="usuario" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="clave">Contraseña</label>
                                <input type="password" className="form-control" id="clave" />
                            </div>
                            <div className="text-right mt-4">
                                <button type="button" className="button-red w-100">
                                    Registrar
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

export default Register;
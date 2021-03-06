import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Login = () => (
    <div className="full-page">
        <Navbar />
        <div className="wrapper">
            <div className="container-center">
                <div className="container-primary">
                    <h2 className="text-center mt-5">Iniciar sesión</h2>
                    <div className="p-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="correo">Correo o usuario</label>
                                <input type="text" className="form-control" id="correo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="clave">Contraseña</label>
                                <input type="password" className="form-control" id="clave" />
                                <p className="text-red f-12 mt-2">Olvidé contraseña</p>
                            </div>
                            <div className="text-right">
                                <button type="button" className="button-red">
                                    Ingresar
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

export default Login;
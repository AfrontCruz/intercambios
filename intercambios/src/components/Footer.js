import React from 'react';
import fbIcon from '../images/facebook.png';

const Footer = () =>{
    return(
        <div className="footer">
            <a href="https://appsmx.com.mx" target="_blank" rel="noreferrer"><img src={fbIcon} alt="fb-icon" /></a>
        </div>
    )
};

export default Footer;
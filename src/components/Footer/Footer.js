import React from 'react';

function Footer(props) {
    return (
        <footer className='footer'>
            <p>Created by Gigi. Copyright {props.year}</p>
        </footer>
    );
}

export default Footer;

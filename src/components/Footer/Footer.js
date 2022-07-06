import React from 'react';

function Footer(props) {
    return (
        <footer className='footer'>
            <p>Copyright {props.year}</p>
        </footer>
    );
}

export default Footer;

import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer className=' text-center mt-5 bg-light text-dark p-5'>
            <div className='container d-flex justify-content-between text-center'>
                <h4>Google</h4>
                <p>About Google</p>
                <p>Google products</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p><FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>Help</p>
            </div>
        </footer>
    );
};

export default Footer;

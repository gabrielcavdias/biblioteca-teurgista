import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center bg-brand-gray-dark text-white py-3">
            Desenvolvido com <i className="fa-solid fa-heart text-red-500"></i>{' '}
            por{' '}
            <a
                href="https://www.github.com/gabrielcavdias"
                target="_blank"
                className="text-glow"
            >
                Helio Dias
            </a>
        </footer>
    );
};

export default Footer;

import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center bg-brand-gray-dark text-white py-8 mt-auto">
            <p>
                Desenvolvido com{' '}
                <i className="fa-solid fa-heart text-red-500"></i> por{' '}
                <a
                    href="https://www.github.com/gabrielcavdias"
                    target="_blank"
                    className="text-glow"
                >
                    Helio Dias
                </a>
            </p>
            <p className="mt-3">
                Código fonte disponível no{' '}
                <a
                    href="https://github.com/gabrielcavdias/biblioteca-teurgista"
                    target="_blank"
                    className="text-glow underline"
                >
                    Github
                </a>
            </p>
        </footer>
    );
};

export default Footer;

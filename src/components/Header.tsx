import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="bg-brand-gray-dark text-white">
            <div className="container lg:px-0 py-4 flex flex-col items-center md:flex-row md:px-3 md:justify-between">
                <Link
                    to="/"
                    className="flex items-center [ hover: text-glow-purple ]"
                >
                    <img
                        src={logo}
                        alt="Livro aberto com fundo roxo"
                        className="w-20"
                    />
                    <p className=" font-cursive text-3xl">
                        Biblioteca Teurgista
                    </p>
                </Link>
                <nav>
                    <ul className="flex text-2xl w-full justify-center items-center gap-x-8">
                        {[
                            ['Magias', '/'],
                            ['Personagens', 'personagens'],
                        ].map(([title, link]) => (
                            <li key={link}>
                                <Link
                                    to={link}
                                    className="[ hover: text-glow ] transition-all duration-300"
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

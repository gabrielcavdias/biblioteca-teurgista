import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-brand-gray-dark text-white">
            <div className="container px-3 lg:px-0 py-4 flex justify-between">
                <h1 className="font-bold uppercase text-3xl">LOGO</h1>
                <nav>
                    <ul className="flex gap-x-8 text-2xl">
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

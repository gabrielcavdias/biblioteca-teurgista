import React from 'react';
import MyContext from '../context/MyContext';
import { Spell } from '../helpers/types';
import MagiaItem from './MagiaItem';

const MagiasList = () => {
    const { spellList }: any = React.useContext(MyContext);
    return (
        <section
            aria-labelledby="magias__title"
            className="max-w-2xl mt-2 pt-2 pb-8 px-3 bg-brand-gray-dark rounded-lg"
        >
            <h2
                id="magias__title"
                className="text-white text-3xl font-bold uppercase"
            >
                Magias
            </h2>
            <div className="max-h-screen overflow-auto py-2">
                <ul className="grid gap-2 content-center mt-4 w-full">
                    {spellList.map((magia: Spell, index: number) => (
                        <MagiaItem key={index} magia={magia} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default MagiasList;

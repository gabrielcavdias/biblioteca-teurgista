import React from 'react';
import CurrentMagia from '../components/CurrentMagia';
import MagiasList from '../components/MagiasList';
import MagiaFilters from '../components/MagiaFilters';
import CharacterSelect from '../components/CharacterSelect';
import { GlobalContext } from '../context/GlobalContext';
const Magias = () => {
    const { characterSelectOpen }: any = React.useContext(GlobalContext);
    return (
        <div className="container mt-7 pb-8">
            <MagiaFilters />
            {characterSelectOpen ? <CharacterSelect /> : null}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <MagiasList />
                <div className="mt-2">
                    <CurrentMagia />
                </div>
            </div>
        </div>
    );
};

export default Magias;

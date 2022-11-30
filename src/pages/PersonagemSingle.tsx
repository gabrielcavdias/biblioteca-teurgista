import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import MagiaItem from '../components/MagiaItem';
import { GlobalContext } from '../context/GlobalContext';
import { Spellbook } from '../helpers/Spellbook';
import { Spell, SpellSlot, TCharacter } from '../helpers/types';

const PersonagemSingle = () => {
    const id: any = useParams().id;

    const { characters, setCharacters }: any = React.useContext(GlobalContext);
    const targetCharacter = characters.find(
        (char: TCharacter) => char.id == id
    );
    if (targetCharacter == undefined) {
        return <Navigate to="/"></Navigate>;
    }
    return (
        <section
            aria-labelledby="magias__title"
            className="max-w-2xl mt-2 pt-2 pb-8 px-3 bg-brand-gray-dark rounded-lg my-36 container"
        >
            <h2 id="magias__title" className="text-white text-3xl font-bold">
                Grimório de {targetCharacter.name}
            </h2>
            <div className="max-h-72 overflow-y-auto py-2 md:max-h-screen">
                <ul className="grid gap-2 content-center mt-4 w-full ">
                    {targetCharacter.spells.map(
                        (magia: SpellSlot, index: number) => {
                            let targetMagia: any =
                                Spellbook.getAllSpells().find(
                                    (spell) => spell.id == magia.spellId
                                );
                            return (
                                <MagiaItem key={index} magia={targetMagia} />
                            );
                        }
                    )}
                </ul>
            </div>
        </section>
    );
};

export default PersonagemSingle;

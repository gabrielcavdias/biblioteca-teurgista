import React from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { SpellSlot } from '../helpers/types';

const CharacterSelect = () => {
    const {
        characters,
        setCharacters,
        currentCharacter,
        setCharacterSelectOpen,
        setCurrentCharacter,
        currentAddMagia,
        spellList,
    }: any = React.useContext(GlobalContext);

    React.useEffect(() => {
        if (currentCharacter != null) {
            let isSpellinGrimoire = currentCharacter.spells
                .map((spell: SpellSlot) => spell.spellId)
                .includes(currentAddMagia);

            if (!isSpellinGrimoire) {
                currentCharacter.spells.push({
                    spellId: currentAddMagia,
                    isMemorized: false,
                    memorizedCount: 0,
                });
                window.alert(
                    `${
                        spellList.find(
                            (magia: any) => magia.id === currentAddMagia
                        ).nome
                    } adicionado ao grimório do personagem ${
                        currentCharacter.name
                    }`
                );
            }
            setCharacters([...characters]);
            setCurrentCharacter(null);
            setCharacterSelectOpen(false);
        }
    }, [currentCharacter]);
    React.useEffect(() => {
        window.localStorage.setItem('personagens', JSON.stringify(characters));
    }, [characters]);
    return (
        <div className="fixed inset-0 h-screen w-screen bg-brand-purple-dark bg-opacity-80 grid place-items-center">
            <div className="bg-brand-gray-dark rounded-md p-4 text-white">
                <h2 className="text-center font-bold">Escolha um personagem</h2>
                <div className="grid gap-2 mt-4">
                    {characters.map((character: any) => (
                        <button
                            className="block p-2 bg-brand-purple-light hover:bg-purple-500 transition-all duration-300 text-white rounded-md"
                            onClick={() => {
                                setCurrentCharacter(character);
                            }}
                        >
                            {character.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharacterSelect;

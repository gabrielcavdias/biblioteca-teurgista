import React from 'react';
import { Character } from '../helpers/Character';
import { TCharacter } from '../helpers/types';
const Personagens = () => {
    const [characters, setCharacters] = React.useState<TCharacter[]>(() => {
        let localCharacters = window.localStorage.getItem('personagens');
        return localCharacters ? JSON.parse(localCharacters) : [];
    });

    const handleCharacterCreation = () => {
        let newCharacter: TCharacter = new Character('Dênis', []);
        setCharacters([...characters, newCharacter]);
    };

    React.useEffect(() => {
        window.localStorage.setItem('personagens', JSON.stringify(characters));
    }, [characters]);

    return (
        <div>
            <div className="flex justify-end container">
                <button
                    className="bg-brand-purple-dark text-white rounded p-2 my-4 ml-auto hover:bg-violet-700"
                    onClick={() => handleCharacterCreation()}
                >
                    Criar novo personagem
                </button>
            </div>

            <ul>
                {characters.map((character: TCharacter) => (
                    <li key={Math.random()}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Personagens;

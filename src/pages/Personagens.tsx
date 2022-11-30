import React from 'react';
import { Link } from 'react-router-dom';
import PersonagensModal from '../components/PersonagensModal';
import { GlobalContext } from '../context/GlobalContext';
import { Character } from '../helpers/Character';
import { strCapitalize } from '../helpers/functions';
import { TCharacter } from '../helpers/types';
const Personagens = () => {
    const { characters, setCharacters }: any = React.useContext(GlobalContext);

    const [isModalOpen, setModalOpen] = React.useState<boolean>(false);

    const handleCharacterCreation = (nome: string) => {
        let newCharacter: TCharacter = new Character(strCapitalize(nome), []);
        setCharacters([...characters, newCharacter]);
    };

    const deleteCharacter = (character: any) => {
        let personagem = characters.find(
            (char: TCharacter) => char == character
        );
        let charactersClone = [...characters];
        charactersClone.splice(charactersClone.indexOf(personagem), 1);
        setCharacters([...charactersClone]);
    };

    React.useEffect(() => {
        window.localStorage.setItem('personagens', JSON.stringify(characters));
    }, [characters]);

    return (
        <div className="text-white">
            <PersonagensModal
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
                handleCharacterCreation={handleCharacterCreation}
            />
            <div className="flex justify-end container">
                <button
                    className="bg-brand-purple-dark text-white rounded p-2 my-4 ml-auto hover:bg-violet-700"
                    onClick={() => setModalOpen(true)}
                >
                    Criar novo personagem
                </button>
            </div>

            {characters.length >= 1 ? (
                <>
                    <h1 className="font-cursive text-center text-3xl">
                        Personagens
                    </h1>
                    <ul className="mx-52 my-4">
                        {characters.map((character: TCharacter) => (
                            <li
                                key={Math.random()}
                                className="bg-brand-gray-light-2 p-3 rounded-md text-xl flex justify-between"
                            >
                                <Link
                                    to={`/personagens/${character.id}`}
                                    className="text-glow-purple transition-all"
                                >
                                    {character.name}
                                </Link>
                                <span
                                    onClick={() => {
                                        deleteCharacter(character);
                                    }}
                                >
                                    <i className="fa-solid fa-trash transition-all hover:text-red-500 cursor-pointer"></i>
                                </span>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p className="text-3xl font-cursive container text-center my-8">
                    Nenhum personagem criado
                </p>
            )}
        </div>
    );
};

export default Personagens;

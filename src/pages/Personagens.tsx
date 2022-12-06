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
        if (characters.length == 0) {
            let newCharacter: TCharacter = new Character(
                strCapitalize(nome),
                []
            );
            setCharacters([...characters, newCharacter]);
        } else {
            window.alert('Múltiplos personagens só no plano premium');
            window.alert('BRINKS! Mas ainda não dá pra ter vários boneco :(');
        }
    };

    const deleteCharacter = (character: any) => {
        let personagem = characters.find(
            (char: TCharacter) => char == character
        );
        let charactersClone = [...characters];
        charactersClone.splice(charactersClone.indexOf(personagem), 1);
        setCharacters([...charactersClone]);
    };

    const memorizedSpellsCount = (character: TCharacter) => {
        return character.spells
            .map((spell) => spell.memorizedCount)
            .reduce((acc, prev) => acc + prev, 0);
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
                    <ul
                        className={`mx-52 my-4 ${
                            characters.length < 3 && 'mb-64'
                        }`}
                    >
                        {characters.map((character: TCharacter) => (
                            <li
                                key={Math.random()}
                                className="bg-brand-gray-light-2 p-3 my-4 rounded-md text-xl flex justify-between items-center"
                            >
                                <Link
                                    to={`/personagens/${character.id}`}
                                    className="text-glow-purple transition-all grid"
                                >
                                    <span className="flex gap-2 items-center">
                                        <i className="fa-solid fa-user-large"></i>{' '}
                                        {character.name}
                                    </span>
                                    <span className="flex gap-2 items-center mt-2">
                                        <span className="text-xs">
                                            <i className="fa-solid fa-brain"></i>{' '}
                                            {character.spells.length}
                                        </span>
                                        <span className="text-xs">
                                            <i
                                                className={`fa-solid fa-book-open-reader`}
                                            ></i>{' '}
                                            {memorizedSpellsCount(character)}
                                        </span>
                                    </span>
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
                <>
                    <p className="text-3xl font-cursive container text-center my-8">
                        Nenhum personagem criado
                        <span className="block my-2">
                            Saiba mais sobre como funciona a criação de
                            personagens no vídeo abaixo:
                        </span>
                        <span className="text-gray-600 text-xs">
                            O vídeo não existe ainda, então ouve essa música
                            muito foda
                        </span>
                    </p>
                    <div className="rounded-md overflow-hidden max-w-lg aspect-video mx-auto my-4">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/-h-0basn9r4"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </>
            )}
        </div>
    );
};

export default Personagens;

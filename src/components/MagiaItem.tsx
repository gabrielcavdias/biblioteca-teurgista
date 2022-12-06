import React from 'react';
import { getDescritorIcon, getSpellNivel } from '../helpers/functions';
import { Spell, SpellSlot, TCharacter } from '../helpers/types';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
type MagiasItemProps = {
    magia: Spell;
    spellSlot?: SpellSlot;
    character?: TCharacter;
};

const MagiaItem = ({ magia, spellSlot, character }: MagiasItemProps) => {
    const { currentMagiaID, setCurrentMagiaID }: any =
        React.useContext(GlobalContext);
    const { characters, setCharacters }: any = React.useContext(GlobalContext);

    let magiaIcon =
        magia.origem == 'divina'
            ? 'fa-solid fa-book-bible'
            : 'fa-solid fa-book-tanakh';

    let activeClasses =
        currentMagiaID == magia.id
            ? 'bg-brand-purple-dark/40 text-yellow-300/90 outline outline-2 outline-brand-purple-light'
            : 'bg-brand-gray-light';

    const handleAddMagia = (id: number) => {
        if (characters.length == 1) {
            let character = characters[0];
            let isSpellinGrimoire = character.spells
                .map((spell: SpellSlot) => spell.spellId)
                .includes(id);

            if (!isSpellinGrimoire) {
                character.spells.push({
                    spellId: id,
                    isMemorized: false,
                    memorizedCount: 0,
                });
                setCharacters([...characters]);
                window.alert(
                    `${magia.nome} adicionado ao grimório do personagem ${character.name}`
                );
            }
        }
    };

    const handleMemorize = () => {
        const targetSpell = character?.spells.find(
            (spell) => spell.spellId == magia.id
        );
        targetSpell &&
            (targetSpell.isMemorized
                ? (targetSpell.memorizedCount += 1)
                : ((targetSpell.isMemorized = true),
                  (targetSpell.memorizedCount = 1)));
        setCharacters([...characters]);
    };

    const handleForget = (event: any) => {
        event.preventDefault();
        const targetSpell = character?.spells.find(
            (spell) => spell.spellId == magia.id
        );
        targetSpell &&
            (targetSpell.memorizedCount > 1
                ? (targetSpell.memorizedCount -= 1)
                : ((targetSpell.isMemorized = false),
                  (targetSpell.memorizedCount = 0)));
        setCharacters([...characters]);
    };

    React.useEffect(() => {
        window.localStorage.setItem('personagens', JSON.stringify(characters));
    }, [characters]);
    return (
        <li
            className="text-white flex max-w-full cursor-pointer md:mx-1"
            onClick={() => setCurrentMagiaID(magia.id)}
        >
            <span
                className={`${activeClasses} px-2 py-1 rounded font-bold mr-2`}
            >
                {getSpellNivel(magia)}º
            </span>
            <span
                className={`${activeClasses} flex items-center px-2 py-1 rounded font-bold text-lg md:text-xl w-full justify-between`}
            >
                <span className="inline-flex flex-col gap-2 md:flex-row md:items-center">
                    {getDescritorIcon(magia.descritores[0].slug)}
                    {magia.nome}
                </span>
                <span className="inline-flex gap-2 items-center text-2xl pl-2 text-white">
                    {!spellSlot && (
                        <button onClick={() => handleAddMagia(magia.id)}>
                            <i className={magiaIcon}></i>
                        </button>
                    )}
                    {spellSlot && (
                        <button
                            className="relative"
                            onClick={() => handleMemorize()}
                            onContextMenu={(event) => handleForget(event)}
                        >
                            <i
                                className={`fa-solid fa-book-open-reader ${
                                    spellSlot.isMemorized
                                        ? 'text-violet-500'
                                        : ''
                                }`}
                            ></i>
                            {spellSlot.memorizedCount > 1 && (
                                <span className="absolute -translate-x-1/2 left-1/2 top-2 text-lg">
                                    {spellSlot.memorizedCount}
                                </span>
                            )}
                        </button>
                    )}
                    <Link to={`magias/${magia.id}`} target="_blank">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </Link>
                </span>
            </span>
        </li>
    );
};

export default MagiaItem;

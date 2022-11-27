import React from 'react';
import { getDescritorIcon, getSpellNivel } from '../helpers/functions';
import { Spell } from '../helpers/types';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
type MagiasItemProps = {
    magia: Spell;
};

const MagiaItem = ({ magia }: MagiasItemProps) => {
    const { currentMagiaID, setCurrentMagiaID }: any =
        React.useContext(GlobalContext);

    let magiaIcon =
        magia.origem == 'divina'
            ? 'fa-solid fa-book-bible'
            : 'fa-solid fa-book-tanakh';

    let activeClasses =
        currentMagiaID == magia.id
            ? 'bg-brand-purple-dark/40 text-yellow-300/90 outline outline-2 outline-brand-purple-light'
            : 'bg-brand-gray-light';
    return (
        <li
            className="text-white flex cursor-pointer mx-1"
            onClick={() => setCurrentMagiaID(magia.id)}
        >
            <span
                className={`${activeClasses} px-2 py-1 rounded font-bold mr-2`}
            >
                {getSpellNivel(magia)}º
            </span>
            <span
                className={`${activeClasses} flex justify-between items-center px-2 py-1 rounded font-bold w-full text-xl`}
            >
                <span className="inline-flex gap-2 items-center">
                    {getDescritorIcon(magia.descritores[0].slug)}
                    {magia.nome}
                </span>
                <span className="inline-flex gap-2 items-center text-2xl pl-2 text-white">
                    <button>
                        <i className={magiaIcon}></i>
                    </button>
                    <Link to="#" target="_blank">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </Link>
                </span>
            </span>
        </li>
    );
};

export default MagiaItem;

import React from 'react';
import { FilterContext } from '../context/FilterContext';
import { GlobalContext } from '../context/GlobalContext';
import { Spellbook } from '../helpers/Spellbook';

const OrdenationDropdown = () => {
    const { spellList, setSpellList }: any = React.useContext(GlobalContext);
    const { currentOrdenation, setCurrentOrdenation }: any =
        React.useContext(FilterContext);

    // WHY??????????
    const spellListClone = [...spellList];
    // ????????????

    const [dropdownOpen, setDropDownOpen] = React.useState<boolean>(false);
    React.useEffect(() => {
        if (currentOrdenation == 'Por nome') {
            setSpellList(Spellbook.orderSpellsByName(spellListClone));
        } else {
            setSpellList(Spellbook.orderSpellsByNivel(spellListClone));
        }
    }, [currentOrdenation]);
    return (
        <div className="cursor-pointer">
            <span className="text-sm text-gray-200">Ordenar por:</span>
            <div
                className="relative border-b border-gray-200 py-1 px-2 bg-brand-gray-lighter text-white flex gap-12 items-center"
                onClick={() => setDropDownOpen(!dropdownOpen)}
            >
                {currentOrdenation}{' '}
                <i
                    className={`fa-solid fa-chevron-down ${
                        dropdownOpen ? 'rotate-180' : ''
                    }`}
                ></i>
                <ul
                    className={`absolute left-0 top-8 border border-gray-200 bg-inherit w-full ${
                        dropdownOpen ? 'block' : 'hidden'
                    }`}
                >
                    {['Por nome', 'Por nível'].map((ordenationName) => (
                        <li
                            key={Math.random()}
                            onClick={() => setCurrentOrdenation(ordenationName)}
                            className="pl-2 py-3 border-b cursor-pointer border-gray-500 hover:bg-purple-900"
                        >
                            {ordenationName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrdenationDropdown;

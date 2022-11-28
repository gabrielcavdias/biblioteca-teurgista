import React from 'react';
import { FilterContext } from '../context/FilterContext';
import { GlobalContext } from '../context/GlobalContext';
import { strCapitalize } from '../helpers/functions';
import { Spellbook } from '../helpers/Spellbook';

const DescritorDropdown = () => {
    const { spellList, setSpellList }: any = React.useContext(GlobalContext);
    const { handleFilterChange }: any = React.useContext(FilterContext);
    const { currentDescritor, setcurrentDescritor }: any =
        React.useContext(FilterContext);
    // WHY??????????
    const spellListClone = [...spellList];
    // ????????????

    const [dropdownOpen, setDropDownOpen] = React.useState(false);
    React.useEffect(() => {
        handleFilterChange();
    }, [currentDescritor]);
    return (
        <div className="cursor-pointer">
            <span className="text-sm text-gray-200">Descritor:</span>
            <div
                className="relative border-b border-gray-200 py-1 px-2 bg-brand-gray-lighter text-white flex justify-between w-36 items-center"
                onClick={() => setDropDownOpen(!dropdownOpen)}
            >
                {strCapitalize(currentDescritor)}{' '}
                <i
                    className={`fa-solid fa-chevron-down ${
                        dropdownOpen ? 'rotate-180' : ''
                    }`}
                ></i>
                <ul
                    className={`absolute left-0 top-8 border border-gray-200 bg-inherit w-full max-h-80 overflow-y-auto ${
                        dropdownOpen ? 'block' : 'hidden'
                    }`}
                >
                    {Spellbook.descritores.map((ordenationName) => (
                        <li
                            key={Math.random()}
                            onClick={() => setcurrentDescritor(ordenationName)}
                            className="pl-2 py-3 border-b cursor-pointer border-gray-500 hover:bg-purple-900"
                        >
                            {strCapitalize(ordenationName)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DescritorDropdown;

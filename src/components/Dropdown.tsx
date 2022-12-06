import React from 'react';
import { FilterContext } from '../context/FilterContext';
import { GlobalContext } from '../context/GlobalContext';
import { strCapitalize } from '../helpers/functions';
import { Spellbook } from '../helpers/Spellbook';

const Dropdown = ({
    title,
    options,
    currentFilter,
    setCurrentFilter,
    capitalize,
    size,
}: any) => {
    const { handleFilterChange }: any = React.useContext(FilterContext);

    const [dropdownOpen, setDropDownOpen] = React.useState(false);
    React.useEffect(() => {
        handleFilterChange();
    }, [currentFilter]);
    return (
        <div className="cursor-pointer">
            <span className="text-sm text-gray-200">{title}:</span>
            <div
                className={`relative border-b border-gray-200 py-1 px-2 bg-brand-gray-lighter text-white flex justify-between items-center rounded ${
                    size == 'large' ? 'w-48' : 'w-36'
                }`}
                onClick={() => setDropDownOpen(!dropdownOpen)}
            >
                {capitalize ? strCapitalize(currentFilter) : currentFilter}{' '}
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
                    {options.map((optionName: string) => (
                        <li
                            key={Math.random()}
                            onClick={() => setCurrentFilter(optionName)}
                            className="pl-2 py-3 border-b cursor-pointer border-gray-500 hover:bg-purple-900"
                        >
                            {capitalize
                                ? strCapitalize(optionName)
                                : optionName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;

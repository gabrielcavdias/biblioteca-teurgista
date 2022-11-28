import React from 'react';
import { FilterContext } from '../context/FilterContext';
import { GlobalContext } from '../context/GlobalContext';
import { Spellbook } from '../helpers/Spellbook';
import DescritorDropdown from './DescritorDropdown';
import OrdenationDropdown from './OrdenationDropown';

const MagiaFilters = () => {
    const { spellList, setSpellList }: any = React.useContext(GlobalContext);
    const { textContent, setTextContent }: any =
        React.useContext(FilterContext);
    const [filterOpen, setFilterOpen] = React.useState(false);
    const { handleFilterChange }: any = React.useContext(FilterContext);

    React.useEffect(() => {
        handleFilterChange();
    }, [textContent]);
    return (
        <div className="max-w-2xl">
            <input
                type="search"
                name="buscar-magia"
                id="buscar-magia"
                placeholder="Buscar magia"
                className="block w-full pl-6 py-2 text-lg rounded-full"
                value={textContent}
                onChange={(event: any) => setTextContent(event.target.value)}
            />
            <div className="flex justify-end pt-2">
                <button
                    className="bg-gray-50 py-1 px-3 rounded-full font-bold"
                    onClick={() => setFilterOpen(!filterOpen)}
                >
                    Filtrar
                </button>
            </div>
            {filterOpen ? (
                <div className="flex gap-6">
                    <OrdenationDropdown />
                    <DescritorDropdown />
                </div>
            ) : (
                'Fechado'
            )}
        </div>
    );
};

export default MagiaFilters;

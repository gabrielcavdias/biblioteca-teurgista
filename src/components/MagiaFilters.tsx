import React from 'react';
import { FilterContext } from '../context/FilterContext';
import { Spellbook } from '../helpers/Spellbook';
import Dropdown from './Dropdown';

const MagiaFilters = () => {
    const {
        textContent,
        setTextContent,
        currentDescritor,
        setcurrentDescritor,
        currentOrdenation,
        setCurrentOrdenation,
        currentOrigem,
        setCurrentOrigem,
        currentCost,
        setCurrentCost,
    }: any = React.useContext(FilterContext);
    const [filterOpen, setFilterOpen] = React.useState(false);
    const { handleFilterChange }: any = React.useContext(FilterContext);
    React.useEffect(() => {
        handleFilterChange();
    }, [textContent]);
    return (
        <div className="max-w-2xl pr-12 mb-2">
            <div className="relative">
                <input
                    type="search"
                    name="buscar-magia"
                    id="buscar-magia"
                    placeholder="Buscar magia"
                    className="block w-full pl-6 py-2 text-lg rounded-full"
                    value={textContent}
                    onChange={(event: any) =>
                        setTextContent(event.target.value)
                    }
                />
                {textContent.length > 0 && (
                    <i
                        className="[ fa-solid fa-x ] [ absolute right-4 -translate-y-1/2 top-1/2 cursor-pointer ]"
                        onClick={() => setTextContent('')}
                    ></i>
                )}
            </div>
            <div className="flex justify-end pt-2">
                <button
                    className="bg-brand-gray-dark bg-opacity-30 py-1 px-3 rounded-full font-bold text-white text-glow-purple"
                    onClick={() => setFilterOpen(!filterOpen)}
                >
                    <i className="fa-solid fa-filter"></i> Outros filtros{' '}
                    <i
                        className={`fa-solid fa-${
                            filterOpen ? 'chevron-up' : 'chevron-down'
                        }`}
                    ></i>
                </button>
            </div>
            {filterOpen ? (
                <div className="mt-2 flex gap-1">
                    <Dropdown
                        title="Ordenar por"
                        options={['Por nome', 'Por nível']}
                        currentFilter={currentOrdenation}
                        setCurrentFilter={setCurrentOrdenation}
                    />
                    <Dropdown
                        title="Descritor"
                        options={Spellbook.descritores}
                        currentFilter={currentDescritor}
                        setCurrentFilter={setcurrentDescritor}
                        capitalize={true}
                    />
                    <Dropdown
                        title="Origem"
                        options={['Todas', 'Arcana', 'Divina']}
                        currentFilter={currentOrigem}
                        setCurrentFilter={setCurrentOrigem}
                    />
                    <Dropdown
                        title="Custos adicionais"
                        options={[
                            'Todos',
                            'Custo de XP',
                            'Componente material',
                        ]}
                        currentFilter={currentCost}
                        setCurrentFilter={setCurrentCost}
                        size="large"
                    />
                </div>
            ) : null}
        </div>
    );
};

export default MagiaFilters;

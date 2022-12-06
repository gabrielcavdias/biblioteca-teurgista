import { createContext, useState, useContext } from 'react';
import { Spellbook } from '../helpers/Spellbook';
import { GlobalContext } from './GlobalContext';

export const FilterContext: any = createContext({});

export const FilterStorage = ({ children }: { children: any }) => {
    const [currentOrdenation, setCurrentOrdenation] =
        useState<string>('Por nível');
    const [currentDescritor, setcurrentDescritor] = useState<string>('Todos');
    const [currentOrigem, setCurrentOrigem] = useState<string>('Todas');
    const [currentCost, setCurrentCost] = useState<string>('Todos');
    const [textContent, setTextContent] = useState<string>('');
    const { setSpellList }: any = useContext(GlobalContext);

    const handleFilterChange = () => {
        let magias = Spellbook.getAllSpells();
        if (textContent !== '') {
            magias = Spellbook.getFilteredSpells(magias, textContent);
        }
        magias =
            currentOrdenation == 'Por nome'
                ? Spellbook.orderSpellsByName(magias)
                : Spellbook.orderSpellsByNivel(magias);
        if (currentDescritor.toLowerCase() != 'todos') {
            magias = Spellbook.filterSpellsByDescritor(
                magias,
                currentDescritor
            );
        }
        if (currentOrigem.toLowerCase() != 'todas') {
            magias = Spellbook.FilterSpellsByOrigem(magias, currentOrigem);
        }
        if (currentCost.toLowerCase() != 'todos') {
            magias = Spellbook.getFilteredSpells(magias, currentCost);
        }

        setSpellList(magias);
    };
    return (
        <FilterContext.Provider
            value={{
                textContent,
                setTextContent,
                currentOrdenation,
                setCurrentOrdenation,
                currentDescritor,
                setcurrentDescritor,
                currentOrigem,
                setCurrentOrigem,
                currentCost,
                setCurrentCost,
                handleFilterChange,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

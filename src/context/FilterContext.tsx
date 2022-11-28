import { createContext, useState, useContext } from 'react';
import { Spellbook } from '../helpers/Spellbook';
import { GlobalContext } from './GlobalContext';

export const FilterContext: any = createContext({});

export const FilterStorage = ({ children }: { children: any }) => {
    const [currentOrdenation, setCurrentOrdenation] =
        useState<string>('Por nível');
    const [currentDescritor, setcurrentDescritor] = useState<string>('Todos');
    const [textContent, setTextContent] = useState<string>('');
    const { spellList, setSpellList }: any = useContext(GlobalContext);
    const handleFilterChange = () => {
        let magias = Spellbook.getAllSpells();
        if (textContent !== '') {
            magias = Spellbook.getFilteredSpells(textContent);
        }
        magias =
            currentOrdenation == 'Por nome'
                ? Spellbook.orderSpellsByName(magias)
                : Spellbook.orderSpellsByNivel(magias);
        if (currentDescritor.toLocaleLowerCase() != 'todos') {
            magias = Spellbook.filterSpellsByDescritor(
                magias,
                currentDescritor
            );
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
                handleFilterChange,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

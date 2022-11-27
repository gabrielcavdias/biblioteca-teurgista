import { createContext, useState } from 'react';
import { Spellbook } from '../helpers/Spellbook';
import { Spell } from '../helpers/types';

export const GlobalContext: any = createContext({});

export const GlobalStorage = ({ children }: { children: any }) => {
    const [currentMagiaID, setCurrentMagiaID] = useState<number>(4);
    const [spellList, setSpellList] = useState<Spell[]>(
        Spellbook.getAllSpells()
    );
    return (
        <GlobalContext.Provider
            value={{
                currentMagiaID,
                setCurrentMagiaID,
                spellList,
                setSpellList,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

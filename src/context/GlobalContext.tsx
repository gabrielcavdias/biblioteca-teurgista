import { createContext, useState } from 'react';
import { Spellbook } from '../helpers/Spellbook';
import { Spell } from '../helpers/types';

export const GlobalContext: any = createContext({});

export const GlobalStorage = ({ children }: { children: any }) => {
    const [currentMagiaID, setCurrentMagiaID] = useState<number>(4);
    const [spellList, setSpellList] = useState<Spell[]>(
        Spellbook.getAllSpells()
    );
    const [characters, setCharacters] = useState(() => {
        let localCharacters = window.localStorage.getItem('personagens');
        return localCharacters ? JSON.parse(localCharacters) : [];
    });
    const [characterSelectOpen, setCharacterSelectOpen] = useState(false);
    const [currentAddMagia, setCurrentAddMagia] = useState(null);
    const [currentCharacter, setCurrentCharacter] = useState(null);

    return (
        <GlobalContext.Provider
            value={{
                currentMagiaID,
                setCurrentMagiaID,
                spellList,
                setSpellList,
                characters,
                setCharacters,
                currentCharacter,
                setCurrentCharacter,
                characterSelectOpen,
                setCharacterSelectOpen,
                currentAddMagia,
                setCurrentAddMagia,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

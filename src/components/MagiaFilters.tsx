import React from 'react';
import MyContext from '../context/MyContext';
import { debounce } from '../helpers/functions';
import { Spellbook } from '../helpers/Spellbook';

const MagiaFilters = () => {
    const { setSpellList }: any = React.useContext(MyContext);
    const [textContent, setTextContent] = React.useState('');

    React.useEffect(() => {
        if (textContent == '') {
            setSpellList(Spellbook.getAllSpells());
            return;
        }
        setSpellList(Spellbook.getFilteredSpells(textContent));
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
                <button className="bg-gray-50 py-1 px-3 rounded-full font-bold">
                    Filtrar
                </button>
            </div>
        </div>
    );
};

export default MagiaFilters;

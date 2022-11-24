import { Spell } from './types';
import grimorio from '../../data/magias.json';
import { splitSpells } from './functions';

export class Spellbook {
    static spells: Spell[] = grimorio.magias;
    static getAllSpells() {
        return splitSpells(this.spells);
    }

    static getFilteredSpells(term: string) {
        return this.getAllSpells().filter(
            (spell) =>
                spell.descricao.toLowerCase().includes(term.toLowerCase()) ||
                spell.nome.toLowerCase().includes(term.toLowerCase())
        );
    }
}

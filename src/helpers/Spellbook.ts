import { Spell, Descritor } from './types';
import * as grimorio from '../../data/magias.json';
import {
    splitSpells,
    sortSpellsByNome,
    sortSpellsByNivel,
    getDescritorName,
} from './functions';

export class Spellbook {
    static spells: Spell[] = grimorio.magias;
    static descritores: string[] = [
        'todos',
        ...grimorio.descritores.map((desc) => desc.nome),
    ];
    static getAllSpells() {
        return splitSpells(this.spells);
    }

    static getFilteredSpells(magias: Spell[], term: string) {
        return magias.filter(
            (spell) =>
                spell.descricao.toLowerCase().includes(term.toLowerCase()) ||
                spell.nome.toLowerCase().includes(term.toLowerCase())
        );
    }

    static orderSpellsByName(magias: Spell[]) {
        return sortSpellsByNome(magias);
    }

    static orderSpellsByNivel(magias: Spell[]) {
        return sortSpellsByNivel(magias);
    }

    static filterSpellsByDescritor(magias: Spell[], descritor: string) {
        return magias.filter((spell) =>
            [...spell.descritores]
                .map((desc) => getDescritorName(desc.slug).toLowerCase())
                .includes(descritor)
        );
    }
}

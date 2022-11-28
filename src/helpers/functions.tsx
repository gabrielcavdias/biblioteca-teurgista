import { Spell } from './types';
/**
 * @param magias
 * @returns Spell list spliting "ambos" magias into "divina" and "arcana"
 */
export function splitSpells(magias: Spell[]) {
    let arcaneSpells: Spell[] = splitSpellsByOrigem(magias, 'arcana');
    let divineSpells: Spell[] = splitSpellsByOrigem(magias, 'divina', 1000);
    return sortSpellsFinal([...arcaneSpells, ...divineSpells]);
}

/**
 * @param magias
 * @returns Only spell of the chosen "origem" or null
 */
function splitSpellsByOrigem(
    magias: Spell[],
    origem: string,
    change: number = 0
) {
    return magias
        .filter((magia) => magia.origem == origem || magia.origem == 'ambos')
        .map((spell) => {
            let magicSpell = {
                ...spell,
            };
            if (magicSpell.origem == 'ambos' && change != 0) {
                magicSpell = { ...magicSpell, id: magicSpell.id + change };
            }
            magicSpell = { ...magicSpell, origem: origem };
            return magicSpell;
        });
}

/**
 * @param magias
 * @returns Spells sorted by the appropriate level
 */
export function sortSpellsByNivel(magias: Spell[]) {
    return magias.sort((a, b) => {
        let a_level: any =
            a.origem == 'divina' ? a.nivel_divina : a.nivel_arcana;
        let b_level: any =
            b.origem == 'divina' ? b.nivel_divina : b.nivel_arcana;
        return a_level > b_level ? 1 : b_level > a_level ? -1 : 0;
    });
}

/**
 * @param magias
 * @returns Spells sorted by name
 */
export function sortSpellsByNome(magias: Spell[]) {
    return magias.sort((a, b) =>
        a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0
    );
}

/**
 * @param magia
 * @returns The proper level wheter the spell is "divina" or "arcana"
 */
export function getSpellNivel(magia: Spell) {
    return magia.origem == 'divina' ? magia.nivel_divina : magia.nivel_arcana;
}

/**
 * @param slug
 * @returns Font awesome component based on spell's "descritor"
 */
export function getDescritorIcon(slug: string) {
    const icons: any = {
        cura: 'fa-solid fa-heart',
        frio: 'fa-solid fa-snowflake',
        encantamento: 'fa-solid fa-face-grin-hearts',
        // ERRO \/
        encantamentos: 'fa-solid fa-face-grin-hearts',
        //
        adivinhacao: 'fa-solid fa-magnifying-glass',
        // ERRO \/
        advinhacao: 'fa-solid fa-magnifying-glass',
        //
        abjuracao: 'fa-solid fa-shield-halved',
        invocacao: 'fa-solid fa-dragon',
        necromancia: 'fa-solid fa-skull',
        terra: 'fa-solid fa-mountain-sun',
        ilusao: 'fa-solid fa-wand-magic-sparkles',
        agua: 'fa-solid fa-droplet',
        sonico: 'fa-solid fa-volume-high',
        gelo: 'fa-solid fa-icicles',
        transmutacao: 'fa-solid fa-star-of-david',
        ar: 'fa-solid fa-wind',
        eletricidade: 'fa-solid fa-bolt',
        fogo: 'fa-solid fa-fire-flame-curved',
        medo: 'fa-solid fa-face-flushed',
        escuridao: 'fa-solid fa-eye-slash',
        caos: 'fa-solid fa-dice',
        ordem: 'fa-solid fa-scale-balanced',
        tempo: 'fa-solid fa-clock',
        luz: 'fa-regular fa-lightbulb',
        essencia: 'fa-solid fa-hand-sparkles',
        bem: 'fa-solid fa-handshake-simple',
        mal: 'fa-solid fa-hand-middle-finger',
        acido: 'fa-solid fa-hand-holding-droplet',
    };
    let descritorIcon = icons[slug];
    descritorIcon =
        descritorIcon == undefined
            ? 'fa-solid fa-bug text-red-500'
            : descritorIcon;
    return <i className={descritorIcon}></i>;
}
/**
 * @param slug
 * @returns Fine name, for example: abjuracao => Abjuração
 */
export function getDescritorName(slug: string) {
    const fineNames: any = {
        cura: 'Cura',
        frio: 'Frio',
        encantamento: 'Encantamento',
        // ERRO \/
        encantamentos: 'Encantamento',
        //
        adivinhacao: 'Adivinhação',
        // ERRO \/
        advinhacao: 'Adivinhação',
        //
        abjuracao: 'Abjuração',
        invocacao: 'Invocação',
        necromancia: 'Necromância',
        terra: 'Terra',
        ilusao: 'Ilusão',
        agua: 'Água',
        sonico: 'Sônico',
        gelo: 'Gelo',
        transmutacao: 'Transmutação',
        ar: 'Ar',
        eletricidade: 'Eletricidade',
        fogo: 'Fogo',
        medo: 'Medo',
        escuridao: 'Escuridão',
        caos: 'Caos',
        ordem: 'Ordem',
        tempo: 'Tempo',
        luz: 'Luz',
        essencia: 'Essência',
        bem: 'Bem',
        mal: 'Mal',
        acido: 'Ácido',
    };
    return fineNames[slug];
}

/**
 *
 * @param magias
 * @returns Spells sorted by nivel and then by nome per nivel
 */
function sortSpellsFinal(magias: Spell[]) {
    let allSpells: Spell[] = [];
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((level) => {
        let spellList = magias.filter((magia) => getSpellNivel(magia) == level);
        sortSpellsByNome(spellList);
        allSpells = [...allSpells, ...spellList];
    });
    return allSpells;
}

// String
/**
 *
 * @param str
 * @returns 'sOmE StriNg' ==> 'Some string'
 */
export function strCapitalize(str: string) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

//  Normalize
/**
 * @param str
 * @returns normalize string, for example: Abjuração => abjuracao
 */
export function normalize(str: string) {
    return str
        .normalize('NFD')
        .replace(/[^a-zA-Z\s]/g, '')
        .toLowerCase();
}

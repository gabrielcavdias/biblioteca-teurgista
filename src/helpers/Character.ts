import { Spellbook } from './Spellbook';
import { SpellSlot } from './types';

export class Character {
    public static lastID = 0;

    public name: string;
    // Fazer como protected
    public spells: SpellSlot[];
    public id: number;

    constructor(name: string, spells: SpellSlot[]) {
        this.id = ++Character.lastID;
        this.name = name;
        this.spells = spells;
    }

    public getAllCharacterSpells() {
        return Spellbook.getAllSpells().filter((magia) =>
            this.spells.map((charSpell) => charSpell.spellId).includes(magia.id)
        );
    }

    public memorizeSpell(id: number) {
        let targetSpell = this.spells.find((spell) => spell.spellId == id);
        if (targetSpell) {
            if (!targetSpell.isMemorized) {
                targetSpell.isMemorized = true;
            } else {
                targetSpell.memorizedCount += 1;
            }
        }
    }

    // TODO: refactor
    public forgetSpell(id: number) {
        let targetSpell = this.spells.find((spell) => spell.spellId == id);
        // If spell exists and is memorized
        if (targetSpell && targetSpell.isMemorized) {
            if (targetSpell.memorizedCount == 1) {
                targetSpell.memorizedCount = 0;
                targetSpell.isMemorized = false;
            } else {
                targetSpell.memorizedCount -= 1;
            }
        }
    }
}

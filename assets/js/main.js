import { Character } from "./character.js";
import { CharacterView } from "./character-view.js";
import { Wizard } from "./wizard.js";
import { WizardGnome } from "./wizard-gnome.js";
import { Dwarf } from "./dwarf.js";
import { WizardDwarf } from "./wizard-dwarf.js";
import { ElfWizard } from "./elf-wizard.js";
import { DragonWizard } from "./dragon-wizard.js";
import { Shapeshifter } from "./shapeshifter.js";
import { FlameWizard } from "./flame-wizard.js";
import { Golem } from "./golem.js";
import { Fairy } from "./fairy.js";
import { WizardHuman } from "./wizard-human.js";

const zandak = new WizardGnome('Zandak', 10, 5, 4, 8, 'Ar', 5);
const eberk = new Dwarf('Eberk', 10, 7, 5, 5);
const mistwynn = new WizardDwarf('Mistwynn', 10, 5, 5, 8, 'Água', 8);
const ralmevik = new WizardHuman('Ralmevik', 6, 6, 10, 'Água', 10);
const linadan = new ElfWizard('Linadan', 7, 6, 5, 8, 'Terra', 7);
const tazzel = new DragonWizard('Tazzel', 10, 6, 9, 5, 'Fogo', 7);
const roland = new Shapeshifter('Roland', 10, 9, 6, 10);
const cassandra = new FlameWizard('Cassandra', 9, 10, 5, 7, 'Fogo', 8);
const wozard = new Golem('Wozar', 10, 4, 10, 4);
const crystal = new Fairy('Crystal', 9, 8, 10, 5, 3);

const allCharacters = [zandak, eberk, mistwynn, ralmevik, linadan, tazzel, roland, cassandra, wozard, crystal];

new CharacterView(allCharacters).render();

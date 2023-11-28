import { Character } from "./character.js";
import { Wizard } from "./wizard.js";

export class WizardDwarf extends Character{
    charisma;
    wizardSide;
    img = 'assets/img/card-wizard-dwarf.png';
    static type = 'Maga Anão';

    constructor(name, charisma, strength, resistance, intelligence, magicalElement, magicalLevel){
        super(name);
        this.charisma = charisma;
        this.wizardSide = new Wizard(name, strength, resistance, intelligence, magicalElement, magicalLevel);
    }
}
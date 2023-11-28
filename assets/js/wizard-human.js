import { Character } from "./character.js";
import { Wizard } from "./wizard.js";

export class WizardHuman extends Character{
    wizardSide;
    img = 'assets/img/card-sorcerer-human.png';
    static type = 'Feiticeiro Humano';

    constructor(name, strength, resistance, intelligence, magicalElement, magicalLevel){
        super(name);
        this.wizardSide = new Wizard(name, strength, resistance, intelligence, magicalElement, magicalLevel);
    }
}
import { Character } from "./character.js";
import { Wizard } from "./wizard.js";

export class ElfWizard extends Character{
    immunity;
    wizardSide;
    img = 'assets/img/card-sorcerer-elf-man.png';
    static type = 'Elfo Mago';

    constructor(name, immunity, strength, resistance, intelligence, magicalElement, magicalLevel){
        super(name);
        this.immunity = immunity;
        this.wizardSide = new Wizard(name, strength, resistance, intelligence, magicalElement, magicalLevel);
    }

}
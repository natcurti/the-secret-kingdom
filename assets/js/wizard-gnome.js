import { Character } from "./character.js";
import { Wizard } from "./wizard.js";

export class WizardGnome extends Character{
    invention;
    wizardSide;
    img = 'assets/img/card-wizard-gnome.png';
    static type = 'Mago Gnomo';

    constructor(name, invention, strength, resistance, intelligence, magicalElement, magicalLevel){
        super(name);
        this.invention = invention;
        this.wizardSide = new Wizard(name, strength, resistance, intelligence, magicalElement, magicalLevel);
    }
}
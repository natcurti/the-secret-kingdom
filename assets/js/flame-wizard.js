import { Character } from "./character.js";
import { Wizard } from "./wizard.js";

export class FlameWizard extends Character{
    firePower;
    wizardSide;
    img = 'assets/img/card-mage-flame-woman.png';
    static type = 'Maga do Fogo';

    constructor(name, firePower, strength, resistance, intelligence, magicalElement, magicalLevel){
        super(name);
        this.firePower = firePower;
        this.wizardSide = new Wizard(name, strength, resistance, intelligence, magicalElement, magicalLevel);
    }

}
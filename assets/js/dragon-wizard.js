import { Character } from "./character.js";
import { Wizard } from "./wizard.js";

export class DragonWizard extends Character{
    speed;
    wizardSide;
    img = 'assets/img/card-sorcerer-dragon.png';
    static type = 'Dragão Feiticeiro';

    constructor(name, speed, strength, resistance, intelligence, magicalElement, magicalLevel){
        super(name);
        this.speed = speed;
        this.wizardSide = new Wizard(name, strength, resistance, intelligence, magicalElement, magicalLevel);
    }
}
import { Character } from "./character.js";

export class Fairy extends Character{
    intelligence;
    protection;
    curiosity;
    strength;
    resistance;
    img = 'assets/img/card-magical-pixie.png';
    static type = 'Fada';

    constructor(name, intelligence, protection, curiosity, strength, resistance){
        super(name);
        this.intelligence = intelligence;
        this.protection = protection;
        this.curiosity = curiosity;
        this.strength = strength;
        this.resistance = resistance;
    }

}    
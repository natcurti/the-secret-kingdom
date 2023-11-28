import { Character } from "./character.js";

export class Golem extends Character{
    immunityToMagic;
    intelligence;
    resistance;
    strength;
    img = 'assets/img/card-golem-stone.png';
    static type = 'Golem de Pedra';

    constructor(name, immunityToMagic, intelligence, resistance, strength){
        super(name);
        this.immunityToMagic = immunityToMagic;
        this.intelligence = intelligence;
        this.resistance = resistance;
        this.strength = strength;
    }
}
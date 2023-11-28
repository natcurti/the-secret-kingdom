import { Character } from "./character.js";

export class Dwarf extends Character{
    charisma;
    strength;
    resistance;
    intelligence;
    img = 'assets/img/card-dwarf.png';
    static type = 'Anão';

    constructor(name, charisma, strength, resistance, intelligence){
        super(name);
        this.charisma = charisma;
        this.strength = strength;
        this.resistance = resistance;
        this.intelligence = intelligence;
    }
}
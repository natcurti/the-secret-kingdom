import { Character } from "./character.js";

export class Wizard extends Character{
    strength;
    resistance;
    intelligence;
    magicalElement;
    magicalLevel;

    constructor(name, strength, resistance, intelligence, magicalElement, magicalLevel){
        super(name);
        this.strength = strength;
        this.resistance = resistance;
        this.intelligence = intelligence;
        this.magicalElement = magicalElement;
        this.magicalLevel = magicalLevel;
    }
}
import { Character } from "./character.js";

export class Shapeshifter extends Character{
    transformation;
    intelligence;
    strength;
    resistance;
    img = 'assets/img/card-shapeshifter-human.png';
    static type = 'Metamorfo';
    
    constructor(name, transformation, intelligence, strength, resistance){
        super(name);
        this.transformation = transformation;
        this.intelligence = intelligence;
        this.strength = strength;
        this.resistance = resistance;
    }
}
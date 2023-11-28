export class Character{
    name;
    #life;
    #mana;
    #level;

    constructor(name){
        this.name = name;
        this.#life = 100;
        this.#mana = 100;
        this.#level = 1;
    }

    increaseLevel(){
        this.level += 1;
    }

    decreaseLevel(){
        this.level -= 1;
    }

    get level(){
        return this.#level;
    }

    set level(newLevel){
        if(newLevel >= 1 && newLevel <= 5){
            this.#level = newLevel;
        }
    }

    decreaseLife(){
        this.life -= 20;     
    }

    get life(){
        return this.#life;
    }

    set life(newLife){
        if(newLife >= 0){
            this.#life = newLife;
        }
    }

    decreaseMana(){
        this.mana -= 20;
    }

    get mana(){
        return this.#mana;
    }

    set mana(newMana){
        if(newMana >= 0){
            this.#mana = newMana;
        }
    }

    checkWinner(character1, character2){
        const character1HasWizardSide = character1.hasOwnProperty('wizardSide');
        const character2HasWizardSide = character2.hasOwnProperty('wizardSide');
        let statsCharacter1;
        let statsCharacter2;

        if(character1HasWizardSide && character2HasWizardSide){
            statsCharacter1 = character1.wizardSide.strength + character1.wizardSide.resistance + character1.wizardSide.intelligence;
            statsCharacter2 = character2.wizardSide.strength + character2.wizardSide.resistance + character2.wizardSide.intelligence;
        }

        if(character1HasWizardSide && !character2HasWizardSide){
            statsCharacter1 = character1.wizardSide.strength + character1.wizardSide.resistance + character1.wizardSide.intelligence;
            statsCharacter2 = character2.strength + character2.resistance + character2.intelligence;
        }

        if(!character1HasWizardSide && character2HasWizardSide){
            statsCharacter1 = character1.strength + character1.resistance + character1.intelligence;
            statsCharacter2 = character2.wizardSide.strength + character2.wizardSide.resistance + character2.wizardSide.intelligence;
        }

        if(!character1HasWizardSide && !character2HasWizardSide){
            statsCharacter1 = character1.strength + character1.resistance + character1.intelligence;
            statsCharacter2 = character2.strength + character2.resistance + character2.intelligence;
        }

        if(character1.level === character2.level){
            if(statsCharacter1 > statsCharacter2){
                return character1;
            } else if (statsCharacter2 > statsCharacter1){
                return character2;
            } else if (statsCharacter1 === statsCharacter2){
                return 'Empate';
            }
        } else if (character1.level !== character2.level){
            if(character1.level > character2.level){
                return character1;
            } else if (character2.level > character1.level)
                return character2;
        }
       
    }
}

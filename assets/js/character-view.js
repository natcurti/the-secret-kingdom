import { Character } from "./character.js";

export class CharacterView{
    characters;
    containerCards;
    selectedCharacters;

    constructor(characters){
        this.characters = characters;
        this.containerCards = document.getElementById('containerCards');
        this.selectedCharacters = [];
    }

    render(){
        this.containerCards.innerHTML = '';
        this.characters.forEach(element => {   
            const newCharacter = this.showCharacter(element);
            this.containerCards.appendChild(newCharacter);
        })
    }

    showCharacter(character){
        const newCharacter = document.createElement('DIV');
        newCharacter.classList.add('main__container__card');
        newCharacter.innerHTML = `
            <div class="main__container__flip">
                <div class="main__container__front">
                    <p class="main__card-level">${character.level}</p>
                    <p class="main__card-title">${character.name}</p>
                    <div class="main__card-stats">
                        <p class="main__card-type">${character.constructor.type}</p>
                        <div class="main__card__life-and-mana">
                            <p class="main__card-life">Vida: ${character.life}</p>
                            <p class="main__card-mana">Mana: ${character.mana}</p>
                        </div>
                    </div> 
                    <img src="${character.img}" class="main__card-image">
                </div>
                <div class="main__container__back">
                    <img src="assets/img/card-back.png" class="main__card-back-img">
                </div>
            </div>
        `;
        newCharacter.addEventListener('click', (e) => {
            const card = e.target.parentNode.parentNode.parentNode;          
            if(this.selectedCharacters.length < 2 && !card.classList.contains('selected')){
                card.classList.add('selected');
                this.addSelection(character);
            } else if(this.selectedCharacters.length < 2 && card.classList.contains('selected')){
                card.classList.remove('selected');
                this.removeSelection(character);
            } 

            if(this.selectedCharacters.length === 2) {
                let winner = character.checkWinner(this.selectedCharacters[0], this.selectedCharacters[1]);
                this.showWinner(winner);
            }
        });

        this.removeCharactersWithZeroLife();

        return newCharacter;
    }

    addSelection(character){
        this.selectedCharacters.push(character);
    }

    removeSelection(character){
        const index = this.selectedCharacters.indexOf(character);
        this.selectedCharacters.splice(index, 1);
    }

    removeCharactersWithZeroLife(){
        const allCharacters = document.querySelectorAll('.main__card-life');
        allCharacters.forEach(element => {
            if(element.innerHTML === "Vida: 0"){
                element.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
            }
        })
    }

    showWinner(winner){
        const btnDuel = document.getElementById('btnDuel');
        const modalContainer = document.getElementById('modalContainer');
        const modalText = document.getElementById('modalText');
        const btnContinue = document.getElementById('btnContinue');
        const btnFinish = document.getElementById('btnFinish'); 
        let message; 
        
        this.selectedCharacters.forEach(element => {
            element.decreaseLife();
            element.decreaseMana();
        })

        if(winner === 'Empate'){
            message = winner;
        } else if(winner.level === 4){
            message = `Fim do Jogo! ${winner.name} é o vencedor final`;
            winner.increaseLevel();
            btnContinue.style.display = 'none';
        } else if (winner.level < 4){
            message = `${winner.name} é o vencedor`;
            winner.increaseLevel();
        }
        
        const showModal = () => {
            modalContainer.style.display = 'flex'; 
            modalText.innerText = message;
        }

        const continueGame = () => {
            modalContainer.style.display = 'none';
            this.selectedCharacters = [];
            this.render();
        }

        btnDuel.addEventListener('click', showModal);
        btnContinue.addEventListener('click', continueGame);
        btnFinish.addEventListener('click', () => window.location.reload()); 
    }
}
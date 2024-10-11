const board = document.querySelector('.board')


function flipper(){

const cards = document.querySelectorAll('.card');

function flipflop(){
    this.classList.toggle('flip')

}
cards.forEach(card => card.addEventListener('click', flipflop))

}




function formArray(cards){
    function shuffle(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
       return array; 
    }
    
    let arrayOfCard = [];   
   
 
   
    while (arrayOfCard.length < 20/2){
        let num  = Math.floor(Math.random() * 10 + 1);
        if(!arrayOfCard.includes(num)){
            arrayOfCard.push(num)
        }
     }
    
    arrayOfCard = arrayOfCard.concat(arrayOfCard)
     return shuffle(arrayOfCard);
    
   }







function placeCard(cards){
//должна принимать аргумент количество карт и в произвольном порядке мешать картинки
// работать для 6, 12, 20карт

    const pictures =  formArray(cards); 

    for (let index = 0; index < cards; index++) {
        let cardHtml =`<div class="card">
        <img class="cover" src="img/rub1.png" alt="cover">
        <img class='face' src="img/${pictures[index]}.svg" alt="face">
        </div>`

        board.innerHTML += cardHtml
        
    }

    flipper()
}



function game(){
    // const playername = prompt('What is your name? ')
    let score  = 0;
    let level = 1
}


placeCard(20)
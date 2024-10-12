const board = document.querySelector('.board')

function drawScore(score){
    document.getElementById("scores").innerHTML = `Score: ${score}`;

    
}


function chechcards(level){
  
    const flip = document.querySelectorAll('.flip')
    if(flip.length===2){
        let img1 = flip[0].children[1].src;
        let img2 = flip[1].children[1].src;
         if(img1 ===img2){
            

            setTimeout(() => {
                flip[0].remove()
                flip[1].remove()
                if(document.querySelectorAll('.card').length ===0){
                       level+=1
                       game(score, level)
                }

            }, 1000);
         
    

           score+=100;
           drawScore(score)
       }else{
     score -=10;
     drawScore(score)
    }
  

    }

}


function flipper(level){

const cards = document.querySelectorAll('.card');


function flipflop(){
  


    const flip = document.querySelectorAll('.flip')
    if(flip.length<2){

        this.classList.toggle('flip')
        chechcards(level)
     
  

    }else{
        cards.forEach(card => {
             card.classList.remove('flip')
             this.classList.add('flip')
            })
    }

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
   
 
   
    while (arrayOfCard.length < cards/2){
        let num  = Math.floor(Math.random() * 10 + 1);
        if(!arrayOfCard.includes(num)){
            arrayOfCard.push(num)
        }
     }
    
    arrayOfCard = arrayOfCard.concat(arrayOfCard)
     return shuffle(arrayOfCard);
    
   }




function placeCard(cards){

    const pictures =  formArray(cards); 

    for (let index = 0; index < cards; index++) {
        let cardHtml =`<div class="card">
        <img class="cover" src="img/rub1.png" alt="cover">
        <img class='face' src="img/${pictures[index]}.svg" alt="face">
        </div>`

        board.innerHTML += cardHtml
        
    }

    //  flipper()
}



function drawResults(level){
    document.getElementById("level").innerHTML = `Level: ${level}`;
}


function game(score, level){
   
    // const playername = prompt('What is your name? ')
    const playername = 'Jenna'
    if(level===1){
        placeCard(6)
      
        flipper( level)
        drawResults(level)
    
    }else if(level ===2){
        placeCard(12)
        flipper(level)
        drawResults(level)
    }else if(level ===3){
        placeCard(20);
        flipper(level)
        drawResults(level)
    }else{

        board.innerHTML += 
        `<div class="final-game"> Game over ${playername}! Your final score is ${score}!</div>`


    }

}

let score = 0
game(score, 1)



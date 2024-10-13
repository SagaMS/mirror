function mainloop(){


    function displayname(playername){
    const getname =  document.getElementById('player-name');
    
     getname.innerHTML += `Name: ${playername}`
        
    }
    

let playername = prompt('What is your name?')

    if(playername === null || playername === ''){
        playername = 'Player';
      ;
    }
    displayname(playername);
    // const a= new Audio('audio/audio.mp3')
    // let v = a.play()
    // if(v=== undefined){
    // a.play()
    // a.loop = true;
    // a.volume = 0.35
    // }



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
         
    
           count +=1;
           score+=100;
        drawScore(score)
 
       }else{



     count+=1;
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

        // this.classList.toggle('flip')
        this.classList.add('flip')
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

}



function drawResults(level){
    document.getElementById("level").innerHTML = `Level: ${level}`;
}


function game(score, level){
   

    if(level===1){

        placeCard(6)
        flipper( level)
        drawResults(level)
    
    }else if(level ===2){

        placeCard(8)
        flipper(level)
        drawResults(level)
    }else if(level ===3){

        placeCard(12)
        flipper(level)
        drawResults(level)
    }else{
     
        const play = {
            Pname: playername,
            score:score,
            count:count
          };
          
        const  uniqueID  = Math.floor(Math. random()*10000)
  
        if(Object.entries(localStorage).length<10){
            localStorage.setItem(uniqueID, JSON.stringify(play));
        }else{
           
            localStorage.removeItem(Object.entries(localStorage)[0][0]); 
            localStorage.setItem(uniqueID, JSON.stringify(play));
        }
       


        board.innerHTML += 
        `<div class="final-game"> Game over ${playername}! Your final score is ${score}! It tooks ${count} moves</div>`


    }

}




    let count = 0;
    let score = 0;
    game(score, 1, count)
 }



 window.addEventListener("load", function () {
    mainloop()
  });


// localStorage.clear()

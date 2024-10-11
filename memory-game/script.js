const cards = document.querySelectorAll('.card');


function flipflop(){
    this.classList.toggle('flip')
    
}

cards.forEach(card => card.addEventListener('click', flipflop))
const dataPets =  [
    {
      "name": "Jennifer",
     "img": "img/pets-jennifer.png",
 
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "img/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "img/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "img/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "img/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "img/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "img/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "img/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]




let dataPets8 = []

for (let i= 1; i <= 6; i++) {
  for (let index = 0; index < dataPets.length; index++) {
    
    dataPets8.push(dataPets[index])
  }
}



const page6 =  shuffleArray(dataPets8, 8)
const page8 =  shuffleArray(dataPets8, 6)
const page16 =  shuffleArray(dataPets8, 3)


function changePet(object, index){
    const petName = document.getElementsByClassName('pet-name')[index]
    const petPhoto = document.getElementsByClassName('pet-photo')[index].getElementsByTagName('img')[0];


    petName.textContent  = JSON.parse(JSON.stringify(object)).name
    petPhoto.src = JSON.parse(JSON.stringify(object)).img


}


// changePet(dataPets8[2], 0)

//8  6 pages
//6  8 pages
//3  16 pages



function changePage(number0fpage){
  
   

    function drawpage(count, number0fpage){
        let pages = null;
       if(number0fpage === 6){
        pages = page6
       }else if(number0fpage === 8){
        pages = page8
       }else{
        pages = page16
       }

       let page =pages[count-1]
        for (let i = 0; i < page.length; i++) {

            changePet(page[i], i)
        }

       return pages[count-1]
     
    }

  


    function changelink(count, num){
        if(count===1){
            leftleftbutton.classList.add('disabled-block')
            leftleftbutton.classList.remove('active-block')

            leftbutton.classList.add('disabled-block')
            leftbutton.classList.remove('active-block')

            leftleftlink.classList.add('disabled-link')
            leftleftlink.classList.remove('active-link')

            leftlink.classList.add('disabled-link')
            leftlink.classList.remove('active-link')


        }
        if(count>1){
            leftleftbutton.classList.remove('disabled-block')
            leftleftbutton.classList.add('active-block')

            leftbutton.classList.remove('disabled-block')
            leftbutton.classList.add('active-block')


            leftleftlink.classList.remove('disabled-link')
            leftleftlink.classList.add('active-link')

            leftlink.classList.remove('disabled-link')
            leftlink.classList.add('active-link')


            
            rightrightlink.classList.remove('disabled-link')
            rightrightlink.classList.add('active-link')

            rightlink.classList.remove('disabled-link')
            rightlink.classList.add('active-link')


        }

        if(count<num){
            rightrightbutton.classList.remove('disabled-block')
            rightrightbutton.classList.add('active-block')

            rightbutton.classList.remove('disabled-block')
            rightbutton.classList.add('active-block') 
        }

        if(count === num){

            rightrightbutton.classList.add('disabled-block')
            rightrightbutton.classList.remove('active-block')

            rightbutton.classList.add('disabled-block')
            rightbutton.classList.remove('active-block')

            rightrightlink.classList.add('disabled-link')
            rightrightlink.classList.remove('active-link')

            rightlink.classList.add('disabled-link')
            rightlink.classList.remove('active-link')

            
        }


    }


    let number =  document.getElementsByClassName('page-number')[0]



    let leftleftbutton =  document.getElementsByClassName('left-left-button')[0]
    let leftbutton =  document.getElementsByClassName('left-button')[0]


    let leftleftlink = document.getElementsByClassName('left-left-link')[0]
    let leftlink = document.getElementsByClassName('left-link')[0]


    let rightbutton =  document.getElementsByClassName('right-button')[0]
    let rightrightbutton =  document.getElementsByClassName('right-right-button')[0]
    
    let rightlink=  document.getElementsByClassName('right-link')[0]
    let rightrightlink =  document.getElementsByClassName('right-right-link')[0]


    let count = 1
    drawpage(count, number0fpage)


    rightbutton.addEventListener('click', ()=>{
        count++
        if(count>number0fpage){
            count = number0fpage
        }
        number.innerHTML = count
        drawpage(count, number0fpage)
        changelink(count, number0fpage)
     
     
    })

    leftbutton.addEventListener('click', ()=>{
        count--;
        if(count<1){
            count = 1
        }
        number.innerHTML = count
 
        changelink(count, number0fpage)
        drawpage(count, number0fpage)
     
    
    })

    leftleftbutton.addEventListener('click', ()=>{
        count = 1;

        changelink(count, number0fpage)
        drawpage(count, number0fpage)
        number.innerHTML = count
    })

    rightrightbutton.addEventListener('click', ()=>{
        count = number0fpage;

        changelink(count, number0fpage)
        drawpage(count, number0fpage)
        number.innerHTML = count
    })



  
}

function shuffleArray(a, s){

    


    const shuffle = (array) => {
           let m = array.length, t, i;
       
           // Пока есть элементы для перемешивания
           while (m) {
       
           // Взять оставшийся элемент
           i = Math.floor(Math.random() * m--);
       
           // И поменять его местами с текущим элементом
           t = array[m];
           array[m] = array[i];
           array[i] = t;
           }
       
           return array;
       }
   
   let size = s //размер подмассива
   let subarray = []; //массив в который будет выведен результат.
   
   for (let i = 0; i <Math.ceil(a.length/size); i++){
       subarray[i] = shuffle(a.slice((i*size), (i*size) + size));
       
   }
   
   return subarray
   
   
   }
   








function mainFunc(){

    let c = document.getElementsByClassName('friends-inner-block')[0].style
    let number =  document.getElementsByClassName('page-number')[0]




      
        if (window.innerWidth>=1280) {



        changePage(6)
  

   
        } else if (window.innerWidth <1280 && window.innerWidth>=768) {
 
 
         changePage(8)
        } else {
     
     
        
         number.innerHTML = 1
         changePage(16)
        }
}


window.onresize =  mainFunc;
mainFunc();




















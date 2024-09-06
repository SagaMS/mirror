const dP =  [
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

let popup = document.getElementsByClassName('popup')[0]

let pet = document.getElementsByClassName('pet')

let overlay = document.getElementsByClassName('overlay')[0]
let html = document.getElementsByTagName('html')[0]

function showAnimal(arr){
    let index  = null
    for (let i= 0; i < arr.length; i++) {
        if(arr[i] === true){
            index = i
        }  
    }
    let petName = pet[index].getElementsByClassName('animal-name')[0].textContent
    return petName

}


/*
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
*/

function makePopup(name){
    for (let index = 0; index < dP.length; index++) {
        const element = dP[index].name;
        if(element === name){
            const petName =  dP[index].name
            const petImage = dP[index].img
            const petType = dP[index].type
            const petBreed = dP[index].breed
            const petDescription = dP[index].description
            const petAge =  dP[index].age
            const petInoculations = dP[index].inoculations
            const petDiseases =  dP[index].diseases
            const petParasites = dP[index].parasites

            let popName =  document.getElementsByClassName('popup-name')[0]
            popName.innerHTML = petName

            let popImage = document.getElementsByClassName('popupImage')[0]
            popImage.src = petImage

            let popTypeBreed = document.getElementsByClassName('type-breed')[0]
            popTypeBreed.innerHTML = `${petType} - ${petBreed}`

            let popDescription = document.getElementsByClassName('description')[0]
            popDescription.innerHTML = petDescription

            let popAge = document.getElementsByClassName('age')[0]
            popAge.innerHTML = `Age: ${petAge}`
        }


        // const pet1 = document.getElementsByClassName('animal-name')[0]
        // pet1.textContent  = JSON.parse(JSON.stringify(dataPets[arr[0]])).name

    
 
        // popDescription.innerHTML = petDescription
        
    }
}


document.addEventListener('click', (e)=>{
    const withinBoundaries = e.composedPath().includes(popup);
    const arrayPets = []

    for(let i = 0; i < pet.length; i++){

        const petarea = e.composedPath().includes(pet[i])
        arrayPets.push(petarea)
    }    

    if(arrayPets.includes(true)){
     let nameoftargetanimal = showAnimal(arrayPets)   
     makePopup(nameoftargetanimal)   
    
    }


  if(arrayPets.includes(true) && popup.classList.contains('pop-inactive')){
            popup.classList.remove('pop-inactive')
            popup.classList.add('pop-active')
            overlay.classList.add('overlay-active')
            overlay.classList.remove('overlay-inactive')
            html.style.overflow ='hidden'
        }else if((!withinBoundaries && popup.classList.contains('pop-active')) 
            || e.target.classList.contains('popup-close-block')
             ){

         
                popup.classList.remove('pop-active')
                popup.classList.add('pop-inactive')
                overlay.classList.remove('overlay-active')
                overlay.classList.add('overlay-inactive')
                html.style.overflow = 'visible';
                 
            }
             
     


        })




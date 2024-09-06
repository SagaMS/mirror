// window.onbeforeunload = function() { window.scrollTo(0, 0); };



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


const shuffle = (array) => {
  let m = array.length, t, i;


  while (m) {


    i = Math.floor(Math.random() * m--);


    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  array.push(array[0])

  const arr1 = array.slice(0,3)
  const arr2 = array.slice(3,6)
  const arr3 = array.slice(-3)
  if(checkarr(arr1) && checkarr(arr2) && checkarr(arr3)){

    return [arr1, arr2, arr3];

  }else{
  return shuffle(array)
}

}
function checkarr(arr){
  if(arr[0] !== arr[1]  && arr[0] !== arr[2] && arr[1] !== arr[2]  ){
      return true
  }
  return false
}



const arrowLeft = document.getElementsByClassName('arrow-left')[0]
const arrowRight = document.getElementsByClassName('arrow-right')[0]
const arr = [0, 1, 2, 3, 4, 5, 6, 7]
let firstArray = shuffle(arr)



let count = 0;



const drawpage =(arr) =>{
  const pet1 = document.getElementsByClassName('animal-name')[0]
  const pet2 = document.getElementsByClassName('animal-name')[1]
  const pet3 = document.getElementsByClassName('animal-name')[2]
  const pet1Photo = document.getElementsByClassName('pet-photo')[0]
  const pet2Photo = document.getElementsByClassName('pet-photo')[1]
  const pet3Photo = document.getElementsByClassName('pet-photo')[2]


  const p1 = document.getElementsByClassName('pet')[0]
  const p2 = document.getElementsByClassName('pet')[1]
  const p3 = document.getElementsByClassName('pet')[2]

/*Этот блок добавит какую никакую анимацию*/
  // p1.style.opacity ='0'
  // p2.style.opacity ='0'
  // p3.style.opacity ='0'

  // p1.classList.remove('animin')
  // p2.classList.remove('animin')
  // p3.classList.remove('animin')

  // setTimeout(() => {
  //   p1.classList.add('animin')
  //   p2.classList.add('animin')
  //   p3.classList.add('animin')
  //   p1.style.opacity ='1'
  //   p2.style.opacity ='1'
  //   p3.style.opacity ='1'
  
  // }, 500)

/*Этот блок добавит какую никакую анимацию*/

  pet1.textContent  = JSON.parse(JSON.stringify(dataPets[arr[0]])).name
  pet2.textContent  = JSON.parse(JSON.stringify(dataPets[arr[1]])).name
  pet3.textContent  = JSON.parse(JSON.stringify(dataPets[arr[2]])).name
  

  pet1Photo.src = JSON.parse(JSON.stringify(dataPets[arr[0]])).img
  pet2Photo.src = JSON.parse(JSON.stringify(dataPets[arr[1]])).img
  pet3Photo.src = JSON.parse(JSON.stringify(dataPets[arr[2]])).img


}



arrowLeft.addEventListener('click', function(){
  
  count++
  if(count===1){
  drawpage(firstArray[1])
}else if(count ===-1){
  drawpage(firstArray[2])
}else if(count ===0){
  drawpage(firstArray[0])
}else{
  firstArray = shuffle(arr)
  // alert(firstArray)
  count ==0
  drawpage(firstArray[0])
  
}


})

arrowRight.addEventListener('click', function(){
  count--
  if(count===1){
    drawpage(firstArray[1])
  }else if(count ===-1){
    drawpage(firstArray[2])
  }else if(count ===0){
    drawpage(firstArray[0])
  }else{
    firstArray = shuffle(arr)
    // alert(firstArray)
    count ==0
    drawpage(firstArray[0])

  }
  

})






window.addEventListener('load', () => {
      
      drawpage(firstArray[0])


    });    



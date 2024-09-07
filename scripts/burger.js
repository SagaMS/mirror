const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menuLinks = document.getElementsByClassName('nav-links')[0]
const navigation = document.getElementsByClassName('navigation')[0]
const htmlburger = document.getElementsByTagName('html')[0]
const aboutLinks = document.getElementsByClassName('nav-links')[0]
const overflowNav = document.getElementsByClassName('overlay')[0]
 
console.log(overflowNav)

document.addEventListener('click', (e)=>{

    const aboutLinksArea = e.composedPath().includes(aboutLinks);
    const toggleButtonArea =e.composedPath().includes(toggleButton);
    const navigationArea =e.composedPath().includes(navigation);

    if(toggleButtonArea){
        navigation.classList.toggle('inactive');
        navigation.classList.toggle('active');
        overflowNav.classList.toggle('overlay-active')
        overflowNav.classList.toggle('overlay-inactive')
    }
      

    if(navigation.classList.contains('active')){
            htmlburger.style.overflow = "hidden"

    
        }
    if(navigation.classList.contains('inactive')){
        htmlburger.style.overflow = "visible"
      
        }

    if(aboutLinksArea && navigation.classList.contains('active')){
        navigation.classList.toggle('inactive');
        navigation.classList.toggle('active');
        overflowNav.classList.toggle('overlay-active')
        overflowNav.classList.toggle('overlay-inactive')

        htmlburger.style.overflow = "visible"
    }
     

    if(!navigationArea && navigation.classList.contains('active')){
        navigation.classList.add('inactive');
        navigation.classList.remove('active');
        htmlburger.style.overflow = "visible"

        overflowNav.classList.remove('overlay-active')
        overflowNav.classList.add('overlay-inactive')

    }
 

})



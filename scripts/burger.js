const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menuLinks = document.getElementsByClassName('nav-links')[0]
const navigation = document.getElementsByClassName('navigation')[0]

toggleButton.addEventListener('click', ()=>{

    navigation.classList.toggle('inactive');
    navigation.classList.toggle('active');


})
const drop =document.querySelector('.dropdown');
const icon =document.querySelector('.material-symbols-outlined');
const dropCon =document.querySelector('.dropdown-content');
drop.addEventListener('click',()=>{
    dropCon.classList.toggle('active')
    icon.classList.toggle('active')
})
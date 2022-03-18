

//toogle menu
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let top_area = document.querySelector('.top_area');

toggle.onclick=function(){
    navigation.classList.toggle('active');
    top_area.classList.toggle('active');
}


// Hover navigation
let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item)=>
        item.classList.remove('hovered'))
        this.classList.add('hovered');
}
list.forEach((item)=>
item.addEventListener('mouseover',activeLink));
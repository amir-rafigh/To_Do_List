const button = document.querySelector('.button');
const input =document.querySelector(".input");
const ul = document.querySelector('.ul_list_ToDoList');
const done = document.querySelector('.done');
const change_theme = document.querySelector(".span-change-theme");
const sidebar = document.querySelector('aside');
const header_main = document.querySelector('.header_main');
const container_main = document.querySelector('.container_main_main');
const li  = document.querySelector('.li_done');
const notification = document.querySelector('.material-symbols-outlined');
const main_main = document.querySelector('.main_main');



window.addEventListener('load' , ()=>{
    for( item of getitemlocal()){
        creatli(item);
    }

})


button.addEventListener('click' , ()=>{
    if(input.value===""){
       window.alert('Please fill out the form first')
    }
    else{
        const value = input.value
        const arraylist = JSON.parse(localStorage.getItem("keylist")) || [];
        arraylist.push(input.value);
        console.log(arraylist)
        localStorage.setItem("keylist" , JSON.stringify(arraylist));
        creatli(value);
        input.value = ""
    }

})

function creatli(value){
    const li = document.createElement('li');
    li.innerHTML = value;
    li.innerHTML+= `<i class="fa-solid fa-trash"></i>`
    li.innerHTML+= `<div class="done"></div>`
    ul.appendChild(li);
    return li
}
function getitemlocal(){
    const item_local = JSON.parse(localStorage.getItem("keylist"));
    return item_local
}

ul.addEventListener('click' , (x)=>{
    if(x.target.nodeName === "I"){
        const li_textname =  x.target.parentElement;
        li_textname.style = "display:none";
        const array = getitemlocal();
        // console.log(array.indexOf(array_name));
        array.splice(array.indexOf(li_textname.innerText) , 1)
        localStorage.setItem("keylist" , JSON.stringify(array));
    }
    if(x.target.nodeName === "DIV"){
        x.target.parentElement.classList.toggle('li_done');
        x.target.classList.toggle('done_close');        
    }

})

change_theme.addEventListener('click' , (x)=>{    
    const chenge_theme = x.target
    chenge_theme.classList.toggle('dark');
   chenge_theme.parentElement.classList.toggle('container-dark');
   sidebar.classList.toggle('change-theme-sidebar');
   sidebar.firstElementChild.classList.toggle('change-theme-top-sidebar');
   document.body.classList.toggle('change-theme-body');
   header_main.classList.toggle('header-main-sidebar');
   container_main.classList.toggle('container_main_sidebar');
   main_main.classList.toggle('main_main_sidebar');
   
   

    ul.addEventListener('click' , (x)=>{
        if(x.target.nodeName==="DIV"){
            console.log(true)
        //    x.target.parentElement.classList.toggle("change-theme-li-done");
        //    x.target.parentElement.style = "color : black !important;"
        }

    })

})


// document.addEventListener("DOMContentLoaded", function() {
//     const date = document.querySelector('.date');
//     console.log(date)
//     const mediumScreen = window.matchMedia("(max-width: 999px)");

//     function handleMediumScreen(x) {     
//             date.placeholder = "Date";
        
//     }

//     mediumScreen.addEventListener("change", handleMediumScreen);
//     handleMediumScreen(mediumScreen);
// });

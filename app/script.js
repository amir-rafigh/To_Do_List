const button = document.querySelector('.button');
const input =document.querySelector(".input");
const ul = document.querySelector('.ul_list_ToDoList');
const done = document.querySelector('.done')


window.addEventListener('load' , ()=>{
    for( item of getitemlocal()){
        creatli(item);
    }

})


button.addEventListener('click' , ()=>{
    const value = input.value
    const arraylist = JSON.parse(localStorage.getItem("keylist")) || [];
    arraylist.push(input.value);
    console.log(arraylist)
    localStorage.setItem("keylist" , JSON.stringify(arraylist));
    creatli(value);
    input.value = ""

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

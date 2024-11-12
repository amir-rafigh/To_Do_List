
const bar_bar = document.querySelector('.fa-bars');
bar_bar.addEventListener('click' , ()=>{
    const aside = document.querySelector(".sidebar");
    aside.classList.toggle('aside_show')
})


const smartmobile = window.matchMedia("(max-width:811px)");
smartmobile.addEventListener('change' , handlesmartmobile);
function handlesmartmobile(){
    const header_main = document.querySelector(".header_main");
    if(smartmobile.matches){
        if(!document.querySelector('.pro_ch_bar')){
            header_main.appendChild(insert());

        }

    }
    else{
        removePCB()
    }

}

function insert(){
    const PCB = document.createElement("div");
    PCB.classList.add("pro_ch_bar");
    const profile = document.querySelector('.profile');
    const change_theme = document.querySelector('.change-theme');
    const bar = document.querySelector(".bar");
    PCB.appendChild(profile)
    PCB.appendChild(change_theme)
    PCB.appendChild(bar)
    return PCB;
    
}



function removePCB(){
    const PCB = document.querySelector('.pro_ch_bar')
    const profile = PCB.querySelector('.profile');
    const change_theme = PCB.querySelector('.change-theme');
    const bar = PCB.querySelector(".bar");
    header_main.appendChild(profile)
    header_main.appendChild(change_theme)
    header_main.appendChild(bar)
    PCB.remove();
    

}

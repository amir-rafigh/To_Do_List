// const smartmobile = window.matchMedia("(max-width:811px)");
// smartmobile.addEventListener("change" , handlesmartmobile);

// function handlesmartmobile(){
//     if(smartmobile.matches){
//         const header_main = document.querySelector('.header_main');
//         header_main.appendChild(insert());
        
//     }
//     else{
//         false
//     }
// }
// handlesmartmobile();

// function insert(){
//     const PCB = document.createElement('div');
//     PCB.classList.add('pro_ch_bar');
//     const profile = document.querySelector('.profile');
//     const change_theme = document.querySelector('.change-theme');
//     const bar = document.querySelector('.bar');
//     PCB.appendChild(profile);
//     PCB.appendChild(change_theme);
//     PCB.appendChild(bar);
//     return PCB;



// }



// const desktop = window.matchMedia("(min-width:811px)");
// desktop.addEventListener('change' , handledesktop);
// function handledesktop(){
//     if(desktop.matches){
//         smartmobile.removeEventListener("change" , handlesmartmobile);
//     }
// }
// handledesktop();

// const smartmobile = window.matchMedia("(max-width:811px)");
// smartmobile.addEventListener("change", handlesmartmobile);

// function handlesmartmobile() {
//     if (smartmobile.matches) {
//         const header_main = document.querySelector('.header_main');
//         header_main.appendChild(insert());
//     }
// }

// handlesmartmobile();

// function insert() {
//     const PCB = document.createElement('div');
//     PCB.classList.add('pro_ch_bar');
//     const profile = document.querySelector('.profile');
//     const change_theme = document.querySelector('.change-theme');
//     const bar = document.querySelector('.bar');
//     PCB.appendChild(profile);
//     PCB.appendChild(change_theme);
//     PCB.appendChild(bar);
//     return PCB;
// }

// const desktop = window.matchMedia("(min-width:812px)");
// desktop.addEventListener("change", handledesktop);

// function handledesktop() {
//     if (desktop.matches) {
//         smartmobile.removeEventListener("change", handlesmartmobile);
//     }
// }

// handledesktop();




// const smartmobile = window.matchMedia("(max-width: 811px)");
// const desktop = window.matchMedia("(min-width: 811px)");

// function handlesmartmobile() {
//     if (smartmobile.matches) {
//         const header_main = document.querySelector('.header_main');
//         if (!document.querySelector('.pro_ch_bar')) { // اطمینان از اینکه عنصر تکراری اضافه نشود
//             header_main.appendChild(insert());
//         }
//     } else {
//         removeInsertedElements();
//     }
// }

// function handledesktop() {
//     if (desktop.matches) {
//         removeInsertedElements(); // عناصر را حذف می‌کند اگر صفحه به حالت دسکتاپ برود
//     }
// }

// function insert() {
//     const PCB = document.createElement('div');
//     PCB.classList.add('pro_ch_bar');
//     const profile = document.querySelector('.profile');
//     const change_theme = document.querySelector('.change-theme');
//     const bar = document.querySelector('.bar');
//     PCB.appendChild(profile);
//     PCB.appendChild(change_theme);
//     PCB.appendChild(bar);
//     return PCB;
// }

// function removeInsertedElements() {
//     const pcbElement = document.querySelector('.pro_ch_bar');
//     if (pcbElement) {
//         pcbElement.remove();
//     }
// }

// // اضافه کردن EventListener برای هر دو حالت
// smartmobile.addEventListener("change", handlesmartmobile);
// desktop.addEventListener("change", handledesktop);

// // اجرای اولیه برای اعمال تنظیمات بر اساس اندازه اولیه صفحه
// handlesmartmobile();
// handledesktop();

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


// const smartmobile = window.matchMedia("(max-width: 811px)");
// const desktop = window.matchMedia("(min-width: 811px)");

// function handlesmartmobile() {
//     if (smartmobile.matches) {
//         const header_main = document.querySelector('.header_main');
//         if (!document.querySelector('.pro_ch_bar')) { // اطمینان از اینکه عنصر تکراری اضافه نشود
//             header_main.appendChild(insert());
//         }
//     } 
//     else {
//         removePCB(); // فقط PCB را حذف می‌کند و عناصر داخلی را برمی‌گرداند
//     }
// }

// // function handledesktop() {
// //     if (desktop.matches) {
// //         removePCB(); // در حالت دسکتاپ فقط PCB حذف شود
// //     }
// // }

// function insert() {
//     const PCB = document.createElement('div');
//     PCB.classList.add('pro_ch_bar');
    
//     const profile = document.querySelector('.profile');
//     const change_theme = document.querySelector('.change-theme');
//     const bar = document.querySelector('.bar');
    
//     // انتقال عناصر به PCB
//     PCB.appendChild(profile);
//     PCB.appendChild(change_theme);
//     PCB.appendChild(bar);

//     return PCB;
// }

// function removePCB() {
//     const pcbElement = document.querySelector('.pro_ch_bar');
//     if (pcbElement) {
//         const header_main = document.querySelector('.header_main'); // بخش اصلی برای بازگرداندن عناصر

//         // بازگرداندن عناصر داخل PCB به مکان اصلی‌شان
//         const profile = pcbElement.querySelector('.profile');
//         const change_theme = pcbElement.querySelector('.change-theme');
//         const bar = pcbElement.querySelector('.bar');

//         header_main.appendChild(profile);
//         header_main.appendChild(change_theme);
//         header_main.appendChild(bar);

//         // حذف خود PCB
//         pcbElement.remove();
//     }
// }

// // اضافه کردن EventListener برای هر دو حالت
// smartmobile.addEventListener("change", handlesmartmobile);
// // desktop.addEventListener("change", handledesktop);

// // اجرای اولیه برای اعمال تنظیمات بر اساس اندازه اولیه صفحه
// handlesmartmobile();
// // handledesktop();












/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
const bar = document.querySelector(".bar");
const bar_bar = bar.querySelector('.fa-bars');
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
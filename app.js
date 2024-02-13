const premium = document.querySelector(".premium-btn");
const basic = document.querySelector(".basic-btn");
const plansCardbasic = document.querySelector(".plansCard-basic");
const plansCardpremium = document.querySelectorAll(".plansCard-premium");
const amountmonth = document.querySelector(".amount-month");
const amountannual =  document.querySelector(".amount-annual");
const membershipPlans = document.querySelector("#membershipPlans");
const sidebar = document.querySelector(".sideBar")
const hamburger = document.querySelector(".hideOnpc")
function change(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            plansCardbasic.style.display="none";
            resolve();                                                      //Becuse we are not returning any data resolve is empty
        }, 0);
    })
}
function show(){
        setTimeout(() => {
            plansCardbasic.style.display="flex";
            amountmonth.innerHTML = 149.99
            amountannual.innerHTML = 79.99
            membershipPlans.style.minHeight= "900px"
            plansCardpremium.forEach((e)=>{ //Queryselectorall method returns a node list. The e is an object which select single nodes
                e.style.display="block";
             })
        }, 50);
}
function change2(){
    return new Promise((resolve, reject) =>{
        plansCardbasic.style.display="none";
        plansCardpremium.forEach((e)=>{ //Queryselectorall method returns a node list. The e is an object which select single nodes
                e.style.display="none";
             })
             resolve();
        }, 0);
}
function show2(){
        setTimeout(() => {
            amountmonth.innerHTML = 99.99;
            amountannual.innerHTML = 49.99;
            membershipPlans.style.minHeight= "850px"
            plansCardbasic.style.display="flex";
        }, 50);
}
premium.addEventListener('click', ()=>{
    basic.style.backgroundColor="white";
    basic.style.color="black";
    premium.style.backgroundColor="#d62332";
    premium.style.color="white";
    change().then(show);
})
basic.addEventListener('click' , ()=>{
    basic.style.backgroundColor="#d62332";
    basic.style.color="white";
    premium.style.backgroundColor="white";
    premium.style.color="black";
    change2().then(show2)
})
function showSidebar(){
    sidebar.style.display="flex";
    hamburger.style.opacity="0"
}
function hideSidebar(){
    sidebar.style.display="none";
    hamburger.style.opacity="1"
}
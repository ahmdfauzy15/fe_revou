// //...........Nav Drop Down..............//
const menuBtn = document.querySelector(".menu-icon");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");

menuBtn.addEventListener("click", () => {
items.classList.toggle("active");
menuBtn.classList.toggle("hide");
searchBtn.classList.toggle("hide");
cancelBtn.classList.toggle("show");
});

cancelBtn.addEventListener("click", () => {
items.classList.remove("active");
menuBtn.classList.remove("hide");
searchBtn.classList.remove("hide");
cancelBtn.classList.remove("show");
form.classList.remove("active");
});

searchBtn.addEventListener("click", () => {
form.classList.add("active");
searchBtn.classList.add("hide");
cancelBtn.classList.add("show");
});

// document.querySelector('.Open').addEventListener('click',()=>{
//     document.querySelector('.nav-link').style.display='flex';
//     document.querySelector('.Open').style.display='none';
//     document.querySelector('.Close').style.display='inline-block';

// });

// document.querySelector('.Close').addEventListener('click',()=>{
//     document.querySelector('.nav-link').style.display='flex';
//     document.querySelector('.Open').style.display='inline-block';
//     document.querySelector('.Close').style.display='none';

// });

//.......inlien..check......
document.querySelector('.inline').addEventListener('click',()=>{
    document.querySelector('.inline input').classList.toggle('red')
})
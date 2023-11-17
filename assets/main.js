// //...........Nav Drop Down..............//

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
// document.addEventListener('DOMContentLoaded', function () {
//     var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

//     dropdownToggles.forEach(function (toggle) {
//         toggle.addEventListener('click', function (e) {
//             e.preventDefault();
//             var dropdownContent = this.nextElementSibling;
//             if (dropdownContent.style.display === 'block') {
//                 dropdownContent.style.display = 'none';
//             } else {
//                 dropdownContent.style.display = 'block';
//             }
//         });
//     });

//     // Close dropdown when clicking outside
//     document.addEventListener('click', function (e) {
//         dropdownToggles.forEach(function (toggle) {
//             var dropdownContent = toggle.nextElementSibling;
//             if (!toggle.contains(e.target) && !dropdownContent.contains(e.target)) {
//                 dropdownContent.style.display = 'none';
//             }
//         });
//     });
// });
// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });

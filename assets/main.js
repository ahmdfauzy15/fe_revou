//...........Nav Drop Down..............//

document.querySelector('.Open').addEventListener('click',()=>{
    document.querySelector('.nav-link').style.display='flex';
    document.querySelector('.Open').style.display='none'
    document.querySelector('.Close').style.display='inline-block'

})

document.querySelector('.Close').addEventListener('click',()=>{
    document.querySelector('.nav-link').style.display='flex';
    document.querySelector('.Open').style.display='inline-block'
    document.querySelector('.Close').style.display='none'

})
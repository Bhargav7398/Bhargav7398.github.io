const links=document.querySelector('.links');
const btn=document.querySelector('.nav-icon i');
const link=document.querySelectorAll('.link');
btn.addEventListener('click',function(){
    if(links.classList.contains('show-nav')){
        links.classList.remove('show-nav');
    }
    else{
        links.classList.add('show-nav');
    }
});
link.forEach(function(item){
    item.addEventListener('click',function(){
    if(links.classList.contains('show-nav')){
        links.classList.remove('show-nav')
    }
   
})
});
const year=document.getElementById('year');
const date=new Date();
year.textContent=date.getFullYear();

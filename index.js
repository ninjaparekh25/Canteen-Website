//showing navbar when click menu on mobile view
const mobile = document.querySelector('.menu-toggle');
const mobilelink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobilelink.classList.toggle("is-active")
    mobilelink.classList.toggle("active")
})

//close menu when click
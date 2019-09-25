function EnableMenu(){
    var lMenu = document.getElementById("enablemenu");
    var ul_menu_r = document.getElementById("menu_right");
    
    if(lMenu.checked){
        ul_menu_r.style.transform = "translateX(100%)";
    }else{
        ul_menu_r.style.transform = "translateX(0%)";
    }
 }
 
 window.addEventListener('load',function(){
    var img = document.getElementById("main_img");   
    var logo = document.getElementById("img_logo");    

    if(screen.width > 990) 
    {
        logo.src = "images/menu/Linux_Mint_logo_submission.svg";
        img.src = "images/mint-wallpaper-1.jpg";
    }
    else {
        img.src = "images/mint-wallpaper-2.jpg";
    }   

    if(screen.width < 420){
        logo.src = "images/menu/linux_mint_logo.svg";
    }

});

 window.addEventListener('resize', function(){

    var img = document.getElementById("main_img");  
    var logo = document.getElementById("img_logo");    

    if(screen.width > 990) 
    {
        logo.src = "images/menu/Linux_Mint_logo_submission.svg";
        img.src = "images/mint-wallpaper-1.jpg";
    }
    else {
        img.src = "images/mint-wallpaper-2.jpg";
    }   

    if(screen.width < 420){
        logo.src = "images/menu/linux_mint_logo.svg";
    }     
   
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = 'block';  
    dots[slideIndex-1].className += ' active';
}

var mybutton = document.getElementById("Btn__subir");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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
        if(screen.width < 420)
        {
            console.log(screen.width)
            logo.src = "images/menu/linux_mint_logo.svg";
            img.src = "images/mint-wallpaper-2.jpg";
        }else{
            logo.src = "images/menu/Linux_Mint_logo_submission.svg";
            img.src = "image/mint-wallpaper-2.jpg";
        }        
    }   

});

 window.addEventListener('resize', function(){
    var ul_menu_r = document.getElementById("menu_right");
    var img = document.getElementById("main_img");  
    var logo = document.getElementById("img_logo");    

    if(screen.width > 990){
        ul_menu_r.style.transform = "translateX(0%)";
        logo.src = "images/Linux_Mint_logo_submission.svg";
        img.src = "images/mint-wallpaper-1.jpg";
    } else {
        if(screen.width < 420)
        {
            console.log(screen.width)
            logo.src = "images/menu/linux_mint_logo.svg";
            img.src = "images/mint-wallpaper-2.jpg";
        }else{
            logo.src = "images/menu/Linux_Mint_logo_submission.svg";
            img.src = "images/mint-wallpaper-2.jpg";
        }        
    }       
   
});


let bot  = document.getElementById("bot")

bot.onclick=function(){

scroll({
    top:0,
    behavior:"smooth"
})

}
//scroll :
onscroll=()=>{
    if(scrollY>=50){
        bot.style.display="block"
    }else{
        bot.style.display="none"
    }  


}
 
//navbar :
    let mood = "open";
    let navbar = document.getElementById("navbar");
    let img2 = document.getElementById("img2");
    
    img2.onclick = function() {
        
        if (mood === "open") {
            setTimeout(() => {
                mood = "close";
                navbar.style.display = "block";
                img2.src = "icons/close.png";
            }, 100);
          
        } else {
            setTimeout(() => {
            mood = "open";
            navbar.style.display = "none";
            img2.src = "icons/menu.png";
            }, 100);
        }
    };
    







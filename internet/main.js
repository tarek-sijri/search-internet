let title=document.querySelector(".title");
let ul=document.querySelector("ul");
let reload=document.querySelector(".reload");

window.onload=function(){
    if(window.navigator.onLine)
        online()
    else
    offline()
}


reload.onclick=function(){
    window.location.reload();
}

window.addEventListener("online",function(){
    online()
})
window.addEventListener("offline",function(){
    offline()
})

function online(){
    title.innerHTML="online now"
    title.style.color="green"
ul.style.display="none"
}
function offline(){
    title.innerHTML="offline now"
    title.style.color="#666"
    ul.style.display="inline"

}
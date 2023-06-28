const container = document.querySelector(".container")
const btn = document.querySelectorAll(".btn")
const imglist =[ "1","2","3","4"]
let index=0;

btn.forEach( (button) => {
button.addEventListener("click",()=>{
    if(button.classList.contains("btn-left")){
        index--;
        if(index<0){
            index=imglist.length-1
        }
        container.style.background=`url(img/${imglist[index]}.jpg)`
    }
    else{
        index++;
        if(index===imglist.length){
            index=0
        }
        container.style.background=`url(img/${imglist[index]}.jpg)`

    }
})
    
});
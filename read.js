let rm=document.getElementById("rm");
let t=document.getElementById("t");
let rl=document.getElementById("rl");
let t1=document.getElementById("t1");
t.style.display = "none";
rl.style.display = "none";
rm.addEventListener("click",function(){
    t.style.display="block";
    rl.style.display="block";
    rm.style.display="none";
    t1.style.display="none";
})


rl.addEventListener("click",function(){
    rl.style.display="none";
    t.style.display="none";
    rm.style.display="block"
    t1.style.display="block"
    
})

var bulb=document.querySelector("#bulb")
var btn=document.querySelector("#btn")

// a.innerHTML="hey"

// a.style.color="red";



// a.addEventListener("click",function(){
//   a.style.backgroundColor="yellow";
// })

var flag=0;


btn.addEventListener("click",function(){
  if(flag%2==0){
  bulb.style.backgroundColor="yellow";
  flag++
}
else{
  bulb.style.backgroundColor="transparent";
  flag++
}
})






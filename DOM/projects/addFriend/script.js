var istatus= document.querySelector("h5")
var btn=document.querySelector("#add")

check=0;

btn.addEventListener("click",function(){
if(check%2==0){
  btn.innerHTML="Remove"
  btn.style.backgroundColor="red"
  istatus.innerHTML="Friends"
  istatus.style.color="green"
  check++;
}
  else{
  btn.innerHTML="Add"
  btn.style.backgroundColor="lightgreen"
  istatus.innerHTML="Stranger"
  istatus.style.color="red"
  check++;
  }
})


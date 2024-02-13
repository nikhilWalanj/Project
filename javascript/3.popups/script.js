// Throttling Function
const throttleFunction=(func, delay)=>{
 
  // Previously called time of the function
  let prev = 0; 
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime(); 
 
    // Logging the difference between previously 
    // called and current called timings
    // console.log(now-prev, delay); 
     
    // If difference is greater than delay call
    // the function again.
    if(now - prev> delay){ 
      prev = now;
 
      // "..." is the spread operator here 
      // returning the function with the 
      // array of arguments
      return func(...args);  
    }
  }
}
document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
  var div= document.createElement("div");
  div.classList.add("imagediv");
  
  div.style.left=dets.clientX+"px";
  div.style.top=dets.clientY+"px";

  var img=document.createElement("img");
  img.setAttribute("src","https://imgs.search.brave.com/Jxfo0cnIwyhrtQmPm0XLOya3Bk3_bdNIhL0TkkKd5-E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0bWFnLmNvbS9p/bWFnZXMvbm8tYmFj/a2dyb3VuZC1jbGlw/YXJ0LTEucG5n");

  div.appendChild(img);


  document.body.appendChild(div);

  gsap.to(img,{
    y:"0",ease:Power1,duration:.6
  });

  gsap.to(img,{
    y:"100%",delay:.6,ease:Power2
  });

  setTimeout(function(){
    div.remove();
  },2000)
}, 400));
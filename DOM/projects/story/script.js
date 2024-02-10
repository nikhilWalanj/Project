 var arr=[{
  dp:"https://imgs.search.brave.com/hZ7GL73NUnbBc7cfYitz9NNWTCngIYmuREMDYDQRQUI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ViL2Vl/LzE4L2ViZWUxOGJh/YmVkZDdjMDliZWZk/ZmE3YzUyMDFiYWEz/LmpwZw",story:"https://imgs.search.brave.com/-JMtCFv01XSzAo8PBTIt6_cOemL2gCpu_MxXiNs9HJ0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mYXNo/aW9udGVyZXN0LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8xMi9tYWxlLW1v/ZGVscy13aXRoLWxv/bmctaGFpci0yLmpw/Zw"},
  {
    dp:"https://imgs.search.brave.com/dlTXCIVyQmlmxs2xYrcn_yPdMy504JIMc6ZALOthZTQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhldHJlbmRzcG90/dGVyLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wOC9a/YWNoLU1pa28tSG90/dGVzdC1NYWxlLU1v/ZGVscy5qcGc",story:"https://imgs.search.brave.com/cMsmX_-m1NkYDPqNbKkVB_elM7LHRdTXLmZp9Mz7AH8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9o/YW5kc29tZS1tYW4t/cG9zaW5nLXN0dWRp/by1zaGFkZXNfMTMw/My0zMDE2Ni5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw"},
    {
      dp:"https://imgs.search.brave.com/ddxm0qZlCAjangfGNWLlZilp7W8BrtfjHy59hwyQeb4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVmLzI2/L2Q1LzVmMjZkNTkw/MjAzMDUxZjZmYmNh/ZWZmOWMzZGRiZjE5/LmpwZw",story:"https://imgs.search.brave.com/nMPYbzbrE75rEC5bLgKuNOaBJ16JoRYr93UEsIfYXSY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBldG9nZW50bGVt/YW4uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzA2L0tp/dC1CdXRsZXItZm9y/LUVtcG9yaW8tQXJt/YW5pLTEwMDB4MTQ0/Ny5qcGc "},
      {
        dp:"https://imgs.search.brave.com/P880rdn870TZRUsm37PhV1cMUZNUrYptvRiY0g7twts/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjIwNzU0Njk3NTEt/M2E2Njk0ZmIyZjYx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRsOGZH/MXZaR1ZzSlRJd2JX/RnVmR1Z1ZkRCOGZE/QjhmSHd3.jpeg ",story:"https://imgs.search.brave.com/SpBC2ovEKUF7TgFXJcQ2jjy1Q7wj8jH0eVHIf4K4DVY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhkLzBm/L2ZiLzhkMGZmYjRm/ZjI4MzdiMDBlYmRh/MDg5ZWYzYzkxMTUy/LmpwZw"},
        {
          dp:"https://imgs.search.brave.com/866lUOTDHVXIsAlo1ph-KLrfvh73-0dYFvF7UWfcq2o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIxLzMz/Lzc5LzIxMzM3OWZl/NjZmOGNmN2MwZDhi/M2ZjYzM3NTUxYzMy/LmpwZw",story:"https://imgs.search.brave.com/bkL6W280NKuwmOE-ocBsIC0lXwO54YLx4AI2UHiz6Vw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFsZW1vZGVsc2Nl/bmUubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA1L0lu/c3RhZ3JhbXMtUmVp/Z25pbmctTWFsZS1N/b2RlbHMtb2YtMjAy/My00LmpwZw"
        },
 ]

var storiyan=document.querySelector("#storiyan")

 var clutter=""

 arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
  </div>`
 })

storiyan.innerHTML=clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
      document.querySelector("#full-screen").style.display="none"
    },3000)
});
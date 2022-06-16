let currens =document.getElementById("curren1").value
let num2 =parseFloat(document.getElementById("in2").value)
let output=document.getElementById("offy")
let output2=document.getElementById("offy2")
let button=document.getElementById("biny")
let myout= document.getElementById("curen2")
let arra =['LATEST FOREX MARKET IN TOWN','USD TO NAIRA','CAD TO NAIRA','EURO TO NAIRA','GBP TO NAIRA']

function currenzo(){
  if(currens=="USD TO NAIRA"){
      output2.innerHTML="1 USD IS EQUIVALENT TO 418 NAIRA"
      output.innerHTML="=N= "+(num2*418).toLocaleString()
  }else if(currens=="CAD TO NAIRA"){
    output2.innerHTML="1 CAD IS EQUIVALENT TO 327 NAIRA"
    output.innerHTML="=N= "+(num2*327).toLocaleString()
  }else if(currens=="GBP TO NAIRA"){
    output2.innerHTML="1 GBP IS EQUIVALENT TO 566 NAIRA"
    output.innerHTML="=N= "+(num2*566).toLocaleString()
  }else if(currens=="EURO TO NAIRA"){
    output2.innerHTML="1 EURO IS EQUIVALENT TO 477 NAIRA"
    output.innerHTML="=N= "+(num2*477).toLocaleString()
  }
    
    console.log(output.innerHTM)
}
button.addEventListener("click",currenzo)
setInterval(gim,1000)
function gim(){
    let rand= arra[Math.floor(Math.random()*arra.length)]
    myout.innerHTML=rand
}


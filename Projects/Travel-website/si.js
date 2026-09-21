
function simpleInterest() {
  let amount = document.getElementById("principal").value;
  let rate = document.getElementById("rate").value;
  let time = document.getElementById("time").value;

  if(amount == 0 && rate == 0 && time == 0){
    document.getElementById("announce").textContent = "Input Details";
  }else{
   document.getElementById("announce").textContent = "";
  }
  if(rate < 0 || rate > 100){
    document.getElementById("announce").textContent = "Invalid Percentage"
  }
  let result1 = amount * rate * time / 100
  document.getElementById("result1").textContent = result1;
}


function amount() {
  let si2 = document.getElementById("si2").value;
  let rate2 = document.getElementById("rate").value;
  let time2 = document.getElementById("time").value;

  if(si2 == 0 && rate2 == 0 && time2 == 0){
    document.getElementById("announce").textContent = "Input Details";
  }else{
   document.getElementById("announce").textContent = "";
  }
  if(rate2 < 0 || rate2 > 100){
    document.getElementById("announce").textContent = "Invalid Percentage"
  }
  let result2 = (si2 * 100)/(rate2 * time2); 
  document.getElementById("result2").textContent = result2;
}

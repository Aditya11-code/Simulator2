var synt = document.querySelector(".syntax-para");
var define = document.querySelector(".defi-para");
var fChart = document.querySelector(".flowchart-para");
var defBtn = document.getElementById('define');
var synBtn = document.getElementById('syntax');
var fcBtn = document.getElementById('fchart');

function definition() {
  if(define.style.display === "block"){
    define.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
  }else{
    define.style.display = "block";
    defBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    defBtn.style.color = "white";
    synt.style.display = "none";
    define.style.display = "block";
    fChart.style.display = "none";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
    fcBtn.style.background = "none";
    fcBtn.style.color = "#3072b3";
  }

}
function syntax() {
  if(synt.style.display === "block"){
    synt.style.display = "none";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
  }
  else{
    synt.style.display = "block";
    define.style.display = "none";
    fChart.style.display = "none";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
    synBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    synBtn.style.color = "#fff";
    fcBtn.style.background = "none";
    fcBtn.style.color = "#3072b3";
  }
}
function flowchart() {
  if(fChart.style.display === "block"){
    fChart.style.display = "none";
    fcBtn.style.background = "none";
    fcBtn.style.color = "#3072b3";
  }
  else{
    synt.style.display = "none";
    define.style.display = "none";
    fChart.style.display = "block";
    defBtn.style.background = "none";
    defBtn.style.color = "#3072b3";
    synBtn.style.background = "none";
    synBtn.style.color = "#3072b3";
    fcBtn.style.backgroundImage = "linear-gradient(#599bdc, #3072b3)";
    fcBtn.style.color = "#fff";
  }
}

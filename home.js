const button = document.getElementsByClassName("button")[0];
const score = document.getElementById("score");
const highScore = document.getElementById("highscore");
highScore.textContent = "Highscore: " + localStorage.getItem("score");

button.addEventListener("click", ()=>{
  multiply();
});
setInterval(()=>{
  move();
}, 100);


function multiply(){
  const lab = document.getElementById("labratory");
  let bacteria = document.getElementsByClassName("bacteria");
  let max = bacteria.length;
  for(let i = 0; i<max; i++){
    lab.appendChild(bacteria[i].cloneNode(true));
  }
  setScore(max*2);
}
  function move(){
    let bacteria = document.getElementsByClassName("bacteria");
    for(let i = 0; i<bacteria.length; i++){
      bacteria[i].style.left = Math.random()*85+"%";
      bacteria[i].style.top = Math.random()*80+"%";
    }
  }
function setScore(max){
  score.textContent = "Score: " + (max);
  let savedScore = localStorage.getItem("score");
  if(max>savedScore){
    if(max=savedScore){
      alert("Breached High Score!");
    }
    localStorage.setItem("score", max)
    highScore.textContent = "Highscore: " + (max);
  }
}
// Iteration 2: Generate 2 random number and display it on the screen
var num1 = document.getElementById("number1")
var num2 = document.getElementById("number2")

var greater1=document.getElementById("greater-than")
var lesser1= document.getElementById("lesser-than")
var equal1=document.getElementById("equal-to")
var ranNum
var score=0
var time=document.getElementById("timer")

function ran(){
    return Math.floor(Math.random()*101)
}
window.addEventListener("load",startCountdown)


function randNum(){
    let RanNum1=0
    let RanNum2 = 0
    RanNum1=ran()
    RanNum2=ran()

    ranNum=[RanNum1,RanNum2]
    return [RanNum1,RanNum2]
}

function insert(){
    let a=randNum()
    num1.textContent=a[0]
    num2.textContent=a[1]
}
console.log(score)

// Iteration 3: Make the options button functional
function checkB(){
    let tick=0
    let a=ranNum
    if (a[0]==a[1]){
        tick=1
    }else if(a[0]>a[1]){
        tick=2
    }else{
        tick=3
    }
    console.log(tick)
    return tick

}

function Check_repeat(n){
    let tick
    tick=checkB()
    if (tick==n){
        insert()
    }else{
        window.localStorage.setItem("score",score)
        
        window.location.href = "gameover.html"

    }
}


greater1.onclick=()=>{

    count=5
    Check_repeat(2)
    score+=1
   

}


equal1.onclick=()=>{
    count=5
    Check_repeat(1)
    score+=1
    
}

lesser1.onclick=()=>{
    count=5
    Check_repeat(3)
    score+=1
    
}

window.addEventListener("load",insert)


// Iteration 4: Build a timer for the game
var count=5
function startCountdown() {
    
    const intervalId = setInterval(function() {
      if (count >= 1) {
        time.textContent=count
        count--;
      } else {
        clearInterval(intervalId);
        window.localStorage.setItem("score",score)

        window.location.href = "gameover.html"

      }
    }, 1000);
  }

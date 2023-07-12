var startBtn = document.querySelector("#start");
var ans1Btn = document.querySelector("#Ans1");
var ans2Btn = document.querySelector("#Ans2");
var ans3Btn = document.querySelector("#Ans3");
var ans4Btn = document.querySelector("#Ans4");


var questionNum = 0;
var questions = ["What does CSS stand for?","What does HTML stand for?"] ;

var ansSetOne =["Cascading Style Sheet", "Beans"]
var ansSetTwo =["Cool Sister Sam", "Beans"]
var ansSetThree =["California Sea Side", "Beans"]
var ansSetFour =["Colossal Submarine Sandwhich", "Beans"]

var ansKey = [0,1,2,3];

start.addEventListener("click", startQuiz);
ans1Btn.addEventListener("click", () => nextQuestion(1));
ans2Btn.addEventListener("click", () => nextQuestion(2));
ans3Btn.addEventListener("click", () => nextQuestion(3));
ans4Btn.addEventListener("click", () => nextQuestion(4));

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function startQuiz(){
    document.getElementById("start").style.display = "none";
    document.getElementById("Ans1").style.display = "inline-block";
    document.getElementById("Ans2").style.display = "inline-block";
    document.getElementById("Ans3").style.display = "inline-block";
    document.getElementById("Ans4").style.display = "inline-block";

    countDownClock(0);
    nextQuestion(0);
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function countDownClock(timeAdd){

    var countDownTime = new Date().getTime() + 66000;

    setInterval(function(){
        
        var now = new Date().getTime();
        var timeLeft = countDownTime - now;
            timeLeft += timeAdd;

        document.getElementById("TimerID").innerHTML = "Time left: " + Math.floor(timeLeft/1000) + "s";

        if (timeLeft < 0){
            timeOut()
        }
    }, 1000) 
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function nextQuestion(usrResp){

    checkAnswer(usrResp);

    document.getElementById("Question").innerHTML = questions[questionNum];
    document.getElementById("Ans1").innerHTML = ansSetOne[questionNum];
    document.getElementById("Ans2").innerHTML = ansSetTwo[questionNum];
    document.getElementById("Ans3").innerHTML = ansSetThree[questionNum];
    document.getElementById("Ans4").innerHTML = ansSetFour[questionNum];

    questionNum++

    return
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function checkAnswer(usrResp){
    if(usrResp == ansKey[questionNum]){
        console.log("correct");
        countDownClock(10000);
    }else{
        console.log("WRONG");
        countDownClock(-10000);
    }
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function timeOut(){
    document.getElementById("TimerID").style.display = "none";
}
var startBtn = document.querySelector("#start");
var ans1Btn = document.querySelector("#Ans1");
var ans2Btn = document.querySelector("#Ans2");
var ans3Btn = document.querySelector("#Ans3");
var ans4Btn = document.querySelector("#Ans4");


var questionNum = 0;
var questions = ["What does CSS stand for?","What does HTML stand for?", "Which is NOT a data type?", "Array data is contained withing:",
                 "How do you reference a class in CSS?",    "How do you reference an ID in CSS?",      "What does API stand for?", "End of Quiz"] ;

var ansSetOne =["Cascading Style Sheet",        "Houston Texas Movie Lovers",   "String",   "Brackets []",
                "-ClassName",                   "-IDname",                      "Application Pass Interference"];

var ansSetTwo =["Cool Sister Sam",              "Hypertext Markup Language",    "Number",   "Parenthesis ()",
                "#ClassName",                   "#IDname",                      "Access Programming Imitation"];

var ansSetThree =["California Sea Side",        "Hot To My Lips",               "Booling",  "Curly Brackets {}",
                  ">ClassName",                 ">IDname",                      "Application Programming Interface"];

var ansSetFour =["Colossal Submarine Sandwhich", "Hyper Text Moving Language",  "Array",    "Two slices of bread",
                 ".ClassName",                  ".IDname",                      "Apocalyptic PetroDragonic Inferno"];

var ansKey = [0,1,2,3,1,4,2,3];
var usrScore = -1;

var countDownTime = 0;
var timeLeft;
var now;
var timePaused = false;
var usrName;
var usrInfoObj;



start.addEventListener("click", startQuiz);
ans1Btn.addEventListener("click", () => nextQuestion(1));
ans2Btn.addEventListener("click", () => nextQuestion(2));
ans3Btn.addEventListener("click", () => nextQuestion(3));
ans4Btn.addEventListener("click", () => nextQuestion(4));

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function startQuiz(){
    document.getElementById("start").style.display = "none";
    document.getElementById("Ans1").style.display = "block";
    document.getElementById("Ans2").style.display = "block";
    document.getElementById("Ans3").style.display = "block";
    document.getElementById("Ans4").style.display = "block";

    countDownTime = new Date().getTime() + 13000;
    countDownClock();
    nextQuestion(0);
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function countDownClock(){
    
    setInterval(function(){
        if(!timePaused){
        now = new Date().getTime();
        timeLeft = countDownTime - now;

        document.getElementById("TimerID").innerHTML = "Time left: " + Math.floor(timeLeft/1000) + "s";
        }

        if (timeLeft < 0 ){
            timeLeft = 0;
            timeOut();
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
    if(questionNum === 8){
        timeOut();
    }


}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function checkAnswer(usrResp){
    if(usrResp == ansKey[questionNum]){
        countDownTime += 3000
        usrScore++
    }else{
        countDownTime -= 5000
    }
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function timeOut(){

    timePaused = true;

    document.getElementById("TimerID").style.display = "none";

    hideButtons();
    showScore();

}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function showScore(){

    hideButtons();
    document.getElementById("name").style.display = "inline";
    document.getElementById("scores").innerHTML = "Your score: " + usrScore;
    document.getElementById("timeLeft").innerHTML = "Time Remaining: " + Math.floor(timeLeft/1000) + "S";



}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function hideButtons(){

    document.getElementById("start").style.display = "none";
    document.getElementById("Ans1").style.display = "none";
    document.getElementById("Ans2").style.display = "none";
    document.getElementById("Ans3").style.display = "none";
    document.getElementById("Ans4").style.display = "none";

}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function getScore(enteredName){

    console.log(enteredName.value);
    usrName = enteredName.value;

    document.getElementById("name").style.display = "none";

    usrInfoObj = {name: usrName, time: timeLeft, points: usrScore };

    saveScore(usrInfoObj);

}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function saveScore(usrInfo){
    var existignScores = JSON.parse(localStorage.getItem("allScores"));

    if(existignScores == null){
        existignScores = [];
    }

    localStorage.setItem("score", JSON.stringify(usrInfo));
    existignScores.push(usrInfo);
    localStorage.setItem("allScores", JSON.stringify(existignScores));

    console.log(localStorage.getItem("allScores"));


}
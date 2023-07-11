var startBtn = document.querySelector("#start");
var ans1Btn = document.querySelector("#Ans1");
var ans2Btn = document.querySelector("#Ans2");
var ans3Btn = document.querySelector("#Ans3");
var ans4Btn = document.querySelector("#Ans4");


var questionNum = 0;
var questions = ["What does CSS stand for?","What does HTML stand for?"] ;

var answerSetOne =["Cascading Style Sheet", "Beans"]
var answerSetTwo =["Cool Sister Sam", "Beans"]
var answerSetThree =["California Sea Side", "Beans"]
var answerSetFour =["Colossal Submarine Sandwhich", "Beans"]

start.addEventListener("click", startQuiz);
ans1Btn.addEventListener("click", nextQuestion);
ans2Btn.addEventListener("click", nextQuestion);
ans3Btn.addEventListener("click", nextQuestion);
ans4Btn.addEventListener("click", nextQuestion);


function startQuiz(){
    document.getElementById("start").style.display = "none";
    nextQuestion();
}



function nextQuestion(){

    document.getElementById("Ans1").style.display = "inline-block";
    document.getElementById("Ans2").style.display = "inline-block";
    document.getElementById("Ans3").style.display = "inline-block";
    document.getElementById("Ans4").style.display = "inline-block";

    document.getElementById("Question").innerHTML = questions[questionNum];
    document.getElementById("Ans1").innerHTML = answerSetOne[questionNum];
    document.getElementById("Ans2").innerHTML = answerSetTwo[questionNum];
    document.getElementById("Ans3").innerHTML = answerSetThree[questionNum];
    document.getElementById("Ans4").innerHTML = answerSetFour[questionNum];

    questionNum++

    return
}
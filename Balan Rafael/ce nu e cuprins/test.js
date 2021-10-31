function check(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var correct = 0;

if (question1 == "canabis"){
  correct++;
}
if (question2 == "MDMA"){
  correct++;
}
if (question3 == "morfina"){
  correct++;
}
if (question4 == "16"){
  correct++;
}
document.getElementById("after_submit").style.visibility = "visible";
if(correct == 1){document.getElementById("number_correct").innerHTML = "Ai raspuns corect la  " + correct + " raspuns !";}
else document.getElementById("number_correct").innerHTML = "Ai raspuns corect la  " + correct + " raspunsuri !";

}

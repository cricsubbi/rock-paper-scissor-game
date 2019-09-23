var userScore=0;
var compScore=0;
const userScore_s = document.getElementById("user-score");
const compScore_s = document.getElementById("comp-score");
const scoreboard = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scis = document.getElementById("s");

function compChoice(){
    const choices =['p','r','s'];
    const randomno = Math.floor(Math.random()*3);
    return choices[randomno];
}

function win(choice,compchoice){
    userScore++;
    userScore_s.innerHTML=userScore;
    if(choice=='r')
        choice="rock";
    if(choice=='p')
        choice="paper";
    if(choice=='s')
        choice="paper";
    if(compchoice=='r')
        compchoice="rock";
    if(compchoice=='p')
        compchoice="paper";
    if(compchoice=='s')
        compchoice="scissors";
    result.innerHTML="user wins as ur choice is " + choice +" and comp choice is " + compchoice;
}
function lose(choice,compchoice){
    compScore++;
    compScore_s.innerHTML=compScore;
    if(choice=='r')
        choice="rock";
    if(choice=='p')
        choice="paper";
    if(choice=='s')
        choice="paper";
    if(compchoice=='r')
        compchoice="rock";
    if(compchoice=='p')
        compchoice="paper";
    if(compchoice=='s')
        compchoice="scissors";
    result.innerHTML="comp wins as ur choice is " + choice +" and comp choice is " + compchoice;
}
function draw(choice,compchoice){
    
    if(choice=='r')
        choice="rock";
    if(choice=='p')
        choice="paper";
    if(choice=='s')
        choice="paper";
    if(compchoice=='r')
        compchoice="rock";
    if(compchoice=='p')
        compchoice="paper";
    if(compchoice=='s')
        compchoice="scissors";
    result.innerHTML="its a draw as ur choice is " + choice + "and comp choice is " + compchoice;
}

function game(choice) {
const compchoice = compChoice();
switch(choice + compchoice){
    case "pr":
    case "sp":
    case "rs":
         win(choice,compchoice);
         break;
    case "rp":
    case "ps":
    case "sr":
        lose(choice,compchoice);
        break;
    case "pp":
    case "ss":
    case "rr":
        draw(choice,compchoice);
        break;
}
}

function main()
{
    rock.addEventListener('click' , function(){
        game("r");
    })
    paper.addEventListener('click' , function(){
        game("p");
    })
    scis.addEventListener('click' , function(){
        game("s");
    })
}
main();

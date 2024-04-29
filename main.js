let robotchoices = ['rock', 'paper','scissors'];
// creating array for the robot choices

const playgame = (humanchoice) => {
    let human = humanchoice;

    // for robot
    // let robot = Math.round(Math.random() * 2);
    // creating random whole numbers for robot

    let robot = robotchoices[Math.round(Math.random() * 2)];
    // implementing a choice for the robot


    alert(`the choice of the robot is : ${robot}`);
    // alert("the choice of the robot is:" + robot)
    // for robot

    alert(`the choice of the human is : ${human}`); 

    if(human == "rock"){
        if(robot == "rock"){
            alert("its a tie");
        }else if(robot == "paper"){
            alert("robot wins");
            // scoring function
            scoringFunction("robot");
            // scoring function
        }else if (robot == "scissors"){
            alert("human wins");   
            // scoring function
            scoringFunction("human");
            // scoring function
        }else{
            alert("invalid choice for a robot");
        }

    }else if(human == "paper"){
        if(robot == "rock"){
            alert("human wins");
             // scoring function
             scoringFunction("human");
             // scoring function
        }else if(robot == "paper"){
            alert("its a tie");
        }else if(robot == "scissors"){
            alert("robot wins");
            // scoring function
            scoringFunction("robot");
            // scoring function
        }else{
            alert("invalid choices for a robot");
        }

    }else if(human == "scissors"){
        if(robot == "rock"){
            alert("robot wins");
             // scoring function
            scoringFunction("robot");
             // scoring function
        }else if(robot == "paper"){
            alert("human wins");
            // scoring function
            scoringFunction("human"); 
             // scoring function
        }else if(robot == "scissors"){
            alert("its a tie");
        }else{
            alert("invalid choices")
        }
    }

};

const scoringFunction = (winner) => {
    let humanscore = document.querySelector("#human-score").innerHTML;
    let robotscore = document.querySelector("#robot-score").innerHTML;
    // alert(`Human Score: ${humanscore} and Robot Score: ${robotscore}`);
    // alert(winner);

    if(winner == "robot"){
        robotscore++;
        document.querySelector("#robot-score").innerHTML = robotscore;
    }else if(winner == "human"){
        humanscore++;
        document.querySelector("#human-score").innerHTML = humanscore;
    }
}








// practicing using switch

// let robotchoices = ['rock', 'paper','scissors'];

// const playgame = (humanchoice) => {
//     let human = humanchoice;


//     let robot = robotchoices[Math.round(Math.random() *2)];
    
    
//     alert(`this is robot choice : ${robot}`);
//     alert(`this is human choice : ${human}`);

//     switch(human){
//         case "rock":
//             switch(robot){
//                 case "scissors":
//                     alert("human win");
//                 break;
//                 case "paper":
//                     alert("robot wins")
//                 break;
//                 case "rock":
//                     alert("its a tie")
//                 break;
//                 default:
//                     alert("invalid");
//             }
//         case "paper":
//             switch(robot){
//                 case "scissors":
//                     alert("robot win");
//                 break;
//                 case "paper":
//                     alert("its a tie")
//                 break;
//                 case "rock":
//                     alert("human wins")
//                 break;
//                 default:
//                     alert("invalid");
//             }
//         break;        
//     }
// }
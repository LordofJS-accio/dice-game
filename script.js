
let players = document.querySelectorAll('input');

let btns = document.querySelectorAll('.dice');

let score = document.querySelectorAll('span');

let endButton = document.querySelector('#endButton');

let winMessage = document.querySelector('#winMessage');




endButton.disabled = true;

for(let t of btns){
    // t.addEventListener("click", ()=>rollDice(t.id))
    // t.addEventListener("click", (eventDetails)=>rollDice(eventDetails, "abhi"))
    t.addEventListener("click", rollDice)
}


let btnClickCount = 0
function rollDice(eventDetails){
     
    btnClickCount = btnClickCount + 1;

    if(btnClickCount == 5){
        endButton.disabled = false;
    }


    // console.log(eventDetails.target.id)
    // id = btn1, btn2, btn3, btn4,btn5
    // diable the button
    eventDetails.target.disabled = true;
    let btn_id = eventDetails.target.id.slice(-1) - 1; // btn1

    console.log(btn_id)

    // roll the dice: 

    let diceArray = [1, 2, 3, 4, 5, 6];

     let randomIndex=  parseInt(Math.random()*diceArray.length)
     let diceValue = diceArray[randomIndex];
     score[btn_id].innerText = diceValue;

}


endButton.addEventListener("click", findWinner)

function findWinner(){
    endButton.disabled = true;
    
    let highestScore = 0   // 4

    for(let t of score){
         console.log(t)
        if(+t.innerText > highestScore){
            highestScore = +t.innerText
        }
    }
    

    let winnerIndex = []
    for(let i = 0 ; i<=score.length-1; i++){
          if(Number(score[i].innerText) == highestScore){
              winnerIndex.push(i)
          }
    }
     let playerNames = ""
    for(let t of winnerIndex){
        playerNames = playerNames + players[t].value + ","
    }
    abhisehk,ab,
    playerNames = playerNames.slice(0, -1)
    // console.log(playerNames)
    winMessage.innerText = playerNames + " wins"
}








// function addEventListener1(t1, rollDice){
// //    ... 
   
//    rollDice({.....}) // eventDetails

// }









// function rollDice(btn_id){
//    console.log(btn_id)
// }



// function hello(n, fun){
//     fun()
// }

// function hii(){

// }

// hello(1m hii)

//Done
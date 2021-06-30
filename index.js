// Code your solutions in this file

function writeCards(namesArray, event){
    let cardMsg = [];
for (let i = 0; i < namesArray.length; i++)
 cardMsg.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    return cardMsg
}

function countDown(i){
    while (i >= 0){
        console.log(i--)
    }
}
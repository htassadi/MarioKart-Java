// Minecraft fishing simulator

'use strict';

//global var
let numBanana= 0
let numShell= 0
let numStar = 0
let numBullet = 0
let numMushroom= 0
let num= Number(document.getElementById('input').value)

//event listener
document.getElementById('mainImg').addEventListener ('click', mysteryBox)


function mysteryBox (){
    console.log("Race position: " + document.getElementById('input').value)
    let num= Number(document.getElementById('input').value)
    
    if (num == 0) {
        console.log("nothing here!");
    } else {
        console.log("Num is: " + num);
    }

    //generate a random #
    let randNum = Math.random();

    //Simulate results 
    if (num <=6 && num !=0 ) { // POSITIONS 1-6

        if (randNum <=0.45 ) { //banana
            numBanana++
            document.getElementById('banana').innerHTML= numBanana
            document.getElementById('results').innerHTML += '<img src="images/banana.png">'

        } else if (randNum <= 0.8 && randNum > 0.45 ) { //shell
            numShell++
            document.getElementById('shell').innerHTML= numShell
            document.getElementById('results').innerHTML += '<img src="images/Green_Shell.png">'

        } else if (randNum <= 0.95 && randNum > 0.8 ) { //star
            numStar++
            document.getElementById('star').innerHTML= numStar
            document.getElementById('results').innerHTML += '<img src="images/Super_Star.png">'

        } else if (randNum <= 0.99 && randNum > 0.95 ) { //mushroom
            numMushroom++
            document.getElementById('mushroom').innerHTML= numMushroom
            document.getElementById('results').innerHTML += '<img src="images/golden_mushroom.png">'

        } else { //bullet
            numBullet++
            document.getElementById('bullet').innerHTML= numBullet
            document.getElementById('results').innerHTML += '<img src="images/bullet_bill.png">'
        }
    }

    if (num >= 7  && num !=0) { // POSITIONS 7-12

        console.log(randNum);

         if (randNum <=0.05) { //banana
            numBanana++
            document.getElementById('banana').innerHTML= numBanana
            document.getElementById('results').innerHTML += '<img src="images/banana.png">'
    
        } else if ( randNum <= 0.1 && randNum > 0.05) { //shell
            numShell++
            document.getElementById('shell').innerHTML= numShell
            document.getElementById('results').innerHTML += '<img src="images/Green_Shell.png">'
    
        } else if (randNum <=0.35 && randNum > 0.1) { //star
            numStar++
            document.getElementById('star').innerHTML= numStar
            document.getElementById('results').innerHTML += '<img src="images/Super_Star.png">'
    
        } else if (randNum <=0.7 && randNum > 0.35 ) { //mushroom
            numMushroom++
            document.getElementById('mushroom').innerHTML= numMushroom
            document.getElementById('results').innerHTML += '<img src="images/golden_mushroom.png">'
    
        } else { //bullet
            numBullet++
            document.getElementById('bullet').innerHTML= numBullet
            document.getElementById('results').innerHTML += '<img src="images/bullet_bill.png">' 
        }
    }

}

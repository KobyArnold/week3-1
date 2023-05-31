//a code to play Craps on my Index.html page
function playCraps() {
    console.log("playcraps() started");
    //step 1: roll two six sided dice
    var die1;
    var die2;
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    console.log("die1 is:" + die1);
    console.log("die2 is:" + die2);
    //Step 1b: print results on screen
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    //step 2: calculate the sum of die 1 and die 2
    var dieSum = die1 + die2
    console.log("The sum of the dice is" + dieSum);
    //print the sum of both die
    document.getElementById("dieSum").innerHTML = dieSum;
    //step 3: does the sum equal 7 or 11, meaning do you lose
    if (dieSum == 7 || dieSum == 11) {
        document.getElementById("gameRes").innerHTML = "YOU LOSE!!"
        //step 4: did the dice come up doubles> are they evens? if so, you win
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("gameRes").innerHTML = "YOU WIN!!"
    } else {
        //step 5: otherwise push
        document.getElementById("gameRes").innerHTML = "Did not lose or win, please play again!"
    }



}
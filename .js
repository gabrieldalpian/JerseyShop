//Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score) 

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

//Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values). //


// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

/// Ignore draws this time, Instead, log No team wins to the console if there is no winner.//


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Calculate average scores for Dolphins and Koalas
const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

// Function to check the winner
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

// Check the winner for both data sets
checkWinner(scoreDolphins1, scoreKoalas1);
checkWinner(scoreDolphins2, scoreKoalas2);
 
//-----------------------------------------------------------------------//

// Arrow Functions // 

const number = (number1, number2) => number1 + number2;

const number1 = 5;
const number2 = 10;

console.log(nome(number1, number2));

//output: 15 //
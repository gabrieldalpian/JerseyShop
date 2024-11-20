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

// global variable // 
var nome = "Gabriel";
console.log(nome);

Gabriel

//-----------//

// block scope  // 
let idade = 20;
console.log(idade);

20

//-----------//

// const // 

const nome = "Mac";
console.log(nome);

Mac 

//-----------//

// arrays //

               [0]       [1]      [2]
var nomes = ['Gabriel','Felipe','Joao'];
console.log(nomes[0]);

Gabriel


var nomes = ['Gabriel','Felipe'];
nomes[0] = 'Felipe';
console.log(nomes[0]);

Felipe

var nomes = ['Gabriel','Felipe'];
nomes[0] = 'Felipe';
nomes.push('Pedro');
console.log(nomes[2]);

Pedro


//-----------//

//conditions // 

var numero = 20;
var nome = 'Gabriel';

if(nome == 'Joao'){
	console.log("True");}
else if(nome == 'Felipe'){
	console.log("O nome e felipe");}
else{
	console.log('Marcos');}

Marcos


>= ('menor ou igual')
> (menor)
<= ('maior ou igual')
< ('maior')
% ('remainder')

var numero = 20;
var nome = 'Gabriel';

if(numero <= 10){
	console.log(' O numero e maior que 10 ');}

('O numero e maior que 10')

// ============================================ //

!= (Diferente)

if(nome != 'joao'){
	console.log(" O nome eh diferente de joao")}

('O nome eh diferente de joao')
// ============================================= //
&& ( e ) 
|| (ou)

if(numero == 20 && nome == 'Gabriel'){
	console.log("true");}

True

if(numero == 20 || nome == 'Felipe'){
	console.log("true");}

True


5 == '5'; // true, because '5' is coerced to a number
5 === '5'; // false, because the types are different (number vs string)



//-----------//


// functions //

function testes(){
	console.log('Chamando a funcao testes')
}
testes();

('Chamando a funcao testes')


function testes(nome,idade){
	console.log("O nome eh "+nome);
	console.log("A idade eh "+idade);
}
testes('Gabriel',20);

('O nome eh Gabriel')
('A idade eh 20')


function pegarNome(parametro){
	if(parametro == 1){
		return "Gabriel";
	}else
		return "Outro nome";
	}

var nome = pegarNome(1)
console.log(nome);

Gabriel



var funcao = function(){
	alert("Ola mundo");
}
funcao();

('Ola mundo')


// ========================== //


(function(){
	alert("ola mundo");
 })();

('Ola mundo')

//-----------//


// while // 

var n = 0;
while(n < 10){
	console.log(n);
	n++;
}
1
2
3
4
5
6
7
8
9

//-----------//

// For Loops//

for(var i = 5; i <= 10; i++){
	console.log(i);
}

5
6
7
8
9
10

//-----------//
// For Loops backwards //

const gabe = ['gabriel', 'developer', 'twenty years old'];

for (let i = gabe.length - 1; i >= 0; i--) {
	console.log(gabe[i]);
}

twenty years old
developer
gabriel

//-----------//

// While Loops

let i = 5;
while (i < 10) {
    console.log(i); i++;
}

// DO //

var n = 5;
do{
	console.log(n);
	n++;
}while(n < 10);

5
6
7
8
9

//-----------//

// ForEach //

var c = ["Gabriel", "Lucas", "Pedro"];
c.forEach(function(value){
	console.log(value);
})

Gabriel
Lucas 
Pedro

//-----------//

// prompt //

var nome = prompt("Qual seu nome?");
var idade1 = prompt('Qual sua idade?');
var cidade = prompt('Qual sua cidade?');
	console.log('O nome e '+nome);console.log(`my name is ${firstNamee}, and my last name is ${lastNamee}`);
	console.log("A iidade eh "+idade);
	console.log("A cidade eh "+cidade);

('O nome e Gabriel')
('A idade e 20')
('A cidade e Kearny')


//-----------//

// Age Calculator //

var anoNascimento = prompt("Informe o ano do seu nascimento nascimento");
var anoAtual = prompt("Informe o ano atual");

var idadeFinal = anoAtual - anoNascimento;
alert(" a idade final e"+idadeFinal);

2023 - 2003 
('A idade final e 20')

//-----------//

// dollar sign //

const firstName = 'gabe';
const lastName = 'pedro';

console.log(`My name is ${firstName}, and my last name is ${lastName}`);

//-----------//

// Average scores using IF - ELSE IF - ELSE //

const scoreDolphins = (96 + 108 + 89) / 3; // Average score for Dolphins
const scoreKoalas = (88 + 91 + 110) / 3;  // Average score for Koalas

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("It's a draw");
}


//-----------//

// Switch statements //

const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Wednesday":
        console.log("Hump day!");
        break;
    case "Friday":
        console.log("Weekend is almost here!");
        break;
    default:
        console.log("It's just another day.");
}


//-----------//


// Ternary Operator 

const age = 20;
const message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);

//-----------//

// objetcs //

const gabe = {
    firstName:'Gabriel', 
    lastName: 'Pedro', 
    birthyear: 2003, 
    job: 'Software Engineer',

    calcAge: function (birthyear) {
        return 2024 - birthyear;
    }
};

//----------- // 

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Task 1 = For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height. 

// Task 2 = Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// Task 3 = Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall. 

const mark = {
    fullName: "Mark Miller",
    mass: 75,
    height: 1.8,
    calcBMI: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
  
  const john = {
    fullName: "John Smith",
    mass: 85,
    height: 1.75,
    calcBMI: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
  
  mark.calcBMI();
  john.calcBMI();
  
  console.log(mark.bmi, john.bmi);
  
  // Compare BMIs
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
  } else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
  }

  //-----------//


  // THE BEST WAY OF FETCHING API 

const url = x;
const apikey = y;

fetch(`url ${url}apikey${apikey}`)
    .then(response => response.json ())
    .then(data => {
        console.log(data);
})
    .catch(error => {
        console.log('error', error);
});

//-----------//

// ANOTHER WAY OF FETCH REQUESTING 

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response=> response.json())
.then(json=>console.log(json))


const request = ('https://restcountries.eu/rest/v2/name/brazil');
console.log(request);

//-----------//

// AND ONE MORE EXAMPLE OF FETCHING API

const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]));
  }; 
  
  getCountryData('brazil');

  //-----------//

// async and await = (they need to be together)

async function pegarDados() {
	const resultado = await fetch('https://github.com/gabrieldalpian')
	console.log('resultado', resultado);
}

//----------- //



/*

let h1Rework = document.querySelector('h1');
console.log(h1Rework);




const sentence = "She is so \"cool\"";
const sentence2 = `She is even "cooler" than first one`;
console.log(sentence);
console.log(sentence2);

const name = "Blazej";
const sentence3 = `Hey! My name is ${name} and I'm learning JS right now`;
console.log(sentence3);

const html = `
    <div>
        <h2>Hey ${name}</h2>
        <p>${sentence3}</p>
    </div>
`;

const mms = 30;
const people = 7;
eachPersonGets = Math.floor(mms / people);
console.log(`Each person gets ${eachPersonGets} MM's`);

const person = {
    name: 'Blazej',
    surname:'Wilczynski',
    age: '32'
};

const age = 32;
const ofAge = age > 33;
console.log(ofAge);

*/
/*
const p = document.querySelector('p');
console.log(p);

function calculateBill(amount, taxRate) {
    console.log(`Calculate Bill is running`);
    const total = amount * (1 + taxRate);
    console.log(`Kwota ${amount} z podatkiem to ${total}`);
    return total;
};

calculateBill();

function yell(name = `Co nic nie wpisujesz?`) {
    console.log(`Hey ${name.toUpperCase()}`)
}
*/
/*
const button = document.querySelector('button');
const body = document.getElementById("changer");
const colors = ['coral', 'lightcoral', 'salmon', 'darksalmon', 'lightsalmon'];

body.style.backgroundColor = 'lightcoral';
button.addEventListener('click', changeBackground);

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length+1);
body.style.backgroundColor = colors[colorIndex];
}

*/

/*
beginning of script
*/

const divChanger = document.getElementById('changer');
const buttonChanger = document.getElementById('changer-button');
const colors = ['lightsalmon', 'salmon', 'darksalmon', 'pink', 'lightpink', 'palevioletred', 'lavender', 'mediumquamarine', 
'darkseagreen', 'lightseagreen', 'lightblue', 'cornflowerblue']
divChanger.style.backgroundColor = 'lightsalmon';
buttonChanger.addEventListener('click',  changeBackground);

function changeBackground() {
    const colorIndex = parseInt(Math.random()*colors.length+1);
    console.log(colorIndex);
    divChanger.style.backgroundColor = colors[colorIndex];
}

/*
end of script
*/


/*
beginning of script with hex color
*/


const hexBackground = document.getElementById('hex-background');
const hexNumber = document.getElementById('hex-number');
const hexChangerButton = document.getElementById('hex-button');

hexChangerButton.addEventListener('click', changeHexBackground);
const hexParts = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function changeHexBackground() {
    console.log('test');
    let hex = '#';
    

    for (i=0; i<6; i++) {
        let index = Math.floor(Math.random()*hexParts.length);
        hex = hex + hexParts[index];
    }

    hexBackground.style.backgroundColor = hex;
    hexNumber.textContent = hex;
    console.log(hex);
}

/*
end of script with hex colors
*/


/* WES BOS Tutorial 2020-03-08  -  Ways to declare functions */

console.log(`Checking if declaring functions works`);
function charusia(typeOfFood) {
    console.log(`Czarusia uwielbia takie jedzonko ${typeOfFood}`);
}

/* end watching at 4:52 */

/* -------------------------------------------------------- */ 

/* WES BOS Tutorial 2020-03-09  -  Ways to declare functions */

function inchToCm(inch) {
    const cm = inch * 2.54;
    return cm;
}

const inchToCm2 = function(inches) {
    const cmSecond = inches * 7.54;
    return cmSecond;
}

/* end watching at 10:52 */

/* -------------------------------------------------------- */ 

/* WES BOS Tutorial 2020-03-10  -  Ways to declare functions */

const inchToCm3 = (inches2) => {
    const cmThird = inches2 * 100;
    return cmThird;
}


const inchToCm4 = inches => inches * 125;

/* end watching at 15:37 */


/* -------------------------------------------------------- */ 


/* WES BOS Tutorial 2020-03-14  -  Ways to declare functions */

const add = (a, b=3) => a + b;


/* end watching at 19:03 */


/* -------------------------------------------------------- */ 


/* WES BOS Tutorial 2020-03-15  -  Ways to declare functions */

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 })


//IIFE
//Immediately invoked function expression

(function() {
    console.log('This is anonymous function');
    return 'You are cool';
})();

/* end watching at 28:05 */

/* -------------------------------------------------------- */ 


/* WES BOS Tutorial 2020-03-16  -  Ways to declare functions */

//Methods

const bobek = {
    name: 'bobek',
    sayHi: function() {
        console.log('Hey Bobek');
    },
    yellHi() {
        console.log('Hey Bobek louder');
    }

}

const button2 = document.querySelector('.changer-button');
button2.addEventListener('click', function() {
    console.log(`Nice declaration of function `)
});


/* end watching at 35:42 */

/* -------------------------------------------------------- */ 


/* WES BOS Tutorial 2020-03-23  -  Ways to declare functions; Debugging tools */

setTimeout(bobek.yellHi, 3000);



/* end watching at 10:53 */


/* -------------------------------------------------------- */ 


/* WES BOS Tutorial 2020-03-24  -  WDebugging tools */




/* end watching at 19:30 */
//1 - Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

//2 - First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let cleanedText = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
let words = cleanedText.split(/\s+/);
console.log(words);
console.log(words.length);

//3 - In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(shoppingCart.includes("Meat")) {} else shoppingCart.unshift("Meat")
if(shoppingCart.includes("Sugar")) {} else shoppingCart.push("Sugar")
const honeyIndex = shoppingCart.indexOf("Honey")
shoppingCart.splice(honeyIndex,1)
const teaIndex = shoppingCart.indexOf("Tea")
shoppingCart[teaIndex] = "Green Tea"
console.log("Es.3", shoppingCart);

//4 - In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const ethiopia = "Ethiopia"
if(countries.includes(ethiopia)) console.log(ethiopia.toUpperCase);
else countries.push(ethiopia)

//5 - In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechs.includes("Saas")) console.log("Saas is a CSS preprocess");
else {
    webTechs.push("Saas")
    console.log("Es.5" , webTechs);
}

//6 - Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//----------------- Level 3
//1 - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages);
let count = ages.length - 1
const minAge = ages[0]
const maxAge = ages[count]
const medianAge = ages[count/2]
let avgAge = 0
for(let i = 0; i <= count; i++) {
    avgAge += ages[i]
}
avgAge = avgAge/(count+1);
console.log("Avg", avgAge);

const rangeAges = maxAge - minAge
const minRange = Math.abs(minAge - avgAge)
const maxRange = Math.abs(maxAge - avgAge)
console.log(minRange, maxRange);

//1 - Slice the first ten countries from the countries array
countries.slice(0,10)

//2 - Find the middle country(ies) in the countries array
const nrCountries = countries.length
if(nrCountries%2 === 0) {
    console.log(countries[nrCountries/2]);
}  else {
    console.log(countries[nrCountries/2], countries[(nrCountries/2) + 1]);
}

//3 - Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstPart = []
let secondPart = []
if(nrCountries%2 === 0) {
    firstPart = countries.slice(0,nrCountries/2)
    secondPart = countries.slice(nrCountries/2,nrCountries)
}  else {
    firstPart = countries.slice(0,(nrCountries/2) + 1)
    secondPart = countries.slice((nrCountries/2) + 1,nrCountries)
}
console.log(countries);
console.log(firstPart);
console.log(secondPart);

// -------------------------- CONDITIONAL -----------------------------
//Level 1
//1 - Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
//const userAge = prompt("Enter your age:")

//userAge >= 18 ? console.log("You are old enough to drive") : console.log("Wait for " + (18 - Number(userAge)) + " years, u turn 18 years old!")

//2 - Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// const myAge = 29
// const userAge = prompt("Enter your age:")
// if(myAge > userAge) console.log("I'm older than you by " + (myAge - userAge));
// else {
//     if(myAge < userAge) console.log("You're " + (userAge - myAge) + " years older than me");
//     else console.log("We have the same age");
// }


//3 - If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
// using if else
// ternary operator.
let a = 4
let b = 3
// if(a > b) console.log("a is greater than b");
// else console.log("a is less than b");
a > b ? console.log( a + " is greater than " + b) : console.log( a + " is less than " + b);

//4 - Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// const userNumber = prompt("Enter a number")
// userNumber%2 === 0 ? console.log(userNumber + " is an even number") : console.log(userNumber + " is an odd number");

//Level 2
//1 - Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// let scores = prompt("Enter your score:")
// switch(true) {
//     case scores <= 49:
//         console.log("Grade F");
//         break
//     case scores <= 59:
//         console.log("Grade D");
//         break;
//     case scores <= 69:
//         console.log("Grade C");
//         break;
//     case scores <= 89:
//         console.log("Grade B");
//         break;
//     case scores <= 100:
//         console.log("Grade A");
//         break;
// }

//2 - Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
const arrAutumn = ["September, October", "November"]
const arrWinter = ["December", "Janyary", "February"]
const arrSpring = ["March", "April", "May"]
const arrSummer = ["June", "July", "August"]
// const currentMonth = prompt("Enter current month:")
// switch(true) {
//     case arrAutumn.includes(currentMonth):
//         console.log("We are in Autumn");
//         break
//     case arrWinter.includes(currentMonth):
//         console.log("We are in Winter");
//         break
//     case arrSpring.includes(currentMonth):
//         console.log("We are in Spring");
//         break
//     case arrSummer.includes(currentMonth):
//         console.log("We are in Summer");
//         break
//     default:
//         console.log("Mese inserito in maniera errata");
// }

//3 - Check if a day is weekend day or a working day. Your script will take day as an input.
const arrWorkingDays = ["monday", "tuesday", "wednesday", "thursday", "friday"]
const arrWeekendDays = ["saturday", "sunday"]
// const today = prompt("Enter a day:")
// if(arrWorkingDays.includes(today.toLowerCase())) console.log(today + " is a working day");
// else if(arrWeekendDays.includes(today.toLowerCase())) console.log(today + " is a weekend day");
// else console.log("Giorno inserito in maniera errata");

// Level 3
//1 - Write a program which tells the number of days in a month.
// const month = prompt("Enter a month:").toLowerCase()
// switch(true) {
//     case month === "january":
//         console.log("January has 31 days");
//         break
//     case month === "february":
//         console.log("February has 28 days");
//         break
//     case month === "march":
//         console.log("March has 31 days");
//         break
// }

// -------------------------- OBJECTS -----------------------------
// Level 1
let dog = {}
dog = {
    name:"Django",
    legs: 2,
    color: "Black and White",
    age: 4,
    
    bark: function() {
        return "woof woof";
    },

    breed: "boh",
    
    getDogInfo:function() {
        console.log(this);
    }
}
dog.getDogInfo()

// Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//1 - Find the person who has many skills in the users object.
let maxSkills = 0
let userWithMoreSkills = ""
for(let user in users) {
    if(users[user].skills.length > maxSkills) userWithMoreSkills = users[user]
}
console.log(userWithMoreSkills);

//2 - Count logged in users,count users having greater than equal to 50 points from the following object.
let loggedIn = 0
let morePoints = 0
for(let user in users) {
    if(users[user].isLoggedIn) loggedIn++
    if(users[user].points >= 50) morePoints++
}
console.log("Users loggati: " + loggedIn, "Users with more than 49 points: " + morePoints);
 
//3 - Find people who are MERN stack developer from the users object
const mernStack = ["MongoDB", "Express", "React", "Node"]
for(let user in users) {
    let i = 0
    mernStack.forEach(element => {
        if(users[user].skills.includes(element)) i++
    });
    if(i === 4) console.log(users[user]);
}

//4 - Set your name in the users object without modifying the original users object
const myName = "Giuseppe"

const updatedUsers = {
    ...users,
    [myName] : {
        email: "giuseppe@gmail.com",
        skills: ["HTML","CSS","JS","TS","Angular","React","SQL Server","C#",".NET","Windev"],
        age: 29,
        isLoggedIn: false,
        points: 100
    }
}
console.log(updatedUsers);

//5 - Get all keys or properties of users object
const keys = Object.keys(users)
console.log(keys);

//6 - Get all the values of users object
const values = Object.values(users)
console.log(values);

//Level 3
//1 - Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
    firstName: "",
    lastName: "",
    incomes: {
        incomes: 0,
        description: ""
    },
    expenses: {
        expenses: 0,
        description: ""
    },

    totalIncome:function() {
        let total = 0
        for(let inc in this.incomes) total += this.incomes[inc]
        console.log(total);
    },

    totalExpense:function() {
        let total = 0
        for(let exp in this.expenses) total += this.expenses[exp]
        console.log(total);
    },
    accountInfo:function() {
        console.log(this);
    },
    //Income ed Expense si possono fare come array di oggetti ed aggiungerli con push
    addIncome:function() {
        this.incomes.incomes = 50
        this.incomes.description = "stipendio"
    },
    accountBalance:function() {
        console.log("Account Balance: ",this.incomes.incomes - this.expenses.expenses)
    }
}

//2 - Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
//b. Create a function called signIn which allows user to sign in to the application
const users2 = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

  function signUp() {
    let user = {
        _id: 'ccccc',
        username: "Giuseppe",
        email: "",
        password: "aaaa",
        createdAt: "01/01/2025",
        isLoggedIn: false
    }
    const userExist = users2.some(element => element.username === user.username)
    if(userExist) console.log("You already have an account");
    else {
        users2.push(user)
        console.log("Registrazione avvenuta con successo");
    }
  }
signUp()

function signIn(username) {
    const user = users2.find(user => user.username === username)
    if(!user) console.log("Utente non trovato!");
    else {
        user.loggedIn = true
        console.log(user);
    }
}
signIn("Thomas")

//3 - The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
function rateProduct(id) {
    const product = products.find(prod => prod._id === id)
    if(!product) console.log("Prodotto non trovato");
    else {
        product.ratings.push({userId:"aaaa", rate:4})
    }
}

function averageRating() {
    let c = 0
    let sumRating = 0
    for(let prod in products) {
        for(let i = 0; i < products[prod].ratings.length;i++) {
            sumRating += products[prod].ratings[i].rate
            c++
        }
    }
    console.log("Media Rating: " + sumRating/c);
}
averageRating()

//4 - Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(id) {
    const product = products.find(prod => prod._id === id)
    if(!product) console.log("Prodotto non trovato");
    else if(product.likes.length >= 1) product.likes.pop()
        else product.likes.push("aaaaa")
}
likeProduct("hedfcg")
console.log(products);

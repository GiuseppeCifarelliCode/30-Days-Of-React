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

// -------------------------- FUNCTION -----------------------------
//Level 1
//1 - Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  return firstName + " " + lastName
}

//2 - Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
  return num1 + num2
}

//3 - Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function areaOfCircle(r) {
  return 3.14 * r * r
}

//4 - Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(C) {
  return ((C * 9/5) + 32)
}

//5 - Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function calculateBMI(weight, height) {
  const bmi = weight / (height * height)
  switch(true) {
    case bmi < 18.5:
      return ("Underweight")

    case(bmi < 24.9):
      return "Normal weight"

    case(bmi < 29.9):
    return "Overweight"
      
    case(bmi >= 30):
    return "Obese"
  }
}
console.log(calculateBMI(72,1.76));

//6 - Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  switch(true) {
    case arrAutumn.includes(month):
      return "Autumm"

    case arrSpring.includes(month):
      return "Spring"

    case arrSummer.includes(month):
      return "Summer"

    case arrWinter.includes(month):
      return "Winter"
  }
}

//Level 2
//1 - Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadraticEquation(a, b, c) {
  let resPos = (-b + Math.sqrt(b*b - 4*a*c))/2*a
  let resNeg = (-b - Math.sqrt(b*b - 4*a*c))/2*a
  return [resPos, resNeg]
}
console.log(solveQuadraticEquation(1,7,12))

//2 - Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  arr.forEach(element => {
    console.log(element);
  });
}

//3 - Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()
  const hour = date.getHours()
  const minute = date.getMinutes()
  console.log(year + "/" + month + "/" + day + " " + hour + ":" + minute);
}
showDateTime()

//4 - Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x , y) {
  const a = y
  const b = x
  x = a
  y = b
}

//5 - Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method)
function reverseArray(arr) {
  let reversedArray = []
  for(let i = arr.length - 1; i >= 0; i--)
    reversedArray.push(arr[i])
  return reversedArray
}

//6 - Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
  for(let i = 0; i <= arr.length - 1; i++)
    arr[i].toUpperCase()
}

let myArray = []
//7 - Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
  myArray.push(item)
}
addItem(3)
console.log("My Array",myArray);

//8 - Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index) {
  const count = myArray.length
  if(index >= count) console.log("Non esiste un elemento in quell'indice");
  else {
    myArray.splice(index,1)
  }
}

//9 - Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num) {
  let countEven = 0
  let countOdd = 0
  for(let i = 1; i <= num; i++) {
    i % 2 === 0 ? countEven++ : countOdd++
  }
  console.log("The number of odds are " + countOdd);
  console.log("The number of evens are " + countEven);
}
evensAndOdds(5)

//10 - Write a function which takes any number of arguments and return the sum of the arguments
function sum(...arg) {
  let sum = 0
  for(const element of arg) sum += element
  return sum
}
console.log(sum(1,2,3))

//11 - Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(nChar) {
  let result = ""
  const character = "abcdefghjklmnopqrstuvwxyz123456789"
  const characterLength = character.length
  let counter = 0
  while(counter < nChar) {
    result += character.charAt(Math.floor(Math.random() * characterLength));
    counter++
  }
  return result
}
console.log(userIdGenerator(7));

//Level 3
//1 - Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
const nrChar = prompt("Inserisci il numero di caratteri per le password")
const nrPw = prompt("Quante password devo generare?")
for(let i = 0; i < nrPw; i++) {
  console.log(userIdGenerator(nrChar));
  }
}
//userIdGeneratedByUser()

//2 - Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type, nrColors) {
  let arrColors = []
  if(type.toUpperCase() === 'HEXA') {
    const character = "abcdefghjklmnopqrstuvwxyz123456789"
    const characterLength = character.length
    for(let i = 0; i < nrColors; i++) {
      let result = ""
      let counter = 0
      while(counter < 6) {
        result += character.charAt(Math.floor(Math.random() * characterLength));
        counter++
      }
      result = "#" + result
      arrColors.push(result)
    }
    console.log(arrColors);

  } else if(type.toUpperCase() === 'RGB') {
      for(let i = 0; i < nrColors; i++) {
        let result = ""
        let counter = 0
        while(counter < 3) {
          if(counter === 2) {
            result += Math.floor(Math.random() * 256)
          } else result += Math.floor(Math.random() * 256)+ ", ";
          counter++
        }
        result = "rgb(" + result + ")"
        arrColors.push(result)
      }
          console.log(arrColors);
  } else alert("tipo non riconosciuto")
}
generateColors("rgb",4)

//3 - Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(myArr) {
  for (let i = myArr.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [myArr[i], myArr[j]] = [myArr[j], myArr[i]]; 
  } 
  return myArr; 
}

console.log(shuffleArray(["ciao","banana","mela","pera","cioccolato"]))

//4 - Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num) {
  let result = 1
  for(let i = 1; i <= num; i++) {
    result = result * i
  }
  return result
}

console.log(factorial(4));

//5 - Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(par) {
  if(par) console.log("Non è vuoto");
  else console.log("Vuoto");
}
isEmpty(0)

//6 - Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(myArr) {
  let avg = 0
  for(let i = 0; i < myArr.length; i++) {
    if(typeof myArr[i] === 'number') {
      avg += myArr[i]
    } else {
        alert("NaN")
        return
      }
  }
  avg = avg/myArr.length
  return avg
}

console.log(average([2,4,6]))

// -------------------------- FUNCTIONAL PROGRAMMING -----------------------------
const products2 = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//1 - Print the price of each product using forEach
products2.forEach(prod => console.log(prod.price));

//2 - Print the product items as follows using forEach
products2.forEach(prod => typeof(prod.price) === "number" ? console.log("The price of " + prod.product + " is " + prod.price + " euros") :console.log("The price of " + prod.product + " is unkown")
)

//3 - Calculate the sum of all the prices using forEach
let somma = 0
products2.forEach(prod => typeof(prod.price) === "number" ? somma += prod.price : somma = somma)

//4 - Create an array of prices using map and store it in a variable prices
let prices = products2.map(prod => prod.price)
console.log(prices);

//5 - Filter products with prices
console.log(products2.filter(prod => typeof(prod.price) === "number"))

//6 - Use method chaining to get the sum of the prices(map, filter, reduce)
somma = products2.map(prod => prod.price).filter(price => typeof(price) === "number").reduce((prod,prod2) => prod + prod2)
console.log(somma);

//7 - Calculate the sum of all the prices using reduce only
somma = products2.reduce((sum,item) => {
const price = parseFloat(item.price) || 0
return sum + price
},0)
console.log(somma);

//8 - Find the first product which doesn't have a price value
console.log(products2.find((item) => typeof(item.price) !== "number" ));

//9 - Find the index of the first product which does not have price value
console.log(products2.findIndex(item => typeof(item.price) !== "number"));

//10 - Check if some products do not have a price value
products2.some(item => typeof(item.price) !== "number")

//11 - Check if all the products have price value
console.log("Tutti hanno un prezzo?",products2.every(item => typeof(item.price) === "number"))

// -------------------------- CLASSES -----------------------------
//Level 1
//1 - Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }

  getInfo() {
    console.log(`I'm ${this.name} of ${this.age} yo`);
  }

  makeNoise(noise) {
    console.log(noise);
  }
}

//2 - Create a Dog and Cat child class from the Animal Class.
//Level 2
//1 - Override the method you create in Animal class

class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs)
  }

  makeNoise() {
    console.log("Woof");
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs)
  }

  makeNoise() {
    console.log("Miao");
  }
}

let django = new Dog("Django", 4, "Black and White", 4)
django.getInfo()
django.makeNoise()






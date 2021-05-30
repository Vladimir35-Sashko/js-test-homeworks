// ==============MODULE 2===================
// =================2======================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//    if (password === ADMIN_PASSWORD) {
//    return "Welcome!";
//   }  return "Access denied, wrong password!";
//   }
// ================3==========================
// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//      return "Your order is empty!";
//   } if (ordered > available) {
//      return "Your order is too large, not enough goods in stock!";
//   }  return "The order is accepted, our manager will contact you";
//   }
// ================4========================
// const fruits = ["apple", "plum", "pear", "orange"]
// console.log(fruits)
// ===============6============
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);
// ====================7=========================
// const fruits = ["apple", "peach", "pear", "banana"];
// console.log(fruits.length);
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);
// ===================8=======================
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];
// =================9====================
// function getExtremeElements(array) {
//  array = [array[0] ,array[array.length-1]];
// return array;
// }
// ==================10========================
// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//     return words;
// }
// ====================11============================
// function calculateEngravingPrice(message, pricePerWord) {
//    let totalPrice;
//   totalPrice = (message.split(" ").length * pricePerWord);
//   return totalPrice;
//  }
// ====================12=====================
// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);
//   return string;
// }
// ====================13===============
// function slugify(title) {
//     const slug = title.toLowerCase().split(' ').join('-');
//     return slug;
// }
// ======================14===============
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);
// =========================15===============
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// =========================16===================
// function makeArray(firstArray, secondArray, maxLength) {
//     let arr = firstArray.concat(secondArray);
//    if (arr.length>maxLength) {
//         arr.length = maxLength;
//        return arr;
//     }
//     return arr.slice(0,);
// }
// ====================17================
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1)
//   console.log(i);
// ========================18=================
// function calculateTotal(number) {
//     let total = 0;
//     for (i = 1; i <= number; i += 1) {
//         total += i;
//     }
//     return total;
// }
// ======================19==================
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i+= 1) { 
//   const fruit = fruits[i]; 
//   console.log(fruit);
// }
// =======================20==================
// function calculateTotalPrice(order) {
//   let total = 0;
//    for ( let i = 0; i < order.length ; i += 1) {
//         total += order[i];
//     }
//   return total;
// }
// =====================21===================
// function findLongestWord(string) {
// 	const arrayString = string.split(" ");
// 	let longestWord = arrayString[0];
// 	for (let i = 0; i < arrayString.length; i+=1) {
// 		if (longestWord.length < arrayString[i].length) {
// 			longestWord = arrayString[i];
// 		}
// 	}
// 	return longestWord;
// }
// ========================22=========================
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//     for(let i = min; i<=max; i+=1){
//   numbers.push(i);
//   }
//   return numbers;
// }
// =======================23=========================
// function filterArray(numbers, value) {
//   const result = [];
//     for (let i = 0; i < numbers.length; i += 1)
//     {
//         if (numbers[i] > value) { result.push(numbers[i]); }
// }
//   return result;
// }
// =======================24=========================
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//    return fruits.includes(fruit); 
// }
// =======================25=========================
// function getCommonElements(array1, array2) {
//  const uniqieElements = [];
//   for (const element of array1) {
//  if (array2.includes(element)) {
//       uniqieElements.push(element);
//         }
// }
//   return uniqieElements;
// }
// =======================26========================
// function calculateTotalPrice(order) {
//   let total = 0;
//  for (const number of order)
//    {
//     total += number;
//   }
//    return total;
// }
// =======================27=====================
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
// for ( const number of numbers)
//    {
//       if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
//  }
// =====================28===================
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;
// ==================29=====================
// function getEvenNumbers(start, end) {
//   const sum = [];
//   for (let i = start; i <= end; i+=1) {
//     if (i%2 === 0) {sum.push(i)}}
// return sum;
//       }
// =========================30==================
// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// ============================31======================
// function findNumber(start, end, divisor) {
//    for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//      return i;
//     }
//   }
//  }
// =========================32=========================
// function includes(array, value) {
//   for (i = 0; i <= array.length; i += 1){
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
//   }




// ===================MODULE 3 ============================


// =================3=======================

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city centre',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
//     const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;

// ========================4=================

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// =====================5====================

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// ===============6=================

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// ==========================7================

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city centre',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
//   };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
// country: "Jamaica",
// city: "Kingston"
// }
// console.log(apartment)

// ====================8==================

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   name,
//   price,
//   image,
//   tags
//   };

// =====================9================

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam"
//   };

// ====================10=================

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment){
// keys.push(key);
//   values.push(apartment[key])
// }

// ========================11==================

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city centre';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//  if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);}
//   }

// ====================12======================
// function countProps(object) {
//   let propCount = 0;
//     for (const key in object){
// if (object.hasOwnProperty(key)){
// propCount += object.hasOwnProperty(key);
// }}
//     return propCount;
// }

// =====================13==================

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
// values.push(apartment[key]);
// }

// =====================14=====================

// function countProps(object) {
//    let propCount = 0;
//   propCount = Object.keys(object).length;
//   return propCount;
//   }

// ==========================15====================

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// ====================16=====================

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//  const values = Object.values(salaries);
// for (const value of values) {
// totalSalary+=value
// }
//   return totalSalary;
// }

// =====================17================

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
// hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//   }

// ======================18===================

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//    for (const product of products){
//   let name = product.name;
//     if (productName===name){
//     return product.price; 
//     }
//   }
//   return null;
//   }

// =======================19====================

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const array = [];
//   for (const product of products){
//  if (product[propName]) {
//       array.push(product[propName]);
//     }
//   }
//   return array;
//    }

// ========================20=====================

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let total = 0;
// for (const product of products){
// let name = product.name;
//   if (productName===name){
//   total = product.price*product.quantity
//   }
// }
// return total;
//  }

// =====================21=====================

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday,today,tomorrow} = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// =========================22=========================

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
// yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// =========================23======================

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
// yesterday:highYesterday,
//   today:highToday,
//   tomorrow:highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// }= highTemperatures;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ======================24============================

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const {hex,rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// ===================25========================

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
// today:{high:highToday,
//   low:lowToday,
//   icon:todayIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//   tomorrow:{high:highTomorrow,
//   low:lowTomorrow,
//   icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
// }= forecast;

// ==============================26==========================

// function calculateMeanTemperature(forecast) {
 
// const {
// today:{low:todayLow, high:todayHigh},
//   tomorrow:{low:tomorrowLow,high:tomorrowHigh},
// }
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// ============================27==========================

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// ============================28============================

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// =======================29==========================

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = {...defaultSettings,...overrideSettings};

// ========================30=========================

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//  const newData = {completed, category, priority, ... data};
//    return newData;
//   }

// ======================31====================

// function add(...args) {
//   let total=0;
//   for (const arg of args){
//     total += arg;
//   }
//   return total;
// }

// ================32==========================
// function addOverNum(firstNumber,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg>firstNumber){
//     total += arg;}
//   }
//   return total;
//   }

// ===================33=====================

// function findMatches(...args)
//  {  const matches = [];
//  for (let i = 1; i < args.length; i += 1) {
//  if (args[0].includes(args[i])) {      matches.push(args[i]);
//  }
//  }
// return matches;
// } 

// ====================34========================

// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// ===================35==========================

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//    	const index = this.books.indexOf(oldName);
//     this.books.splice(index,1,newName);
// 	  },
// };

// =========================36======================

// const atTheOldToad = {
//   potions:[],
//   };

// ========================37=======================

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions(){
//   return this.potions;
//   }
//   };

// ========================38=============================

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//       },
// };

// =========================39============================

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
   
//   const bookIndex = this.potions.indexOf(potionName);
//    return this.potions.splice(bookIndex,1);
//       },
// };

// =========================40======================

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//      	const index = this.potions.indexOf(oldName);
//     this.potions.splice(index,1,newName);
//       },
// };

// ==========================41=====================

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//     getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     const { potions } = this;
//     const { name } = potionName;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === name) {
//         return `Potion ${name} is already equipped!`;
//       }
//       potions.push(potionName);
//     }
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === potionName) {
//         potions.splice(i, 1);
//         return potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === oldName) {
//         potions[i].name = newName;
//         return potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//  };
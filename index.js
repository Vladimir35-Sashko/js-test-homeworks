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

// =====================МОДУЛЬ 4=======================

// =========================3====================

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });


// makePizza('Ультрасыр',function eatPizza(pizzaName) {
// console.log(`Едим пиццу ${pizzaName}.`);
// });

// ========================4=========================

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName,onSuccess,onError) {
//   if (pizzaPalace.pizzas.includes(pizzaName)){
//       return makePizza(pizzaName);
//   }
//    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
//     },
// };

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// ===========================5==========================

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//    checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   };

// ==========================6===============================

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
  
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// ===========================7============================

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }
// const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//   messages.push(composeMessage.call(orders[i], i + 1));
// }

// ==============================8==============================

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }

// =============================9=========================

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');

// ============================10=============================

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']


// ========================МОДУЛЬ 5=============================

// ===========================5======================

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// Car.prototype.getPrice = function() {
//   return this.price;
// };

// Car.prototype.changePrice = function(newPrice){
// this.price = newPrice;
// };

// =============================6============================

// function Storage(items){
// this.items = items;
// };

// Storage.prototype.getItems = function() {
// return this.items;
// };

// Storage.prototype.addItem = function(newItem){
//  return this.items.push(newItem);
// };

// Storage.prototype.removeItem = function(item){
// return this.items.splice(this.items.indexOf(item),1);
// };

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ==============================7===========================

// function StringBuilder(baseValue){
// this.value = baseValue;
// };

// StringBuilder.prototype.getValue = function(){
// return this.value;
// };

// StringBuilder.prototype.padEnd = function(str){
// this.value += str;
// };

// StringBuilder.prototype.padStart = function(str){
// this.value = str + this.value;
//  };

// StringBuilder.prototype.padBoth = function(str){
// this.value = str+this.value+str;
// };

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// ========================8=========================

// class Car {}

// ============================9=======================

// class Car{
//   brand;
//   model;
//   price;
// constructor ({brand,model,price}){
// this.brand = brand;
//   this.model = model;
//   this.price = price;
// }  
// }


// ========================10======================

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// ========================11========================

// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// ========================12=======================

// class Storage {
//   #items;
//   constructor(items){
//   this.#items = items;
// }

// getItems() {
//   return this.#items;
// };

// addItem(newItem) {
//   this.#items.push(newItem);
// };

// removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };
// }

// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// ==========================13============================

// class StringBuilder {
//   #value;
//   constructor(baseValue){
//   this.#value = baseValue;
// }

// getValue() {
//   return this.#value;
// };

// padEnd(str) {
//   this.#value += str;
// };

// padStart(str) {
//   this.#value = str + this.#value;
// };

// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// ===============================14========================

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// ============================15======================

// class Car {
//    static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE){
//     return;
//     }
//     this.#price = newPrice;
//   }
  
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// ===========================16==========================

// class Car {
//   static #MAX_PRICE = 50000;
//   static checkPrice(price){
// if (price>this.#MAX_PRICE){
// return 'Внимание! Цена превышает допустимую.';
// }
//   return 'Всё хорошо, цена в порядке.';
// }
//     constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// ===================================17===========================

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
// static AccessLevel={ BASIC: 'basic', SUPERUSER: 'superuser' }
// }

// ===============================18========================

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//  accessLevel;
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
//   constructor({email,accessLevel}){
//   super(email);
//     this.accessLevel=accessLevel;
//   }

//  }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// =======================================19=========================

// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
//   accessLevel;
//   blacklistedEmails;
//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
// this.blacklistedEmails = blacklistedEmails;
//   }
// blacklist(email) {
// this.blacklistedEmails.push(email);
// }
// isBlacklisted(email) {
// if (this.blacklistedEmails.includes(email)) {
// return true;
// }
// return false;
// }
//  }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 

// ====================MODULE 6=============================

// ==============================1===========================

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//    orderedItems.forEach(function (orderedItem) {totalPrice += orderedItem; });
//        return totalPrice;
// };

// ==============================2============================

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//       numbers.forEach(function(number) {
//       if (number > value) 
//         filteredNumbers.push(number)
//       });
//          return filteredNumbers;
//   }

// ==========================3==============================

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//        firstArray.forEach((elem) =>
//     secondArray.includes(elem) ? commonElements.push(elem) : elem,
//   );
  
//     return commonElements;
//      }

// =========================4==============================

// const calculateTotalPrice =(quantity, pricePerItem)=> {
//   return quantity * pricePerItem;
// }

// ======================5======================

// const calculateTotalPrice = (quantity, pricePerItem) => 
//    quantity * pricePerItem;

// =========================6========================

// const calculateTotalPrice = (orderedItems)=> {
//   let totalPrice = 0;

//   orderedItems.forEach(item => 
//     totalPrice += item);
// return totalPrice;};

// =======================7==========================

// const filterArray = (numbers, value)=> {
//     const filteredNumbers = [];
  
//     numbers.forEach((number)=> {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
//          return filteredNumbers;
//   }

// =======================8========================

// const getCommonElements=(firstArray, secondArray)=> {
//     const commonElements = [];
  
//     firstArray.forEach((element)=> {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
//           return commonElements;
//   }

// ====================9=======================

// function changeEven(numbers, value) {
//        const newArray = [];
// numbers.forEach((number) => {
// if (number % 2 === 0) {
// newArray.push(number + value);
// } else
// newArray.push(number);
// });
// return newArray;
//      }

// =====================10===========================

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// const planetsLengths = planets.map((planet)=> planet.length);

// =========================11==========================

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//      const titles = books.map(books=>books.title);

// ==============================12==========================

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
    
//   const genres = books.flatMap(books=>books.genres);

// ===========================13==========================

// const getUserNames = users => {
//      return users.map(users=>users.name)

//   };

// ==========================14=====================

// const getUserEmails = users => {
//   return users.map(users=>users.email)  

//   };

// =======================15=============================

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(numbers=>numbers%2===0);
// const oddNumbers = numbers.filter(numbers=>numbers%2!=0);

// =========================16=============================

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//     const allGenres = books.flatMap(books=>books.genres);
//   const uniqueGenres = allGenres.filter( (genres, index, array) => array.indexOf(genres) === index
// );

// ===================17===========================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// const topRatedBooks = books.filter(books=>books.rating>=MIN_RATING);
// const booksByAuthor = books.filter(books=>books.author === AUTHOR);

// =========================18============================

// const getUsersWithEyeColor = (users, color) => {
//  return users.filter(users=>users.eyeColor===color)

// };

// ===========================19===========================

// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(users=>users.age>=minAge && users.age<=maxAge)

// };

// =====================20============================

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(users=>users.friends.includes(friendName)) 
// };

// ========================21======================


// const getFriends = (users) => {
//   const allFriends= users.flatMap(users=>users.friends);
//    return allFriends.filter((friends, index, array) => array.indexOf(friends) === index)
// };

// ===========================22==============================

// const getActiveUsers = (users) => {
//   return users.filter(users=> users.isActive===true) 
// };

// =========================23===========================

// const getInactiveUsers = (users) => {
//   return users.filter(users=>users.isActive===false) 
  
// };

// ========================24============================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';

// const bookWithTitle = books.find(books=>books.title===BOOK_TITLE);
// const bookByAuthor = books.find(books=>books.author===AUTHOR);

// ==========================25================================

// const getUserWithEmail = (users, email) => {
//   return  users.find(users=>users.email===email)
// };

// =======================26=========================

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every((value)=>value%2===0);
// const eachElementInFirstIsOdd = firstArray.every((value)=>value%2!=0);

// const eachElementInSecondIsEven = secondArray.every((value)=>value%2===0);
// const eachElementInSecondIsOdd = secondArray.every((value)=>value%2!=0);;

// const eachElementInThirdIsEven = thirdArray.every((value)=>value%2===0);
// const eachElementInThirdIsOdd = thirdArray.every((value)=>value%2!=0);;

// ===========================27=============================

// const isEveryUserActive = (users) => {
//   return users.every(users=>users.isActive===true);
//  };

// ===========================28=============================

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some((value)=>value%2===0);
// const anyElementInFirstIsOdd = firstArray.some((value)=>value%2!=0);

// const anyElementInSecondIsEven = secondArray.some((value)=>value%2===0);
// const anyElementInSecondIsOdd = secondArray.some((value)=>value%2!=0);

// const anyElementInThirdIsEven = thirdArray.some((value)=>value%2===0);
// const anyElementInThirdIsOdd = thirdArray.some((value)=>value%2!=0);

// =========================29=================================

// const isAnyUserActive = users => {
//   return users.some(users=>users.isActive===true) 
// };

// =========================30==========================

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc,playtimes)=>{
// return acc + playtimes;
// },0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// ===========================31===========================

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, players)=>{ 
//   return acc + players.playtime / players.gamesPlayed;},0);

// =======================32========================

// const calculateTotalBalance = users => {
  
//  return users.reduce((acc,users)=>{
//   return acc + users.balance;
//   },0); 
// };

// ======================33==========================

// const getTotalFriendCount = users => {
//    return users.reduce((acc,users)=>{
//   return acc + users.friends.length;
//   },0); 
// };

// =====================34====================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// ======================35=========================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=>a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b)=>b-a);

// =========================36=======================

// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//      const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));

// ======================37=============================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const sortedByAuthorName = [...books].sort((a,b)=>a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b)=>b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a,b)=>a.rating-b.rating);

// const sortedByDescentingRating = [...books].sort((a,b)=>b.rating-a.rating);

// ===============================38======================

// const sortByAscendingBalance = users => {
//    return [...users].sort((a,b)=>a.balance-b.balance)
// };

// ===========================39===================

// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a,b)=>b.friends.length-a.friends.length) 
// };

// ==========================40========================

// const sortByName = users => {
//   return [...users].sort((a,b)=>a.name.localeCompare(b.name)) 
// };

// =======================41======================

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;

// const names = [...books].filter(books=>books.rating>MIN_BOOK_RATING)
// .map((books)=>books.author)
// .sort() 
// ;

// ====================42========================

// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((a,b)=>a.friends.length-b.friends.length).map((users)=>users.name) 
// };

// ===================43=====================

// const getSortedFriends = users => {
//  return [...users].flatMap(users=>users.friends).sort((a,b)=>a.localeCompare(b)).filter( (friends, index, array) => array.indexOf(friends) === index)
// };

// =======================44========================

// const getTotalBalanceByGender = (users, gender) => {
//     return users
//     .filter(user => user.gender === gender)
//     .reduce((acc, { balance }) => acc + balance, 0);
// };
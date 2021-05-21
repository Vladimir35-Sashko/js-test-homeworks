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

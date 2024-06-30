//1
//let str1="Home";
//let str2="Work";
//console.log(str1+str2);

//2
//let a=5;
//let b=7;
//console.log(a+b);

//3
//let str="homework";
//console.log(str.lenght);

//4
// let str="homework";
// console.log(str.toUpperCase());

//5
//let num="5";
//console.log(typeof num);

//6
// let num = 5;
// if (num >= 0) {
//     alert("eded musbetdir")
// }
//  else {
//     alert("eded menfidir")
// }

//7
// let str ="home work";
// let hasword = str.includes("work")
// console.log(hasword);

//8
// let string1="HOME"
// let string2="WORK"
// console.log(string1===string2);

//9
//let str="homework";
//let sliced=str.slice(2,6);
//console.log(sliced);

//10
//let a=6;
//let b=5;
//let product=a*b;
//console.log(product);

//11
//let a=15;
//let b=4;
//let remainder=a%b;
//console.log(remainder);

//12
//let str1="home work";
//let str2="work home";
//let starts=str2.startsWith(str1);
//console.log(starts);

//13
//let str1="home work";
//let str2="work home";
//let ends=str2.endsWith(str1);
//console.log(ends);

//14
// let a = 5;
//  let b = 7;
// console.log(a != b);

// let a = 6;
// let ischeck = (a>0) ? "musbetdir" : "menfidir"
// console.log(ischeck)
// console.log("test")

//let age = Number(prompt("yasinizi qeyd edin"))

// if (age < 17) {
//     console.log("yasi kicikdir")
// } else {
//     console.log("yasi boyukdur")
// }

//ic-ice sert

// if (age > 17) {
//     if (age < 6){
//         console.log("usaq");
//     } else {
//         console.log("yeniyetme");
//     }
// }else {
//     console.log("yasi boyukdur");
// }

//daha qisa if

// if (age < 17 && age > 6) {
//     console.log("yeni yetme");
// } else if (age < 6) {
//     console.log("usaqdir");
// } else {
//     console.log("boyukdur")
// }

// function getAge(year) {
//     let  currentyear=2024
//     let result = currentyear-year
//     if (result<18) {
//         return `yeniyetmedir ${result}`
//     }
//         return result;

//     }
// // ??? asagiya nece cagirdiq???

// function createUserLi(index, name, year) {
//     let _liItem = document.createElement("li");
//     let age = 18
//     _liItem.textContent = `${index} ) ${name}, doguldugu il: ${year} yasi: ${age}`
//     return _liItem;

// }
// function createUserUL() {
//     let _ul = document.createElement("ul")
//     return _ul;
// }
// const _li1= createUserLi (1, "Aynur" , 2010);
// const _li2 = createUserLi(2, "Aydan" , 2000);
// let ul1 = createUserUL()
// ul1.append(_li1)
// ul1.append(_li2)

// document.body.append(ul1);

// for (let i=0; i<5; i++) {
//     let a=`mehsul ${i} <br>`
//     document.write(a)
// }

// Object

// let person = {
//     name: "Aytac",
//     age: 27,
//     city:"Baku"

// };
// person.name="Aynur"
// console.log(person.name);

// let arr=["nar", "banan", "alma" ]
// console.log(arr[2])

// let fruits = ['apple','banan','cherry'];
// let fruit = fruits.map(fruit => fruit.length)
// console.log(fruit);
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let filteredCount = numbers.filter(num => num % 2 === 0).length
// console.log(filteredCount);
//  let fruits = ['apple', 'banana', 'cherry'];
//  let newarr = fruits.join(',').split(', ')
//  console.log


// Named Functions
// function getAge(year){
//     const currentyear = 2024;
//     let age = currentyear - year;
//     return age
// }
//  let age = getAge(1995)
//  console.log(age)

// Anonymous Functions

// let age = function(year){
//     const currentyear = 2024;
//     let age = currentyear - year;
//     return age;
// }
// let age1 = age(1995);
// console.log(age1);

// Arrow Functions 
// let age = (year = 1995) => {
//     const currentyear = 2024;
//     let age = currentyear - year;
//     return age;
// }
// let age1 = age();
// console.log(age1);


// const basket = {
//     apple: 10,
//     banana: 15,
//     orange: 20
// };
// for(const item in basket){
//     console.log(item, basket.apple);
// }
        
// let now = new Date();
// console.log(now.getDate());



// let fruits = ["apple", "orange", "cherry"];
// fruits.forEach(fruit => console.log(fruit))
let numbers = [1,8,0,9,5];
console.log(numbers.reverse())


 
 






















//window.alert("hello js");
//document.write("<span>hello page</span>");
console.log("hello %cWeb life","color:red;font-size:40px");
//string type
console.log(typeof "samar");
//number
console.log(typeof 2500);
//object => array
console.log(typeof [10,15,17]);
//object
console.log(typeof {name:'samar',age:24, coyntry: "tunisia"});
var user = "samar";
console.log(user);
//hello.innerHTML = "life";
//concatenaation
let a = "we love";
let b = "javascript";
let c ="And";
let d ="Programming";
//document.write(a + " "+ b)
console.log(a + " " + b +"\n" + c + " "  + d);
let title ="elzero";
let desc = "web school"
let markup = '<div class="javascripy"> <div class="javascripy"> <h2>title</h2> <p>desc</p> </div> </div> ';
document.write(markup);

//math object 
 
 
console.log(Math.round((99.2)));
console.log(Math.round((99.5)));
console.log(Math.ceil((99.2)));
console.log(Math.floor((99.9)));
console.log(Math.max((99, 10, 20, 25, -2)));
console.log(Math.min((99, 10, -5, 25)));
console.log(Math.pow(2, 4));
console.log(Math.trunc(99.5))
//number challenge
let k =1_00;
let n =2_00.5;
let i =1e2;
let s =2.4;
//get integer "2"form d variable with 4 methods
console.log(Math.round((s)));
console.log(Math.trunc(s))
console.log(Math.floor((s)));
console.log(parseInt(s))
//find smallest number 
console.log(Math.min(k, n, i, s));
console.log(parseFloat(s));

//string method
let name = "  samar ";
console.log(name.charAt(1));
console.log(name.length);
console.log(name.trim()); //eliminer les espaces
console.log(name.toUpperCase());
console.log(name.toLowerCase());
let p = "i like javascript";
console.log(p.indexOf("like"));
console.log(p.indexOf("i"));
console.log(p.lastIndexOf("like"));

console.log(p.slice(2,6));
console.log(p.slice(-10));
console.log(p.repeat(6));
console.log(p.split(" "));
console.log(p.split(""));
console.log(p.split(" ", 2));
console.log(p.split("", 8));
console.log(p.substring(7, 17));
console.log(p.substring(p.length - 10));
console.log(p.substr(0, 6));
console.log(p.includes("javascript"));
console.log(p.startsWith("i"));
console.log(p.endsWith("i"));


//challange 
let l = "life web school";
//include this methods in your solution slice  
console.log(l.slice(4, 8)); // web 
//return array
console.log(l.split(" ", 3));
//comparison 

console.log(10 == "10"); //value only
console.log(-10 == "-10");//value only
console.log(10 != "10"); //value only

console.log(10 === "10"); //value +type
console.log(10 == "10" && 10 > 8); //true
console.log(10 == "10" && 10 > 8 && 10 < 8); //false
console.log(10 == "10" || 10 > 80 || 10 > 50 ); //true

// if conditions 
let price = 100;
let discount = false;
let discountAmount = 30;
let contry = "Tunisia";
let student = true;
if(discount === true){
    price -= discountAmount;
} else if (contry === "Tunisia") {
    if (student === true){
        price -= discountAmount + 30;  
    }else {
    price -= discountAmount + 10;
}
} else {
    price -= 10;
}
console.log(price);


let theName = "sahar";
let theGender = "femaile";
let theAge = "24";
if (theGender === "Male")
{
    console.log("Mr");
}else {
    console.log('Mrs');
}

//conditional tenary operator
theGender === "Male" ? console.log("Mrs") :  console.log('Mrs'); 


theAge < 20
? console.log(20)
: theAge > 20 && theAge < 60
? console.log("20 To 60")
:theAge > 60
? console.log("larger than 60")
:console.log("unknown");

let prix = 100;
console.log('the price is ' + prix ) ;

//challenge 
let st = "Elzero Web School";
if ((st.length*2).toString()=== "34") {
    console.log("Good");
  }
  
  // W Position May Change
  if (st[st.indexOf("W")].toLowerCase() === "w") {
    console.log("Good");
  }
  
  if (st.length !== "string") {
    console.log("Good");
  }
  
  if (typeof (st.length) === "number") {
    console.log("Good");
  }
  
  if (st.slice(0,6)+st.slice(0,6) === "ElzeroElzero") {
    console.log("Good");
  }

  //SWITCH STATEMENT 

  let day = 0;
  switch (day) {
    case 0:
      console.log("saturday");
      break;
      case 1:
      console.log("sunday");
      break;
      case 2:
      console.log("monday");
      break;
      default:
        console.log("unknown day");
  }
//challenge switch
let job = "Manager";
let salary = 0;
if (job === "Manager"){
  salary = 8000;
}else if (job === "it" || job === "support") {
  salary = 6000;
} 
else if (job === "devloper" || job === "designer") {
  salary = 7000;

}else {
   salary = 4000;
}
/*
let job = "Manager";
let salary = 0;
switch(job){
  case "Manager":
  salary = 8000;
  console.log("my salary is " + salary);
  break;
  case "it":
  case "support":
    salary = 6000;
   
    console.log("my salary is " + salary);
    break;
    case "devloper":
  case "designer":
    salary = 7000;
   
    console.log("my salary is " + salary);
    break;
    default:
    salary = 4000;
   
    console.log("my salary is " + salary);
    }
*/
    //array
    let myfriend = ["ahmed", "mohamed", "aymen", ["samar", "sahar"]];
    console.log('hello' +  " " + myfriend[0]);
    console.log('hello' +  " " + myfriend[3]);
    myfriend[1] = "nizar";
    console.log(myfriend);
    console.log(myfriend.length);

    //add and remove array 
    let friends = ["samar", "sahar", "leyla", "samar"];
    console.log(friends);
    friends.unshift("oussema", "bilel"); // add element to the first
    console.log(friends);
    friends.push("ahmed", "anis"); // add element to the end
    console.log(friends); 

friends.shift();
console.log(friends); //remove the first element
friends.pop();
console.log(friends); //remove the end element 
console.log(friends.indexOf("samar"));
console.log(friends.indexOf("samar", 2));
console.log(friends.lastIndexOf("samar"));
console.log(friends.includes("samar"));
let students = [10, "sayed", "mohamed", "90", 100, 20,"100", -10 , "10"];
console.log(students.sort());
console.log(students.reverse());
console.log(students.slice(1));
console.log(students.slice(1,3));
console.log(students.slice(-3));
students.splice(0, 0, "sammer", "samara");
console.log(students);



let scholl = ["hayhem", "ali"];
let college = ["salwa", "bi", "khalil"];
let news = ["selem", "bader"];
let all = college.concat(scholl, news, "gameel", [1,2]);
console.log(all);
console.log(all.join("@"));

// --loop --for
for (let i = 0; i < 10; i++){
  console.log(i);
};

let amis = [1,2, 40, "leyla", "sousou", "ali", "amira"];
let onlyname = [];
for (let i = 0; i < amis.length; i++){
if(typeof amis[i] === 'string'){
  onlyname.push(amis[i]);
}
};
console.log(onlyname);


/*for (let i = 0; i < 4; i++ )
{
console.log(amis[i]);
};

let products = ["keybord",  "mose", "pen", "pad", "ipad", 50, "monitor"];

let colors = ["red", "green", "black"];
let models = [2022, 2023];
let show = 5;

let inde = 0;
while (inde < 10){
  console.log(inde);
  inde++;
}
let friend = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;


while(counter<friend.length){
 if(typeof friend[counter]==="number"|| String(friend[counter]).charAt(index)==="A"){ 
   counter++;
   continue;
 }
  else{
    console.log(friend[counter]);
    counter++;
  }

}














document.write('<h1> show' + " " + show + " " + 'products </h1>');
for (let i = 0; i < show; i++) {
  document.write('<div>');
  document.write('<h3>' + [i+1] +products[i] + '</h3>')
  document.write('</div>');

}















/*for  (let i = 0; i < products.length; i++){
  console.log("#".repeat(2));
  console.log(products[i]);
  console.log("#".repeat(2));
  console.log('color :');
  for (let j = 0; i < colors.length; j++){
  console.log(colors[i]);
  };

};

for ( let i = 0; i < products.length; i++){
  if (typeof products[i] === "number"){
    continue; //remove the number 
  }
  console.log(products[i]);
};
*/

// function
function sayhello(user , age) {
if (age < 25) {
  console.log("hi" + " " + user + " "+ age);

}else 
{
  console.log("sorry your age > 25")
}}
sayhello("samar" , 24);


function calc (num1,num2){
  return num1+num2;
}
let result = calc(10,20);
console.log(result);


function generate(start,end){
  for ( let i = start; i <= end; i++){
    console.log(i);
    if (i === 15) {
      return 'interruptting';
    }
  }
}generate(10,20);

function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return 'final result is ' + " " + result ;
};
console.log(calc(10, 20, 10, 30, 50));





function showDetails (a, b, c) {
info = [a, b, c];
for (i = 0; i < 3; i++) {
if (typeof info[i] === "string"){
first = info[i];
} else if (typeof info[i] === "number"){
second = info[i];
} else if (typeof info[i] === "boolean"){
if ( info[i] === true){
third = "Available";
} else{ 
third = "Not Available";
}
}
}
};
showDetails( false, "Ahmed", 19);
//Try to change positions it will work
document.write(` Hello ${first}, Your Age Is ${second}, You Are ${third} To Hire`);

let users = {
  theName: "osma",
  theAge: 38,
  sayHello: function(){
    return'hello';
  },
};
console.log(users.theName);
console.log(users.theAge);
console.log(users.sayHello());

let per = {
  name :"samar",
  age:24,
  skills :["html","css","js"],
  available : false ,
  address: {
    pay:"tunisia",
    contry:"ben arouss"
  },
  chekAv: function () {
    if (available === true){
      return 'free for work';

    }
    else {
      return 'not free';
    }
  },
};
console.log(per.name);
console.log(per.age);
console.log(per.skills);
console.log(per.skills.join("|"));
console.log(per.skills[2]);






//this keyword 
document.getElementById("cl").onclick = function (){
  console.log(this);
};
let am = {
age:24,
ageInDays: function () {
  return this.age * 365;
},
};
console.log(am.age);


let moy = {
  age: 40,
  doubleAge: function () {
    return user.age * 2;
  },
};
console.log(moy);
console.log(moy.age);
console.log(moy.doubleAge());


let obj = Object.create({});
obj.a = 100;
console.log(obj);


//Dom
let my = document.getElementById("my-div");
let tag = document.getElementsByTagName("p");
let myClass = document.getElementsByClassName("my-span");
let myQuery = document.querySelector(".special");
let myQueryALL = document.querySelectorAll(".my-span");
console.log(my);
console.log(tag);
console.log(tag[1]);
console.log(myClass);
console.log(myQuery);
console.log(myQueryALL);
console.log(document.forms);
console.log(document.links[1].href);


let iner = document.querySelector(".js");


//iner.innerHTML ="Text form <span>main.js</span> file;"
//iner.textContent ="Text form <span>main.js</span> file;"
let mylink = document.querySelector(".link");
console.log(mylink.getAttribute("class"));
console.log(mylink.getAttribute("href"));
mylink.setAttribute("href", "https://instagrame.com");
mylink.setAttribute("title", "instagrame");
//dom css
let elements = document.getElementById("my-div");
elements.style.color = "red";
elements.style.cssText ="font-weight: bold; color: green; opacity: 0.9;"
elements.style.background = "blue";
//nabda dom men louel 
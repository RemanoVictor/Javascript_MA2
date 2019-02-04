//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function mobilePhone(brand, colour, size){
    this.brand = brand;
    this.colour = colour;
    this.size = size;
}

var phone1 = new mobilePhone(apple,fuschia,huge);

console.log(phone1);

mobilePhone.prototype.weight = function(){
    console.log( " heavy ");
}


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var array1 = [1,2,3,4,5,6,7,8,9,10];

var array2 = array1.slice(4,5);

console.log( array2 ); 


//3. Delete the last number in the array that you created above.

var array3 = array1.pop(9);

console.log(array3);


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

/*Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.*/

function fix(){
    var str1 = document.getElementById("change").innerHTML;
    var rep1 = str1.replace(/strawberries/gi, " bananas ");
    document.getElementById("change").innerHTML = rep1;
    }
fix();


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var myArray = ["kaiser chiefs", "orlando pirates", "morocco swallows", "cape town fc"];

console.log(myArray);

 function newArray(){
     var myArray = ["ford", "nissan", "toyota", "beetle"];
     console.log(myArray);
 }

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

let list1 =[ 
    {
      Name:"Rock-lee",
      Style:"tai-jutsu",
      Move: "severe leaf hurricane"
    },
    {
      Name:"Naruto Uzomaki",
      Style:"nin-jutsu",
      Move:"rasengan"
    },
    {
      Name:"Remano Victor",
      Style:"cry-jutsu",
      Move:"1000 tears of frustration"
    }
  ];
  
function searchPerson(Name){
return list1.filter(function(who){
return who.Name.toLowerCase().includes(Name.toLowerCase());
})
}

let gotcha = searchPerson("Remano");
console.log(gotcha);  
 
//7. Create a simple function that logs the date.

function newDate(){
    let today = new Date();
    console.log(today);
}
newDate();

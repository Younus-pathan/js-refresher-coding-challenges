function greet(name){
    return `hello,${name}`;
}
console.log(greet("YK"));

//2
function isEven(num){
   return num%2===0;
}
console.log(isEven(42));

//3
function sumArray(numbers){
  let sum=0;
 for(let i=0;i<numbers.length;i++){
    sum +=numbers[i];
 }
return sum;
}
console.log(sumArray([1,2,3,4,5]));

//4
function celsiusToFahrenheit(celsius){
var F=celsius*9/5+32
return F;
}

console.log(celsiusToFahrenheit(33));

//5
function findLarger(num1, num2){
    if(num1>num2){
        return num1;
    }
    return num2;
}

console.log(findLarger(45,46));

//6
function reverseString(str){
   if(str.length<=1) return str;
   return str.split('').reverse().join('');
}

console.log(reverseString("HELLO"));

//7
function countVowels(str){
    let vowels = 'aeiou';
    var count=0;
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Programming"));

function getFirstAndLast(nums){
    if(nums.length==0) return [];
    else if(nums.length==1) return [nums[0],nums[1]];

    return [nums[0],nums[nums.length-1]];
}

console.log(getFirstAndLast([1,2,3,4,5,9,21]));


function getProperty(obj,key){
   return obj[key];
}
console.log(getProperty({ name: "Bob", age: 30 }, "name"));


//new
const sum = (a,b)=>a+b;
console.log(sum(3,4))

const greetings= (name)=>`Hello! ${name}`
console.log(greetings("YK"))

const arr=[10,20,30,24]
let [first,second]=arr
console.log(`first is ${first} and second is ${second}`)


const obj={ name: "Alice", age: 30, city: "New York" }
console.log(obj.name,obj[`city`])

const arr1 = [1,2,3,4]
const arr2 = [5,6,7]
const joinedArray = [...arr1,...arr2]
console.log(joinedArray)

const pow=(base,exponent=2)=>Math.pow(base,exponent)
console.log(pow(5,3))

const double = arr1.map(n=>n*2)
console.log(arr1)


const example=(a)=>{
   let b = a.map(n=>n*n)
   console.log(b)

}
let a=[1,2,3,4,5]
example(a)



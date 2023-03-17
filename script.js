// // Q. find FIND IF GIVEN NO IS PRESENT IN array or not?
// var array =[1,2,443,232,546,23,567,676,2342,565,4,2,6]
// var number= 6;


// // console.log(array.includes(23))
// // var flag = false;
// // for (i=0; i<array.length;i++){
// //     if(array[i] === number){
// //         flag = true;
// //     }
// // }
// // if(flag === true){
// //     console.log("true")
// // }else{
// //     console.log("False")
// // }

// // find out number 689 from given array.

// // var array = [2,4,6,23,56,3224,454,23,54,56,232,689,233];
// // var number = 689;
// // // console.log(array.includes(689))
// // var flag=false;
// // for(var i=0;i<array.length; i++){
// //     if(array[i]===689)
// //     flag =true;
// // } 
// // if (flag===true){
// //     console.log('got it!');
// // }else{
// //     console.log('not found!');
// // }

// // though function
// // for calling a function and function returns we use console.log
// // var array = [2,4,6,23,56,3224,454,23,54,56,232,689,233];
// // var number = 10;
// // function findNumber(arr,n){
// //     var flag=false;
// // for(var i=0; i< arr.length;i++){
// //     if (arr[i]===n){
// //         flag=true;
// //         break;
// //     }
// // }
// // if(flag===true){
// //     return"got it";
// // }else{
// //     return"not found";
// // }
// // }
// // var myfunction=findNumber(array,number);
// // console.log(myfunction);

// // we can use index of
// // var array = [2,4,6,23,56,3224,454,23,54,56,232,689,233];
// // var number = 290;
// // if (array.indexOf(number) !== -1) {
// //   console.log('got it!');
// // } else {
// //   console.log('not found!');
// // }

// // Q - Given an array make a object with a key of that specific index with value
// // result should be {0:"9"}

// var array=[9,8,7,6,5,4,3,2,1,0]
// var result={}
// for(var i=0; i<array.length;i++){
//   result[i]= array[i].toString()
// }


// console.log(result)

// Q how to empty an array.

// var students = [1,2,3,4,5,6,7,8,9]
// var studentsList=students
// var studentsList=[]
// console.log(studentsList)

// Q find and print got it no found or else not found
// var students = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var number = 100;

// if(students.indexOf(number) !== -1){
//   console.log("got it");
// }else{
//   console.log("not found")
// }


// Q how would check if a no integer?
// A very simply way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1.
// int =1,2,3, 

// var number= 12.2

// function isInt(number){
//   return number % 1 === 0;
// }
// console.log(isInt(number))

// Q Write a function that takes an array of numbers and returns the sum of all the even numbers in the array

// function sumOfEvenNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 20

// Q find all even number
// array=[1,2,,38,98,45,68,89,12,90]
// evenNumber=0
// for(var i=0; i<array.length; i++){
//   if(array[i] % 2 ===0 ){;
//     evenNumber += array[i]
//   }
// }return evenNumber
// console.log(array[i])

// Q 1 Print the number from 20-40, which are even;
// for( var i=20; i<=40; i++){ 
//   if( i % 2 === 0){
//     console.log(i)
//   }
// }

// Q2 Q 1 Print the count of number from 20-40, which are even;

// var count =0;
// for(var i=20; i<=40; i++){
//   if( i % 2 === 0){
//     count++
//   }
// }console.log(count)

// Q Print count of the number from 147-254, which are divisible by 3 and odd number.

// var count = 0;
// for(var i=147; i<=254; i++){
//   if(i%3=== 0 && i%2!=0){
//     count++
//   }
// }console.log(count)

// Q. Find count of number 45 from given Array
// {12,13,45,67,43,45,76,89,54,23,7,8797,243,23234}

// var number =[12,13,45,67,43,45,76,89,54,23,7,8797,243,23234, 1,1,1,1,1,1]
// var count =0;
// for(var i=0; i<number.length; i++){
//   if(number[i] === 1){
//     count++
//   }
// }console.log(count)

// Q Find numbers which addition is target.
// nums=[2,7,11,15]  target=9

// var nums = [2, 7, 11, 15]
// var target = 9;

// for (var i = 0; i < nums.length - 1; i++) {
//   for (var j = i + 1; i < nums.length; j++) {
//     if (nums[i] + nums[j] === target) {
//       console.log(nums[i], nums[j])

//     }

//   }
// }


// Q Find 3 number which addition is target 
// [2,4,6,8,9,10,13,78,12,34,23]
// target=35

// var nums=[2,4,6,8,9,10,13,78,12,34,23];
// var target = 35;

// for (var i=0; i<nums.length-2; i++){
//   for(var j=i+1; j<nums.length; i++){
//     for(var k =i+1; k<nums.length; i++){
//       if(nums[i]+nums[j]+nums[k] === target)
//       console.log(nums[i], nums[j], nums[k])

//     }
//   }
// }



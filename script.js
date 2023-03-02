// Q. find FIND IF GIVEN NO IS PRESENT IN array or not?
var array =[1,2,443,232,546,23,567,676,2342,565,4,2,6]
var number= 6;


// console.log(array.includes(23))
// var flag = false;
// for (i=0; i<array.length;i++){
//     if(array[i] === number){
//         flag = true;
//     }
// }
// if(flag === true){
//     console.log("true")
// }else{
//     console.log("False")
// }

// find out number 689 from given array.

// var array = [2,4,6,23,56,3224,454,23,54,56,232,689,233];
// var number = 689;
// // console.log(array.includes(689))
// var flag=false;
// for(var i=0;i<array.length; i++){
//     if(array[i]===689)
//     flag =true;
// } 
// if (flag===true){
//     console.log('got it!');
// }else{
//     console.log('not found!');
// }

// though function
// for calling a function and function returns we use console.log
// var array = [2,4,6,23,56,3224,454,23,54,56,232,689,233];
// var number = 10;
// function findNumber(arr,n){
//     var flag=false;
// for(var i=0; i< arr.length;i++){
//     if (arr[i]===n){
//         flag=true;
//         break;
//     }
// }
// if(flag===true){
//     return"got it";
// }else{
//     return"not found";
// }
// }
// var myfunction=findNumber(array,number);
// console.log(myfunction);

// we can use index of
var array = [2,4,6,23,56,3224,454,23,54,56,232,689,233];
var number = 290;
if (array.indexOf(number) !== -1) {
  console.log('got it!');
} else {
  console.log('not found!');
}


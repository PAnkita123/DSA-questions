// Q. find FIND IF GIVEN NO IS PRESENT IN array or not?
var array =[1,2,443,232,546,23,567,676,2342,565,4,2,6]
var number= 6;


// console.log(array.includes(23))
var flag = false;
for (i=0; i<array.length;i++){
    if(array[i] === number){
        flag = true;
    }
}
if(flag === true){
    console.log("true")
}else{
    console.log("False")
}
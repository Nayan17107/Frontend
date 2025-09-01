// Binary search

// let myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// let myTarget = 19 ;
// let left = 0;
// let right = myArray.length -1;

// while(true){
//     if(right < 0 || left >= myArray.length){

//         console.log("value does not found");
//         break;
//     }

//     let mid = Math.floor((left + right) / 2);

//     if(myArray[mid] == myTarget){
//         console.log("Target value is ",mid);
//         break;
//     }
//     if(myArray[mid]< myTarget){
//         left = mid +1;
//     }else{
//         right = mid -1;
//     }
// }
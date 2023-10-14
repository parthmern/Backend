function sum (a,b){
    return a + b ;
}

// you cannot directly use it anywhere
// so you have to do export

exports.sum = sum ;

// exports => module ko represent karta hai
// exports.sum => export k andar sum ki property bana rahe ho
// = sum => and uske andar sum function ko rakh rahe ho


//other way
// exports.sum = (a,b) =>{
//     return a + b ;
// }

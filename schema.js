// {
//     "name": 
//     {
//         "type": "string"

//     },
//     "age": {
//         "type": "integer"
//     },
//     "gender":{
//         "type":"string"
//         "enum" :["male","female","other"]
//     }
// }
const alphabets = (input) => {
    const sortstring = input.split('').sort().join('');
    return sortstring;
}
const userInput = "Students are not good";
const sortedResult = alphabets(userInput);
console.log(`sorted string : ${sortedResult}`);

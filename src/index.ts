
let age= 30_000_000;

function nums(values:number[]) {
    //loop through the array and convert each value to a string and log it
    for (let i = 0; i < values.length; i++) {     
        console.log(values[i].toString());
    }
}

nums([1,2,3,4,5,6,7,8,9,10]);
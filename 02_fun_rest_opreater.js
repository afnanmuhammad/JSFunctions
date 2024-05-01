// Some time Depaned on Satution Rest OR Spread (...) Opreater we print mutiple value


/*Rest OR Spread (...) Opreater to print multiple value--->> [ 2000, 1500, 700, 910, 3000 ]*/

// function calculetCartPrice(...number1) { 
function calculetCartPrice(value1, value2, ...number1) { /*Rest OR Spread (value1,value2,...number1) Opreater to print Rest value--->> [ 700, 910, 3000 ]*/
    return number1

}

console.log(calculetCartPrice(2000));
console.log(calculetCartPrice(2000, 1500, 700, 910, 3000));


// Object pass in function

const Objec_pass_To_function = {
    username: 'Afnna',
    Price: 399
}

function getvalueOFobject(anyobject) {
    console.log(`The username is: ${anyobject.username} and Price is: ${anyobject.Price}`);

}
// getvalueOFobject(Objec_pass_To_function)

// Direct pass object in function

getvalueOFobject({
    username: 'Ahmad',
    Price: 99999900000
})


// Array return in function

let myarray = [200, 987, 'Kashif', 654, 'Afnan', 847, 'Talha',]

function returnvalueOFArray(getarray_in_Function) {
    return getarray_in_Function[5]

}

// console.log(returnvalueOFArray(myarray));
console.log(returnvalueOFArray([200, 987, 'Kashif', 654, 'Afnan', 847, 'Talha']));
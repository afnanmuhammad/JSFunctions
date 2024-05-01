// Function is block of code to spicfic task that more then reapte work with complete function

function myfunction() {
    console.log('A');
    console.log('F');
    console.log('N');
    console.log('A');
    console.log('N');
}
myfunction()    /*myfunction is refrence name or variable ()----->> this is used for Exction*/



// Parametar 

// function myparametar(num1, num2, num3, num4, num5) /* This is parametar not Argument--->> (num1, num2, num3,num4,num5)*/ {
//     console.log(num1 + num2 + num3 + num4, num5);
// }

// myparametar(2, 45, 2, 10, "Afnan") /* This is Argumant not parametar (2, 45,2,10, "Afnan")*/

// Return Result

function myReturn(number1, number2) {

    // let result = (number1 - number2) /* + , - , * , / */
    // return result

    // Next Method
    return number1 + number2
}

const result = myReturn(10, 20)

console.log("The Result value is: ", result)

function LoginUserMessage(username) {
    if (username === undefined)
        console.log("Please Enter name");
    return
    return `${username} just login seccuse`
}

console.log(LoginUserMessage("Afnan")); /* Afnan just login seccuse */
console.log(LoginUserMessage(""));      /* just login seccuse */
console.log(LoginUserMessage());                /* undefined just login seccuse */
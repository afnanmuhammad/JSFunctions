// arrow function 

function nextOne() {
    username = 'Afnan'
    //     console.log(this.username);

}
// nextOne()

// next method

const nextOne = function () {
    username = 'khan'
    //     console.log(this.username);

}
// nextOne()

// arrow function

const nextOne = () => {
    username = 'khan'
    //     console.log(this);

}
// nextOne()

// next arrow function method Expaleced returnt

const nexttwo = (num1, num2) => {
    return num1 + num2
}
// console.log(nexttwo(10, 20));

// implect returnt method

const nextthree = (num3, num4) => num3 + num4
// console.log(nextthree(30, 40));

//Next method
// const nextforth = (num5, num6) => (num5 + num6)

// how to return object in function
const nextforth = (num5, num6) => ({ name1: "afnan" })
console.log(nextforth(50, 80));
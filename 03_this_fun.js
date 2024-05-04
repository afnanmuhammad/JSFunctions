//  this is used for current statmen in scop

const user = {
    username: 'Afann',
    Rollno: 201155,

    wellcomMessagw: function () {
        console.log(`${this.username},Wellcom to our school`);
        console.log(this);
    }

}

// user.wellcomMessagw()
// user.wellcomMessagw = 'Khan'
// user.wellcomMessagw()
// console.log(this);

// function nextOne() {
//     username = 'Afnan'
//     console.log(this.username);

// }
// nextOne()

// next method
const nextOne = function () {
    username = 'khan'
    console.log(this.username);

}
nextOne()
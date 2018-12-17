const maths = require('./math.js');

const fs = require('fs');

console.log(maths.add(1, 2));

console.log(maths.subtract(1, 2));

console.log(maths.divide(1, 2));

console.log(maths.multiply(1, 2));

const images = require('./services/images.js');

// images.copyJPGTo('temp.png', 'tempimg', 'temp2.png');


/*
fs.writeFileSync('./services/user.js', `
const fs = require("fs");

const add = (obj) => {
    const  acc = obj.reduce((acc, e) => {
        acc += 

    }, "");
}
`)

*/

const UserService = require('./services/user');

const users = [{
        name: 'John',
        age: 30
    },
    {
        name: 'Bob',
        age: 23
    },
    {
        name: 'Emily',
        age: 40
    },
    {
        name: 'Michelle',
        age: 24
    },
    {
        name: 'Chris',
        age: 25
    },
    {
        name: 'Jay',
        age: 21
    }
];

// UserService.save(users);


/*
let usr = [];
UserService.load(cb => {
    usr = cb;
    console.log(usr);
});
*/
// UserService.add({name: 'Erika',age: 25});

// UserService.add({name: 'Erika',age: 30})
// UserService.add({name: 'Erika',age: 35})

UserService.save(users, (err, res) => {
    console.log('saved...?', err, res)
    UserService.load(allUsers => {
        console.log('in index.js - ', allUsers)
        UserService.add({
            name: 'Erika',
            age: 35
        }, (err, res) => {
            console.log(err, res)
        });
    });
});
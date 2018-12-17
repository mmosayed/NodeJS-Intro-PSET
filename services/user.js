const fs = require("fs");

/*
const save = (arr) => {
    const txt = arr.reduce((acc, e) => {
        acc += `${e.name},${e.age}\n`
        return acc;
    }, ``);
    fs.writeFileSync('./user.txt', txt);
}
*/

// const FILE_NAME = 'users.txt';
const FILE_NAME = 'users2.txt';

const save = (userList, cb) => {
    console.log('IN function save')
    const userRows = [];
    for (let user of userList) {
        console.log(user)
        userRows.push(user.name +','+ user.age)
    }
    console.log(userRows)
    const fileblob = userRows.join('\n');
    console.log(fileblob)
    fs.writeFile(FILE_NAME, fileblob, (err, res) => {
        cb(err, res)
    })
};

const load = (cb) => {
    console.log('in LOAD!')
    fs.readFile(FILE_NAME, 'utf8', (err, data) => {
        
        const rows = data.split('\n')
        const users = [];
        console.log(err, rows)
        for (let row of rows) {
            const bits = row.split(',');
            users.push({name: bits[0], age: parseInt(bits[1], 10)})
        }
        cb(users)
    })
}

/*
const save = (arr) => {
    let txt = '';
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1){
            txt += `${arr[i].name},${arr[i].age}`;
        } else {
            txt += `${arr[i].name},${arr[i].age}\n`;
        }    
    }
    fs.writeFile(`./${FILE_NAME}`, txt, (err)=>{
    });
}

const load = (cb) => {

    // return load()
    const usr = [];
    fs.readFile(`./${FILE_NAME}`, (err, res) => {
        const arr = res.toString().split('\n');

        for (let i = 0; i < arr.length; i++) {
                usr.push({
                    ['name']: arr[i].split(',')[0],
                    ['age']: Number(arr[i].split(',')[1])
                });
        }
      cb(usr);
    })
    // console.log(usr)
    // return usr;



}
*/

const add = (obj, cb) => {
    
    load(data => {

        data.push(obj);
        save(data, cb);
    })
}


module.exports = {
    save,
    load,
    add,
}
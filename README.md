# NodeJS Intro 

### Problem 1

Make a math module that imports and works the following way:

```javascript
const math = require('./math.js');

math.add(1, 2);
math.subtract(5, 3);
math.divide(3, 3);
math.multiply(5, 5);
```

### Problem 2

Make an `ImageService` module that takes in a `JPG` image from the root directory and makes a new copy in the specified directory and renamed to the new name.

```javascript
const ImageService = require('./services/image.js');

ImageService.copyJPGTo('logo.jpg','newFolder', 'newName');

/*
  This will create a new folder called: newFolder/
  And inside here there will be a copy of the image called:
  newFolder/newName.jpg
*/
```


### Problem 3

Make a module that stores the following users into a text database.

#### app.js
```javascript
const UserService = require('./services/user');

const users = [
  {name: 'John', age: 30},
  {name: 'Bob', age: 23},
  {name: 'Emily', age: 40},
  {name: 'Michelle', age: 24},
  {name: 'Chris', age: 25}
];

UserService.save(users);
```

This should store the users in a text database format as follows:

#### users.txt
```
John,30
Bob,23
Emily,40
Michelle,24
Chris,25
```

### Problem 4

Using the same module file. Make a new function that takes in a `user.txt` file.

#### user.txt

```
John,30
Bob,23
Emily,40
Michelle,24
Chris,25
Robert,28
Mike,27
Sarah,22
```

And returns the following: 

#### app.js
```javascript
const users = UserService.load('users.txt');

console.log(users);
/*
[
  {name: 'John', age: 30},
  {name: 'Bob', age: 23},
  {name: 'Emily', age: 40},
  {name: 'Michelle', age: 24},
  {name: 'Chris', age: 25},
  {name: 'Robert', age: 28},
  {name: 'Mike', age: 27},
  {name: 'Sarah', age: 22},
]
*/
```

### Problem 5

Using the same module file. Make a new function that adds a row to the database

#### user.txt

```
John,30
Bob,23
Emily,40
Michelle,24
Chris,25
Robert,28
Mike,27
Sarah,22
```

And:

#### app.js
```javascript
const users = UserService.add({name: "Taq", age: 28});

console.log(users);
/*
[
  {name: 'John', age: 30},
  {name: 'Bob', age: 23},
  {name: 'Emily', age: 40},
  {name: 'Michelle', age: 24},
  {name: 'Chris', age: 25},
  {name: 'Robert', age: 28},
  {name: 'Mike', age: 27},
  {name: 'Sarah', age: 22},
  {name: 'Taq', age: 28},
]
*/
```

and new user.txt

```
John,30
Bob,23
Emily,40
Michelle,24
Chris,25
Robert,28
Mike,27
Sarah,22
Taq,28
```


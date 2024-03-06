// 1)

let userNames = ['Ali', 'John', 'Sam', 'Ann', 'Jane'];
let result = userNames.join('-');
console.log(userNames);
console.log(result);


// 2)

let userWords = prompt('введите строку');
let split = userWords.split(' ');
console.log(userWords);
console.log(split);


// 3)

const date = [2024, 'марта', 6];
console.log(date);
const reversed = date.reverse();
console.log(reversed);
const joined = reversed.join('/');
console.log(joined);

// 4)

let users = ['Ali', 'Ned', 'Eugene', 'Simone', 'Ann'];
users.map((item) => alert(item));
console.log(users);

let users = ['Alex', 'Jack', 'Angela', 'Jacob', 'Ann'];
users.forEach((item) => alert(item));
console.log(users);


// 5)

const usersIndex = [
    {age: 90, name: 'Sam'},
    {age: 18, name: 'Mett'},
    {age: 27, name: 'Scarlett'},
    {age: 19, name: 'Jane'}
];
let findIndex = usersIndex.findIndex((item) => item.age === 18);
console.log(findIndex);


// 6)

let studentsNames = ['Ann', 'Mark', 'Nick', 'Angela', 'Sam'];
let result = studentsNames.join('');
console.log(studentsNames);
console.log(result);













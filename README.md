# Random String Generator Multi

A lightweight JavaScript utility to generate random strings of specified lengths using custom character sets.

## Installation

You can install the `random-string-generator-multi` package via npm:

```bash
npm install random-string-generator-multi
```


## Usage
To use the generateRandomString function, require it in your JavaScript file:

```javascript
const generateRandomString = require('random-string-generator-multi');
Generating Random Strings
```

* Generate a random string of length 10 using the default character set

```javascript
const randomString = generateRandomString(10);
console.log(randomString); // Output: "f2Vh9kTqPn"
```

Customizing Character Set

You can also specify a custom character set to generate random strings:

*  Generate a random string of length 8 using a custom character set

```javascript
const customRandomString = generateRandomString(8, 'abcdef');
console.log(customRandomString); // Output: "abbcafcc"

```
* API

generateRandomString(length, charset)
Generates a random string of the specified length using the provided character set.

length (number): The length of the random string to generate.

charset (string, optional): The character set to use for generating the random string (default: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789').

Returns the generated random string.

License
This project is licensed under the MIT License - see the LICENSE file for details.


This structure allows users to easily find the usage examples for `generateRandomString` under the "Usage" section of the README. You can add more usage examples or customize the text as needed to provide clarity and guidance for users.




# print-object
Pretty-print an object's keys and values to a string

Supports the printing of embedded objects and arrays. 

## Installation
```
$ npm install --save print-object
```

## Usage
```js
var printObject = require('print-object');

var myObj = { "one": 1, "two": 2, "three": 3, "four": {a:1, b:2}, five: ["six", "seven"]  };

printObject(myObj);
```

Output:
```
one: 1
two: 2
three: 3
four: 
    a: 1
    b: 2
five: six,seven
```


 
 
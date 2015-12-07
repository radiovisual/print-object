# print-object [![Build Status](https://travis-ci.org/radiovisual/print-object.svg)](https://travis-ci.org/radiovisual/print-object)
Pretty-print an object's keys and values to a string

Supports the printing of embedded objects and arrays. 

## Installation
```
$ npm install --save print-object
```

## Usage

### Print to plain-text
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

### Print to HTML

```js
var printObject = require('print-object');

var myObj = { "one": 1, "two": 2, "three": 3, "four": {a:1, b:2}, five: ["six", "seven"]  };

printObject(myObj, {html:true});
```

Output *(Formatting added for readability)*:
```
<table>
  <tr>
    <td>one</td>
    <td>1</td>
  </tr>
  <tr>
    <td>two</td>
    <td>2</td>
  </tr>
  <tr>
    <td>three</td>
    <td>3</td>
  </tr>
  <tr>
    <td>four</td>
    <td>a: 1<br>b: 2<br></td>
  </tr>
  <tr>
    <td>five</td>
    <td>six,seven</td>
  </tr>
</table>
```


## License 

MIT @ [Michael Wuergler](http://numetriclabs.com)


 
 
#Jade-babel

This is a simple module which adds a babel (ES6 to ES5) filter to jade.

##Installation

    $ npm install jade-babel

##Usage

```js
var jade = require('jade');
var babel = require('jade-babel');

jade.filters.babel = babel({});
```

OR

```js
var jade = require('jade');
var babel = require('jade-babel');

jade = babel({}, jade);
```


Now you can use ES6 in your jade templates as following.

```jade
script
	:babel
		console.log('Hello World !!!');
		class Person{
			constructor(name){
				this.name = name;
			}
			sayName(){
				console.log(`Hello, my name is ${this.name}`);
			}
		}
		var pers = new Person('Apoxx');
		pers.sayName();
```

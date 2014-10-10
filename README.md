#Jade-6to5

This is a simple module which adds a 6to5 (ES6 to ES5) filter to jade.

Usage example:

```js
var jade = require('jade');
var to5 = require('jade-6to5');

jade.filters.traceur = to5({});
```
OR

```js
var jade = require('jade');
var to5 = require('jade-6to5');

jade = to5({}, jade);
```


and then

```jade
script
	:to5
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

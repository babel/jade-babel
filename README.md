#JADE-TRACEUR

This is a simple module which adds a traceur filter to jade.

Usage example:

```js
var jade = require('jade');
var jadeTraceur = require('jade-traceur');

jade.filters.traceur = jadeTraceur({experimental: true});
```
OR

```js
var jade = require('jade');
var jadeTraceur = require('jade-traceur');

jade = jadeTraceur({experimental: true}, jade);
```


and then

```jade
script
	:traceur
		console.log('Hello World !!!')
		class Person{
			constructor(name){
				this.name = name
			}
			sayName(){
			console.log(`Hello, my name is ${this.name}`)
			}
		}
		var pers = new Person('Apoxx')
		pers.sayName()
```

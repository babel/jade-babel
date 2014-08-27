#JADE-TRACEUR

This is a simple module which adds a traceur filter to jade.

Usage example:

```js
var jade = require('jade');
var jadeTraceur = require('jade-traceur');

jade.filters.traceur =  jadeTraceur({experimental: true});
```
OR

```js
var jade = require('jade');
var jadeTraceur = require('jade-traceur');

jade = jadeTraceur({experimental: true}, jade);
```

# Jade-babel

This is a simple module which adds a Babel filter to jade.

## Installation

```shell
npm install jade-babel
```

## Usage

```js
import jade from 'jade';
import { createFilter } from 'jade-babel';

// Will be handled by babel's OptionManager, so `.babelrc` works.
const babelOptions = { ... };

jade.filters.babel = createFilter(babelOptions);

const app = express()
  .set('view-engine', jade)
...
```

OR

```js
import jade from 'jade';
import { enhanceJade } from 'jade-babel';

const app = express()
  // This form support the options parameter too.
  .set('view-engine', enhanceJade(jade))
...
```


Now you can use Babel in your jade templates as following.

```jade
script
  :babel
    class Person{
      constructor(name){
        this.name = name;
      }
      sayName(){
        console.log(`Hello, my name is ${this.name}`);
      }
    }
    const apoxx = new Person('Apoxx');
    apoxx.sayName();
```

## Functions

<dl>
<dt><a href="#createFilter">createFilter([babelOptions])</a> ⇒ <code>function</code></dt>
<dd><p>Creates a babel filter for jade.</p>
</dd>
<dt><a href="#enhanceJade">enhanceJade(jade, [babelOptions])</a> ⇒ <code>object</code></dt>
<dd><p>Enhances the provided jade module.</p>
</dd>
<dt><del><a href="#jadeBabel">jadeBabel([babelOptions], [jade])</a> ⇒ <code>function</code> | <code>object</code></del></dt>
<dd><p>Creates a filter or enhance a jade module.
If a jade module is provided, it will have the same result as <a href="#enhanceJade">enhanceJade</a>.
Otherwise it will return the same value as <a href="#createFilter">createFilter</a>.</p>
</dd>
</dl>

<a name="createFilter"></a>
## createFilter([babelOptions]) ⇒ <code>function</code>
Creates a babel filter for jade.

**Kind**: global function  
**Returns**: <code>function</code> - the created filter  

| Param | Type | Description |
| --- | --- | --- |
| [babelOptions] | <code>object</code> | the babel's options object |

<a name="enhanceJade"></a>
## enhanceJade(jade, [babelOptions]) ⇒ <code>object</code>
Enhances the provided jade module.

**Kind**: global function  
**Returns**: <code>object</code> - the enhanced Jade module  

| Param | Type | Description |
| --- | --- | --- |
| jade | <code>object</code> | the jade module to enhance |
| [babelOptions] | <code>object</code> | the babel's options object |

<a name="jadeBabel"></a>
## ~~jadeBabel([babelOptions], [jade]) ⇒ <code>function</code> &#124; <code>object</code>~~
***Deprecated***

Creates a filter or enhance a jade module.
If a jade module is provided, it will have the same result as [enhanceJade](#enhanceJade).
Otherwise it will return the same value as [createFilter](#createFilter).

**Kind**: global function  
**Returns**: <code>function</code> &#124; <code>object</code> - the created filter or the enhanced Jade module  

| Param | Type | Description |
| --- | --- | --- |
| [babelOptions] | <code>object</code> | the babel's options object |
| [jade] | <code>object</code> | the jade module to enhance |

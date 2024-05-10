---
title: Leveraging Nullish coalescing operator and optional chaining 
description: Clean up your code by doing this 
---

# Summary 

When working try to access nested values in objects or arrays, you often need to reference values that may or may not exist.

And so you need to write code that is quite verbose to handle these cases.

But you may ask is there an easier way ?

There is! It’s using nullish coalescing operator and optional chaining.

## Example: Recommended {.pt-4}


### Result 

```ts settings:code:hide-clipboard settings:code:creator-mode
/**
* @param {String} test
**/
const data = {
  a: {
   b: {
    c: 'c',
   }
  }
};

const c = data?.a?.b?.c
// => 'c' 

const y = data?.a?.b?.c?.y
// => undefined

const yWithDefault = data?.a?.b?.c?.y ?? 'y';
// => 'y'

const values = {
  a: {
    b: [1, 2, 3]
  }
};

const firstValue = values?.a?.b?.[0];
// => 1

const hundrethValue = values?.a?.b?.[100];
// => undefined

const hundrethValueWithDefault = values?.a?.b?.[100] ?? 100;
// => 100
```


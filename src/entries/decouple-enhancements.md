---
title: Decouple enhancements 
description: Keep business logic the same 
---

# Summary 


Often times, we may have code that fufill some business logic but we may want to enhance it.

For example, improve it’s performance.

Sometimes improving the code performance can lead to the making the code in the business logic more bloated and increase complexity.

One way around this is to “wrap” the business logic.

Let’s see an example.

## Example: Recommended {.pt-4}

### Markdown

### Result 

```ts settings:code:hide-clipboard
// [!not-recommended-example: description="Not Recommended: Keeping enhancements and business logic together"]
const cache = new Map();

const myThing = (thingId: string) => {
  if (cache.has(thingId)) {
    return cache.get(thingId);
  }

  const data = getData(thingId);

  cache.set(thingId, data);
  
  return data;
};
```

## Example: Recommended {.pt-4}

```ts settings:code:hide-clipboard settings:code:creator-mode
// [!recommended-example: description="Recommended: Separate enhancement andyour business logic"]
const myThing = cache((thingId: string) => {
  const data = getData(thingId);
  return data;
});
```

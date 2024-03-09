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

```ts settings:code:hide-clipboard settings:code:creator-mode highlight:[2-3]
// [!recommended-example: description="Recommended: Separate enhancement and your business logic"]
const myThing = cache((thingId: string) => {
  const data = getData(thingId);
  return data;
});
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non libero eget nunc tincidunt egestas. Sed commodo laoreet finibus. Quisque quis consectetur justo. Proin facilisis tempor turpis eget consequat. Fusce in ipsum tempus, elementum risus sit amet, porta arcu. Nunc ut posuere velit, sed facilisis libero. Morbi in metus id risus maximus ornare sit amet vitae ex.

Sed nisi tellus, sollicitudin id vestibulum eget, convallis in ligula. Suspendisse potenti. Quisque a suscipit arcu. Vivamus in suscipit lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque suscipit felis sit amet mauris tristique facilisis. Duis diam mi, porta et tellus eget, dignissim aliquam turpis. Aliquam vel tincidunt tortor. Donec interdum, lorem non maximus bibendum, mauris ante imperdiet justo, eu blandit sem quam non urna. Suspendisse ultricies orci ligula, vel finibus erat consectetur at. Proin et faucibus nibh.

Donec urna est, tristique vitae euismod non, convallis eu velit. Vivamus sit amet nunc nisi. Aliquam erat volutpat. Praesent in augue efficitur elit cursus suscipit at at orci. Duis blandit, diam sit amet malesuada rhoncus, nisi justo viverra nisi, eu condimentum justo tortor eget eros. Proin tincidunt turpis ut augue blandit accumsan. Proin sit amet ipsum venenatis, posuere leo eu, pulvinar erat.

Sed suscipit diam nisl, a finibus tellus feugiat in. Aenean porttitor luctus nisi. Vivamus rhoncus libero id elit bibendum pharetra. Maecenas vel rhoncus tortor, eu iaculis magna. In id orci lectus. Phasellus vestibulum tellus non turpis molestie tincidunt. Pellentesque fringilla, odio ut malesuada sodales, purus odio interdum ante, a maximus purus sem in nibh. Sed dolor enim, imperdiet at imperdiet sit amet, ullamcorper quis est. Proin ac auctor nunc, ultrices laoreet velit. Nullam in vestibulum enim. Ut mollis malesuada lacus, quis pharetra orci condimentum a. In sit amet bibendum purus, a lobortis nisi. Maecenas tincidunt, massa in laoreet ullamcorper, diam leo ultrices odio, pharetra euismod lorem quam ac tortor. Sed vel velit gravida, vulputate elit in, ullamcorper lectus. Integer eget nisl sit amet lacus dignissim suscipit.



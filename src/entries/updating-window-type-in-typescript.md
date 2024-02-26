---
title: Updating Typescript window type 
description: How update window to support new properties 
---

# Summary 

When working with window, sometimes you need to update it to include new properties.

Maybe you injected a new SDK into the window or you’ve added your own custom properties.

Either way, there is a new property on the window.

There is a gotcha with this, and that’s Typescript!

Typescript doesn’t know about the property so you need to add it in.

Let’s take a look to see how that is done.

It’s quite simple, 3 steps to do it.


### 1. Create a `global.d.ts` {.pt-4}


Create a new file called `global.d.ts`, and add the definition of the new property in.

```tsx settings:code:minimal settings:code:no-header settings:code:hide-line-numbers
export declare global {
  interface Window {
    // A property defintion
    myProperty: string;

    // A function defintion
    myFunction: (node: HTMLElement) => void;
  }
}
```

The Next step is quite important.

### 2. Include `global.d.ts` file into `tsconfig.json` {.pt-4}

Now we have to let Typescript know about this definition, so we have to include it in `tsconfig.json`.

```json settings:code:minimal settings:code:no-header settings:code:hide-line-numbers
{
  // other properties...

  "include": ["./global.d.ts"]
}
```

### 3. Use it in your code

```ts settings:code:minimal settings:code:no-header settings:code:hide-line-numbers
// A property defintion
console.log(window.myProperty);

// A function defintion
console.log(window.myFunction);
```

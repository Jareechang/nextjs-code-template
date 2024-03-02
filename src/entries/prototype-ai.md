---
title: Prototype AI 
description: Testing some things
---

# Summary 

Some summary

# Details

# AI

How do you add it ?

You can add it by updating prefix of the `tailwind.config` file.

```ts settings:code:minimal settings:code:no-header
// [@ai convert-to:python,java,ruby,php,go]
function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

# Skip Ad button 

```ts settings:code:minimal settings:code:no-header
const numberAdsShown = 2;

const showAd = () => {
  if (numberOfAdsShown > 0) {
    resetSkipAdButton();
    numberAdsShown--;
  }
}
```

# Conclusion

And... that’s it.

I hope you found this helpful!

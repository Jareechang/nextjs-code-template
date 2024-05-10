---
title: Javascript pro tip 
description: The Using Array.at 
---

# Summary 

### CSS 

```ts settings:code:hide-clipboard settings:code:creator-mode
const numbers = [1, 2, 3, 4, 5];

// classic approach
const classicApproachLastNumber = numbers[numbers.length - 1];

// new approach
const newApproachLastNumber = numbers.at(-1);
```

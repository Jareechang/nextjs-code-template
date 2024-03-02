---
title: Bun test
description: A brief introduction 
---

# Summary 

Most of time we can use jest or vitest or even mocha/jasmine.

But did you know there is a new kid on the block ?

It’s Bun test! 


So, why would I choose bun test over the existing options.


**Benefits:**

- Lightning fast (Bun has benchmarks to prove it!)

- Everything works out of the box (jsx, tsx, ts, ...etc)

- Compatible syntax with `jest` (describe, test, expect, beforeAll... etc)


## Example Usage {.pt-4}

**The test:**

```ts settings:code:hide-clipboard
import { describe, test, expect } from 'bun:test';

function add(a: number, b: number): number {
  return a + b;
}

describe('add', () => {
  test('2 + 2', () => {
    expect(add(2, 2)).toBe(4);
  });

  test('4 + 6', () => {
    expect(add(4, 6)).toBe(10);
  });
});
```

**The command:**

```shell settings:code:hide-clipboard
# Test run
bun test

# Test run with watch
bun test --watch
```

---
title: My first blog
description: Here are some things you need to know
---

# Summary 

Welcome to my tutorial.

# Getting started {.pt-6}

Here is how to get started.

```shell
npm install

yarn install

pnpm install
```

# Typescript Example

```ts
// parse-profile.ts

interface Profile {
  id: string;
  name: string;
  links: string[];
  theme: string;
}

const parseProfile = (profile: Profile): Profile  => {
  // Do some parsing
  return profile;
};
```

# Python Example

```py
 def factorial(n):
    """Calculate the factorial of a non-negative integer."""
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

# Example usage:
num = 5
print(f"The factorial of {num} is: {factorial(num)}")
```

---
title: Showcase right and wrong code
description: Do this, not this! 
---

# Summary 

Often in code examples, you‘d like to showcase a recommended way.

This helps to keep code consistent, and to leverage best practices.

Or you just want to showcase a better way to do something.

Either way, let me show you how you can do this in this markdown tool!


## Example: Recommended {.pt-4}

### Markdown

```md settings:code:minimal settings:code:hide-line-numbers
~~~ts
// [!not-recommended-example: description="Not Recommended: Running async functions synchronously"]
await getPrimaryInfo();
await getSecondaryInfo();
~~~
```

### Result 

```ts settings:code:hide-clipboard
// [!not-recommended-example: description="Not Recommended: Running async functions synchronously"]
await getPrimaryInfo();
await getSecondaryInfo();
```

## Example: Not recommended {.pt-4}

### Markdown

```md settings:code:minimal settings:code:hide-line-numbers
~~~ts
// [!recommended-example: description="Recommended: Running async functions in parallel"]
const [primaryInfo, secondaryInfo] = await Promise.all([
  getPrimaryInfo(), getSecondaryInfo(),
])
~~~
```

### Result 

```ts
// [!recommended-example: description="Recommended: Running async functions in parallel"]
const [primaryInfo, secondaryInfo] = await Promise.all([
  getPrimaryInfo(), getSecondaryInfo(),
])
```

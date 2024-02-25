---
title: How to highlight code sections 
description: Short guide on how to highlight code sections
---

# Summary 

Here is a short guide on How to highlight code sections. 

## An Example {.pt-6}

1. First add the CSS to your `global.css` file


Define the color of the higlighting in your css.

```css
.code-section {
  --code-snippet-highlight-color: #7bffe921;
}
```

2. Specify the lines to highlight

Using the following syntax: `highlight:[{line-start}-{line-end}]`

**Example:** `highlight:[8-12]`


```md
~~~ts highlight:[1-3]
function add(a: number, b: number): number {
  a + b;
}

add(1, 3);
~~~
```

## Conclusion {.pt-6}

And that‘s it!

That’s how you highlight a specific part of the code snippet.

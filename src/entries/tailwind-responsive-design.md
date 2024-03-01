---
title: Tailwind responsive design
description: The power of tailwind responsive design 
---

# Summary 

Here is a short guide on the power of responsive design using Tailwind. 

Imagine you need to do some responsive design in CSS, you need to start include a bunch of `@media(...)` queries.

And that can get quite complicated, here is how tailwind manages it.

## An Example with css {.pt-6}

```css settings:code:minimal settings:code:hide-line-numbers settings:code:no-header
.my-thing {
  background: blue;
}

/* md */
@media (min-width: 768px) {
  .my-thing {
    background: pink;
  }
}

/* lg */
@media (min-width: 1024px) {
  .my-thing {
    background: yellow;
  }
}
```

## An Example with tailwind {.pt-6}

```html settings:code:minimal settings:code:hide-line-numbers settings:code:no-header
<div class="my-thing bg-[blue] md:bg-[pink] lg:bg-[yellow]">
  my thing
</div>
```

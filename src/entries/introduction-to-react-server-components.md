---
title: Introduction to React Server Components (RSC)
description: Short guide on RSC 
date: "2023-04-30T22:57:26.723Z"
tags: Next.js, React.js 
imageUrl: "https://images.unsplash.com/photo-1714423616168-e9a6f38b6806?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
draft: false
---

# Summary 

Here is a short guide on React Server Components.

## Benefits {.pt-6}

There are a few benefits with using React Server Components (RSC).

- Async functions within React.js [Next.js](https://nextjs.org/docs)

- Tree shaking (Less client-side JS)

- Access to server resources (Database, filesystem)

- **And more**

## An Example {.pt-6}

```css
.code-section {
  --code-snippet-highlight-color: #7bffe921;
}
```

```tsx highlight:[8-12]
import { promises as fs } from 'fs';

export default async function Home() {
  const textContent = await fs.readFile(`/path/to-my-file`);
  return (
    <main className="md:container md:max-w-[1000px] mx-auto py-10">
      <div className="min-h-screen p-10">
        <h1>My Text file</h1>
        <hr />
        <div className="flex justify-content">
          {textContent}
        </div>
     </div>
    </main>
  );
}
```

Be sure to check out [Next.js](https://nextjs.org/docs) for more guides like this.

## Conclusion {.pt-6}

And that‘s it!

The shortest on React Server Components (RSC).

> This is a test {.common}

## Image section with blockquote

<div class="my-4">
  <div class="flex justify-center">
    <img src="https://placehold.co/600x400" alt="server side rendering finish hydration" style="width:75%" />
  </div>
  <div class="flex justify-center pt-2">
    <blockquote>
      <strong>Source:</strong> <a target="_blank" href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web">Rendering on the web</a> by Jason Miller & Addy Osmani.
    </blockquote>
  </div>
</div>

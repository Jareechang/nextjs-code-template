---
title: Introduction to React Server Components (RSC)
description: Short guide on RSC 
---

# Summary 

Here is a short guide on React Server Components.

## Benefits {.pt-6}

There are a few benefits with using React Server Components (RSC).

- Async functions within React.js 

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

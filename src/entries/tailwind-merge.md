---
title: Tailwind merge (Mar. 27, 2024)
description: Using tailwind merge 
---

# Summary 

That’s where prefixes come in handy!

# First step 
```shellsession settings:code:hide-clipboard
npm install tailwind-merge
```

# Second Step 

```tsx settings:code:hide-clipboard settings:code:creator-mode
import { twMerge } from 'tailwind-merge'

twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')
// → 'hover:bg-dark-red p-3 bg-[#B91C1C]'
```

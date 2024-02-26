---
title: Minimal code snippets 
description: How to add minimal snippets 
---

# Summary 

You have a default style which includes a header.

This includes a logo of the programming language / format with a copy button.

Or a more minimal style that only has the copy button within the code area.

Let’s see an example.

## Default style {.pt-4}

```tsx highlight:[3-5]
import React from 'react';

interface AppProps {
  language: string;
}

const App: React.FC<AppProps> = ({
  language,
}) => {
  return (
    <>
      <LeftNav
        language={language}
      />
      <RightNav
        language={language}
      />
    </>
  );
};
```

## Minimal style {.pt-4}

Here is an example of a minimal style using `settings:code:minimal`.

```tsx settings:code:minimal highlight:[3-5]
import React from 'react';

interface AppProps {
  language: string;
}

const App: React.FC<AppProps> = ({
  language,
}) => {
  return (
    <>
      <LeftNav
        language={language}
      />
      <RightNav
        language={language}
      />
    </>
  );
};
```

## Minimal style - Hide line numbers {.pt-4}

Here is an example of a minimal style using `settings:code:minimal settings:code:hide-line-numbers`.

```tsx settings:code:minimal settings:code:hide-line-numbers highlight:[3-5]
import React from 'react';

interface AppProps {
  language: string;
}

const App: React.FC<AppProps> = ({
  language,
}) => {
  return (
    <>
      <LeftNav
        language={language}
      />
      <RightNav
        language={language}
      />
    </>
  );
};
```

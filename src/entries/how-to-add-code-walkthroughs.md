---
title: Adding Code walk throughs 
description: Here is how to do it! 
---

# Summary 

This feature allows you to add code walkthroughs straight from markdown.

**You can define:**

- **position** - which position the tab and description will be on
- **description** - The description of the section of the code 
- **range** - The highlighted range to showcase 


All of this is done by using comments

Here is an example of the syntax:

**Example:**

```md settings:code:minimal settings:code:hide-line-numbers
// [!highlight-range: position=1,description="Import React into the created file.", range=[1]]
```

## Example {.pt-4}


### Markdown

```md settings:code:minimal settings:code:hide-line-numbers

~~~tsx
// [!highlight-range: position=1,description="Import React into the created file.", range=[1]]
// [!highlight-range: position=2,description="Define the typescript types for the props.", range=[3-5]]
// [!highlight-range: position=3,description="Define the JSX which returns the components for the App. Here we use fragments to wrap the JSX rather than div", range=[7-20]]
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
~~~

```

### Result

```tsx
// [!highlight-range: position=1,description="Import React into the created file.", range=[1]]
// [!highlight-range: position=2,description="Define the typescript types for the props.", range=[3-5]]
// [!highlight-range: position=3,description="Define the JSX which returns the components for the App. Here we use fragments to wrap the JSX rather than div", range=[7-20]]
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

## Conclusion

And... That’s it!

Give this feature a try. If you have any feedback, be sure to let me know!

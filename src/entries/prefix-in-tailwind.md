---
title: Adding prefixes in tailwind 
description: Here is the why and how!
---

# Summary 

Most of the time when working with tailwind, it‘s totally fine to just use it out of the box.

And it works well.

But what if you want to introduce multiple styles ?

Say, you have an app and you want to integrate a widget that also uses tailwind.

How do we prevent conflicts in the styling.

That’s where prefixes come in handy!

# Details

Prefixes are simply just the same old tailwind but now instead of say `p-2`, you would need to specify an unique prefix.

For example, let’s say our prefix is `tw-`.

Then we need to define it as `tw-p-2`.

**What’s the benefit ?**

The main benefit is avoiding conflicts between multiple tailwind instances.

Otherwise, everything else is the same.

# How to add it

How do you add it ?

You can add it by updating prefix of the `tailwind.config` file.

```ts highlight:[3] settings:code:minimal settings:code:no-header
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# Conclusion

And... that’s it.

I hope you found this helpful!



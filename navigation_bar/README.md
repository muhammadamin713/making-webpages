# Notes about this repo

> [!IMPORTANT]
> This is not a mobile first design
> It's desktop first design

To make it support various screen width, we can use

1. `<meta name="viewport" content="width=device-width, initial-scale=1.0"`
2. Use `@media` css at-rule. For example

```css
	/* For screen smaller than 768px */
   @media (max-width: 768px) {
	   /* Styling here */
   }
```

For references, visit [bootstrap guide on layout breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/).
Below is a snippet from the guide.
```css
// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }
```

# tailwindcss-word-spacing

> tailwindcss plugin for word-spacing css

Install the plugin from npm:

```bash
npm install tailwindcss-word-spacing
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
    // Optional. Your plugin might not have any options at all.
    wordSpacing: {
      // ...
      YOUR_PLUGIN_CUSTOM_OPTION: true,
      // ...
    },
  },
  variants: {
    // ...
    // Optional. Your plugin might not have any variants at all.
    wordSpacing: ['responsive'],
    // ...
  },
  plugins: [
    // ...
    require('tailwindcss-word-spacing'),
    // ...
  ],
};
```

This plugin will generate following CSS:

```css
/* ... */
.example-utility-class {
  display: block;
}

.custom-utility-class {
  background-color: red;
}
/* ... */
```

## License

tailwindcss-word-spacing is licensed under the MIT License.

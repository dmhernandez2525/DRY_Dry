# Styling a component

In this guide, we'll walk through styling our newly created [custom `Checkbox` component](creating.md).

## BEM

DRY uses Scss paired with bem techniques for styling [bem](http://getbem.com/introduction/).

Start by creating a `.scss` file under `Checkbox`:

```
DRY-react/
  └── src/
      └── components/
          └── FormHelpers/
                  └── Checkbox.scss
                  ├── index.js
                  ├── Checkbox.jsx
```

Within `styles/`, create a file named after our component. In our case, `Strong.css.js`:

```
DRY-react/
  └── src/
      └── components/
          ├── styles/
          │    └── Strong.css.js
          ├── index.js
          └── Strong.js
```

## Styled Components

```scss
```

And that's it 🙏! You've successfully styled our new `Checkbox` component 💪.

## Next

Let's [write a story](storybook.md) to see this thing in a browser!

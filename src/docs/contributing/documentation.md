# Adding documentation

In this guide, we'll walk through adding documentation for our [fully test](testing.md) [custom `Checkbox` component](creating.md).

## Directory

All of DRY's component documentation files are scoped in the same directory as the component, example:

```
DRY-react/
  └── src/
      └── components/
          └── FormHelpers/
              └── Checkbox/
                    └── README.md
                    ├── PropTable.md
```

## Initial files

The first thing we'll need to do is create a `README.md` & `PropTable.md` directory under `Checkbox/`:

```
DRY-react/
  └── src/
      └── components/
          └── FormHelpers/
              └── Checkbox/
                    └── README.md
                    ├── PropTable.md
```

## README

Our `README.md` documentation should contain:

- A brief explanation of what the component is/does
- An example of how to use the component

## PropTable

Our `PropTable.md` documentation should contain:

- Descriptions of the available component `props.`

Check out any `README.md` / `PropTable.md` file from any component for some examples.

Yay, you did it 🤗! Documentation is [super important](https://www.quora.com/Why-is-documentation-important-in-programming). Thank you for taking the time to write docs!

## Next

Let's submit our component for [review](review.md)!

### CLI

A super fast and easy way to add a component is to use the CLI built into this repo.

To use the CLI, all you have to do is cd into the CLI file.

```jsx
    cd ./cli
```

then run the `cliBuild.js` file with node and a few parameters

```jsx
   node cliBuild.js <Directory > <Parent file> <Name of the Component>
```

### Parameters

you should ALWAYS pass in 3 parameters separated by a space

`first should either be C "Components" or A "Animations"`
`second should be the Parent / Main type.`
`third should be the name of the component. The component name should be snake case if it is more then one word.`

if you only pass in one, it will place the new component in the Components file without a component

### Add To index

After running the CLI, the last step is to add the component as an import in the index file of the folder it is in, eg.

`/dry/src/components/index.js`

or

`/dry/src/animations/index.js`

So if we were adding a Checkbox component, you would add:

```jsx
`/dry/src/components/index.js`
...

export { default as <Checkbox> } from './FormHelpers/Checkbox'
...
```

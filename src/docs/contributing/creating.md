# Creating a component

In this guide, we'll walk through creating a custom component in DRY!

We do encourage you to have a look at other components and follow how they are put together, you might learn a thing or two, which is always a good thing!

We'll be creating a `Checkbox` component, an enhancement to the default HTML `Checkbox` primitive.

## Directory

All of DRY's components are located in one of 2 spots, under `src/components/` or `src/animations/`:

```
DRY-react/
  └── src/
      └── components/
```

```
DRY-react/
  └── src/
      └── animations/
```

## Initial files

The first thing we'll need to do is create a dedicated `Checkbox` directory under the parent directory (In this case FormHelpers) in `components/`:

```
DRY-react/
  └── src/
      └── components/
          └── FormHelpers/
              └── Checkbox/
```

Under our newly created `Checkbox/` directory, we'll need to create a few files:

- `index.js`
- `Checkbox.jsx`

If your component will be styled (not all are!) add a `styles` file named `Checkbox.scss`

```
DRY-react/
  └── src/
      └── components/
          └── FormHelpers/
              └── Checkbox/
                  └── Checkbox.scss
                  ├── index.js
                  ├── Checkbox.jsx
                  ├── Checkbox.utils.js
```

The **`index.js`** file is the main file allow the consuming App/component to use `Checkbox`.

The **`Checkbox.jsx`** file our actual React component.

## Base component code

Add the starting React component boilerplate for `Checkbox.jsx`:

```jsx
import React from "react";
import PropTypes from 'prop-types';
import classNames from "@classnames";

import * as Utils from "./Checkbox.utils.js"

import "./Checkbox.scss";

const DryCheckbox = ({ id,name, className, passProps,styles }) => {
  return (
    <div
      className={classnames({
        [className]: true,
        "dry-checkbox": true
      })}
    >
        <input type="checkbox" {...passProps} {...styles} name={name} id={id}/>

    </div>
  );
};

DryCheckbox.defaultProps = {
  passProps:null,
  styles:null,
  id:""
  name:""
}

DryCheckbox.propTypes = {
  passProps: PropTypes.obj,
  styles: PropTypes.obj,
  id: PropTypes.string,
  name: PropTypes.string
};


export default DryCheckbox;
```

Whoa 😳! Lots of stuff going on already!

#### `Checkbox.scss`

The style `Checkbox` component, Scss paired with bem techniques. More on that our [styling guide](styling.md).

#### `Functional Components`

Creating a component with `Functional Components` seems to work best for component libraries.

Compared to a `React.Component`, it's often more preferment and faster since the interdiction of hooks. `Functional Components` out preform `React.Component` because of the constant shallow dif re-render that comes with `React.Component` as well as has the added benefits of React.PureComponent.

If you're expecting your Component to have a bunch of deeply nested, logic heavy child components, extends from `React.Component` instead of a `Functional Component`.

#### `classnames`

The `classnames` utility is a popular library that allows for dynamic rendering of classnames based on conditions. [`classnames`](https://www.npmjs.com/package/classnames).

It is used to both define your component's `className`, and to extends the `className` prop.

**Always give your components a className**. Even if it's not directly attached to a CSS style rule. The main reasons are for inclusivity and thoughtful architecture.

The concept of markup and classNames can be understood by everyone who knows HTML. That allows for non JS/React folks to inspect to understand/debug the UI. It also allows for folks to write tests that explicitly target selectors.

The second point is thoughtful architecture. HTML is the foundation to your React component. It's critical to get this right to make your components/app accessible and easy to reason about/comprehend. There has to be a purpose for every single HTML selector added to a React component. Describe that reasoning with a thoughtful className.

DRY follows the [ITCSS](https://developer.helpscout.com/seed/glossary/itcss/) naming architecture, which is why components have a `className` prefix of `dry-`.

#### `is-superBold`

Any prop that can modify a components appearance or behaviour is added as a `className` under `componentClassName`. This is to both apply styling and to better communicate a component's state within the DOM (for debugging/testing/targeting).

These modifier classNames should typically be prefixed with words like `is-`, `has-`, `with`.

#### `{...styles}`

DRY's components are designed to be as dynamic as posable. The `{...styles}` pattern allows for users to pass in an object of inline styles to have maxume control over the component.

#### `{...passProps}`

DRY's components are designed to be used as if they were default HTML elements. The `{...passProps}` pattern allows for users to pass in custom (but HTML-supported) props like:

- `aria` roles
- `data-` attributes
- `title`

(Just to name a few)

It also allows for the user to hook into default React props, like:

- `onMouseEnter`
- `onClick`
- `htmlFor`

## Utils

Your component might need different functions, constants or other stuff that don't need to live inside of it, the place to put those is inside your utils file: `Checkbox.utils.js`.

## Exporting

We'll need to export `Checkbox` to make it simpler to import and use. This is all done in our `index.js` file:

```jsx
import Checkbox from "./Checkbox";

export default Checkbox;
```

Whoa 😳! More stuff!

## More Exporting

All of DRY's components are made available in `components/index.js`:

```
DRY-react/
  └── src/
      └── components/
          └── index.js
```

Open that file. You should see a **bunch** of exports listed under its **parent name**. Add `Checkbox`:

```jsx
...
// FormHelpers
export { default as Checkbox } from './FormHelpers/Checkbox'
...
```

**Checkbox.jsx**

```jsx
import React from "react";
import PropTypes from 'prop-types';
import classNames from "@classnames";

import * as Utils from "./Checkbox.utils.js"

import "./Checkbox.scss";

const DryCheckbox = ({ id,name, className, passProps,styles }) => {
  return (
    <div
      className={classnames({
        [className]: true,
        "dry-checkbox": true
      })}
    >
        <input type="checkbox" {...passProps} {...styles} name={name} id={id}/>

    </div>
  );
};

DryCheckbox.defaultProps = {
  passProps:null,
  styles:null,
  id:""
  name:""
}

DryCheckbox.propTypes = {
  passProps: PropTypes.obj,
  styles: PropTypes.obj,
  id: PropTypes.string,
  name: PropTypes.string
};


export default DryCheckbox;
```

And that's it 🙏! You've successfully created, hooked up, and exported our new `Checkbox` component 💪.

## About naming conventions

You'll quickly notice a pattern to everything we add inside a component. The reason for this is that DRY has many components! And when you are working inside your code editor, it's easier to find what you need if everything is named following a convention.

Below is a summary of things to pay attention to with examples of a slightly more complex component:

#### Folder Structure

```
DRY-react/
  └── src/
      └── components/
          └── FormHelpers/
              └── Checkbox/
                  ├── __snapshot__
                  └── Checkbox.test.js
                  └── Checkbox.scss
                  ├── index.js
                  ├── Checkbox.jsx
                  ├── Checkbox.utils.js
```

## Next

Let's add some [styles](./stying.md)!

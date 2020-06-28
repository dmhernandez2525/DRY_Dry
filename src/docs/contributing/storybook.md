# Write a story

In this guide, we'll walk through render our newly [styled](styling.md) [custom `Checkbox` component](creating.md) in [Storybook](https://storybook.js.org/).

## Directory

All of DRY's stories are located under the custum components directory `src/componets/FormHelpers/Checkbox/`:

```
DRY-react/
  └── src/
      └── components/
          └── FormHelpers/
              └── Checkbox/
                  └── Checkbox.stories.js
```

## Base story code

In our `Checkbox.stories.js` file, we'll need to add:

```jsx
import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox.jsx";
import README from "./README.md";
import PropTable from "./PropTable.md";

const stories = storiesOf("Components/Checkbox", module);

stories.add("default", () => <Checkbox />);
stories.addParameters({
  zeplinLink: "",
  readme: {
    codeTheme: "atom-dark",

    StoryPreview: ({ children }) => {
      return <div>{children}</div>;
    }
  }
});
```

Additional stories can be added using `stories.add`. Be sure to give each story a unique name.
Additional confergration can be added using `stories.addParameters` for a full list look here [Storybook Readme](https://github.com/tuchk4/storybook-readme)

## Add to Storybook

the path of `storiesOf("Components/Checkbox", module)` will determine where the component is placed in the docs

Awesome! We can see our `Checkbox` component in Storybook!

## Next

Let's [write some tests](testing.md) to make sure `Checkbox` works as we expect it to. (Just in case!)

## See also

- [Storybook](https://storybook.js.org/)

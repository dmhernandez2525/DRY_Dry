# Getting started

In this guide, we'll walk through some of the dos and dints with Variable names.

## Naming Conventions

### Let, Const, Var

When declaring a variable, we should always be using `const` or `let` we have moved away from `var.`

**const** should be the default for all variable names. You should only use **let** if you know that you will reassign the variable name at a later time. This is so that when another developer is looking at your code, they know that the variable is not reassigned anywhere else.

### Dynamic markup

Prefix any generated markup with the word **display** followed buy what the returned value is.

If you were, say making a react component, and in that component, you need to map over an array and pass the values from that array as props to HOC that would ultimately be displayed in the render function of the react component.

For Example, say we had a component named AllCards that took in a prop called objOfCardInfo, an array of objects that had info for individual cards. We would call the function that parses out the card components **displayAllCards**

```jsx
import React from "react";

import Card from "./Card";

const AllCards = ({ arrayOfCardInfo }) => {
  const displayAllCards = () => {
    return arrayOfCardInfo.map(singleCard => (
      <Card title={singleCard.title} text={singleCard.text} />
    ));
  };

  return <>{displayAllCards()}</>;
};

export default AllCards;
```

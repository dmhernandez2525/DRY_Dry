# Getting started

In this guide, we'll walk through how to get started with DRY development.

### CLI

Checkout the cli if you want to generate a component now. [CLI](cli.md)

## Setup

First, we need to clone the Azure repo to your computer. Go to the Azure dry repo page[Dry Repo](https://dev.azure.com/Comfort-Order/DRY/_git/Dry) and click `clone` in the top right corner, then click the `Generate Git Credentials` button and copy the key

Open up your terminal, and run this command in the directory of your choice:

```
git clone https://Comfort-Order@dev.azure.com/Comfort-Order/DRY/_git/Dry
```

Next, go into that directory:

```
cd Dry
```

And install all the dependencies in the world...

```
npm install
```

Great 🌈! You've setup and installed all of DRY's dependencies.

## Development environment

![DRY's Storybook development environment](../images/storybook.jpg)

DRY's development environment is powered by [Storybook](https://storybook.js.org/). To fire up DRY's Storybook, run the following command:

```
npm run storybook
```

DRY's `start` does a neat thing that automatically checks and installs dependencies for you as well as compiles all of the relevant files to be used in a local repo.

Once Storybook builds, you'll be able to visit it at [http://localhost:9009/](http://localhost:9009/).

The live version of DRY's Storybook can be seen at [NOT UP YET](NOT UP YET).

Fantastic ✌️! You've got DRY up and running on your computer.

## Code editor

You can use **whatever code editor you like**! We recommend using [Visual Studio Code](https://code.visualstudio.com/).

## Git branch

Create a new `git` branch for your work. the naming convention is feature or bug/description of the task - pbi number:

For example, If we where making a Checkbox component with a pbi of 50 this is what it would look like:

```
git checkout -b feature/checkbox-50
```

It is very important that you use either feature or bug as a prefix because that is what the devops client will be looking for.

## Next

Let's [create our new component](creating.md) in DRY!

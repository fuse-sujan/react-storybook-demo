This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is based on [Learn Storybook](https://www.learnstorybook.com/react/en/get-started).




## Overview
This is a demo project showcasing features of React Storybook. Storybook runs alongside your app in development mode. It helps you build UI components isolated from the business logic and context of your app.




## Scripts
Initiate a create-react-app project with the name `react-storybook-demo`
#### `npx create-react-app react-storybook-demo`

Add storybook to the project and initiate storybook
#### `npx -p @storybook/cli sb init`

### **NOTE:** We can quickly check that the various environments of our application are working properly
Run the test runner (Jest) in a terminal:
#### `yarn test`

Start the component explorer on port 9009:
#### `yarn run storybook`

Run the frontend app proper on port 3000:
#### `yarn start`




## How it works
Building an application using Storybook follows `bottom-up` approach. That means the smallest component is built first and then they are combined together or with other smaller components to build complex components.
- `Task` is the smallest component in the project. So, `Task.js` is created first.
- Another file named `Task.stories.js` is created for storybook.
- Config for storybook is edited from `.storybook/config.js` file. In this file, we specify that storybook should be created using `*.stories.js` files in `src/components` folder.
- Next, `TaskList` component is created along with its stories. This is a component created by combining `Task` components.
- Notice that this component connects to redux state and has some dispatchable action creators. But to avoid it in stories, a `PureComponent` is also exported.
- Finally, `InboxScreen` is created. This is a presentational component created solely for the purpose of separating presentational and container components.
- `InboxScreen.stories.js` is also created for writing its stories. Here, `<Provider>` with a mock store has to be used because the component it uses will not be the `PureComponent` exported from `TaskList.js` but will be the component linked with `Redux`.

As seen in `*.stories.js` files, storybook uses some functions to create the view we see when we run it.
- `storiesOf()` function creates an entire module under which stories are created.
- `add()` function adds a new story to the module. It expects a name and a functional component as its parameters.
- `action()` function mocks a function call (as execution of component's function in not necessary).
- `addDecorator()` function is used to wrap stories with a `WrapperComponent`. It can also be used to insert various `addons` to the stories like `Knobs`.
- `Knobs` is a addon that can be used as data template for the stories. Default data is provided as props to the component using `object()` function which can be changed in the storybook view to test UI.




##  References
- https://www.learnstorybook.com/react/en/get-started
- https://medium.com/@mtiller/storybook-react-typescript-and-jest-c9059ea06fa7

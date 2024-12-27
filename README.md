# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## How to Test?

When you launch the application using npm start, you will be redirected to the Parties tab of a particular quotation. Here, in the Managing Broker section, you can type in a name in the Name field. The available values are - 
Harry Potter
Hermoine Granger
Ron Weasley
Ginny Wealey, and
Neville Longbottom.
When user searches for any of the above values, the Name along with Address, City and Country are also shown. On selecting a particular name, its relevant details are populated in the fields from our mock data.
The user will also have an option to choose a Contact for a selected Name.
For Name Harry Potter, the available contacts are :
Albus Dumbledore
Severus Snape

When user searches for a value and doesn't find it, he / she has the option to create a New Legal Entity.
In order that the value input by user is not lost on clicking New Legal Entity, we populate it in our modal.
The user can then either enter all the other details or just leave them blank.
However, the name is required.
The UI checks for 2 things - 
1. The name is not left empty
2. The exact same details already exist, in which case it would be useless to create a new entity.
If either of above is being violated, the CREATE button stays disabled and a warning appears.
The Address and City in modal combines to form Address in Managing Broker section.
They are separated by a comma.
However, the comma only appears if there is both an Address and a City.

Normally, if we are creating a new entity, the contacts are fteched based on entity name.
We have a mock data for that.
On inputting Legal Name as New Legal Entity 1, there are 2 contacts associated with it -
Sirius Black
Luna Lovegood.
By default, the 1st contact is selected in case of New Leagl Entity. 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

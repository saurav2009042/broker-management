# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How to Test?

When we launch the application using `npm start`, the application will open in **Quotations** tab of the Sidebar. In an ideal scenario, the **Quotations** tab should provide us with a list of quotations and a user clicks on a particular quotation, only then should the details page of that particular quotation should open. I have created a placeholder called **Quotations** to add this functionality at a later stage.

For now, when we launch the application, we will be taken directly to the detail page of a quotation, and specifically, its **Parties** tab.

Under this tab, we will be able to see 3 sections - 
1. Joint Insured
2. Managing Broker, and
3. Introducing Broker.

### Joint Insured, Introducing Broker

It has been assumed that **Joint Insured** and **Introducing Broker** sections consist of only *Name*, *Address* and *Country* fields. Moreover, it has also been assumed that the **Create New Legal Entity** functionality is present only in **Managing Broker** section.

### Managing Broker

In addition to the *Name*, *Address*, and *Country* fields, the **Managing Broker** section also contains *Contact* and *Commission* fields.

The *Name* field works as follows - when user types in a name, he / she is presented with a list of values, along with the full address. Currently, the available values are - 
- Harry Potter
- Hermoine Granger
- Ron Weasley
- Ginny Wealey, and
- Neville Longbottom.

On selecting a particular name, its relevant details are populated in the fields from our mock data. 

The user will also have an option to choose a *Contact* for a selected *Name*. For Harry Potter, the available contacts are:
- Albus Dumbledore
- Severus Snape

When user searches for a value and doesn't find it, he / she has the option to create a new legal entity.

In order to ensure that the value input by the user is not lost on clicking *Create a New Legal Entity*, we populate it in our modal. The user can then either enter all the other details or just leave them blank. However, **the Name field is required!**

The UI checks for 2 things - 
1. Whether the *Name* field is not left empty.
2. Whether the exact same details already exist, in which case it would be useless to create a new entity.

If either of above is being violated, the *CREATE* button stays disabled and a warning appears.

The *Address* and *City* in modal combines to form *Address* in **Managing Broker** section. They are separated by a comma.
However, the comma only appears if the user has input both the *Address* and the *City*.

Normally, if we are creating a new entity, the available contacts are fetched based on entity name. We have a mock data for that - on inputting *Legal Name* as **New Legal Entity 1**, there are 2 contacts associated with it -
- Sirius Black
- Luna Lovegood.

By default, the 1st contact is selected when a new legal entity is created. Otherwise, the contacts are usually returned as a part of Managing Broker data from our mock.
 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

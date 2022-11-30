# banking_system

## Prompt

You'll be building a full-stack application that allows users to send money to each other. You'll need some pre-existing user data, which you'll store in a [MySQL](https://dev.mysql.com/doc/refman/5.7/en/) database, to accomplish this. Views produced from database data will be displayed in your front end. You'll be able to use [ReactJS](https://facebook.github.io/react/)and your project will be served by a [NodeJS](https://nodejs.org/) web server using [ExpressJS](https://expressjs.com/).

**BEFORE CONTINUING you must confirm you are running MySQL version 5.7 or above**
To check the version of the installed MySQL server: on Mac run `mysql_config --version` in the terminal; on Windows run `mysql -V` in the terminal and check the value printed for `Distrib`. **If you are running something other than 5.7.x, you must speak with your Technical Mentor before you can move on.**

This evaluation is designed to have more work than you will be able to do in a single day, so don't worry if you don't finish all of the features below. Please work on the following features **in order**, only going on to the next after the one you're working on is finished.
**Please commit WORKING code early and often**, and especially when each feature has been completed.

** Important Notice
To Run this project you have to navigate to the frontEnd to run the script start for the front,
and for the backend you need to navigate to the Backend Folder and run the script start from there.
Analyse the package.json that exists in the frontEnd and in the backEnd and figure out what additional dependicies that you have to install.



### Getting Balance

![part one][one]

**Implement the following user story:**

- As a user, I expect to see my current balance when I enter my name and click "Get Balance."

Follow these steps to put this user narrative into action:

- Use the ExpressJS web server to deliver your application.

- Build the app and balance components using dummy data in 'dummy data.js', and use the current code in the'react-client' directory. If necessary, make changes to'frontEnd/src/App.js'.
- Using the given schema.sql, create the database and the users table, then populate the database according to the instructions in the comments.

- In 'backEnd/database-mysql/index.js,' complete the getAllUsers method.

- In your express server'backEnd/server/index.js' file, add a route that will return an array of all users in response to GET requests to '/api/users' (including name, id, and balance).

- Substitute the data retrieved from the server for your fictitious data.
- **WHEN COMPLETE** please make a commit with "step one complete".

### Transferring Money

![part two][two]

#### Implement the following user stories:

- As a user, I expect to see my current balance and a list of other users, excluding myself, when I input my name and click "Get Balance."(it on you how you want to implement this view);
- As a user, I expect to see an input box and a button to transfer money when I click on another user's name.
- When I click on the button to send money, I expect my balance to display my updated balance after the transfer.
- I expect my balance to be updated when I see my balance after another user transfers money to me.

Implement this user story by doing the following:

- Create any new components or directives as necessary.
- Create any new server-side routes as necessary.

**WHEN COMPLETE** please make a commit with "step two complete".

### Creating a new account

![part three][three]

#### Implement the following user stories:

- As a user, I should have an option to create an account when i click on the create account button.

Implement this user story by doing the following:

- Create a view for creating a new account (the view should include inputs and a submit button(how will it look depends on you )).
- Update any components or directives as necessary.
- Create any new server-side routes as necessary.

**WHEN COMPLETE** please make a commit with "step three complete".

### Updating my account/deleting my account

![part four][four]

#### Implement the following user stories:

- As a user, I expect to see an update option that allows me to update my account (only name) if a mistake happened in the creation and also a delete feature that allows me to delete an account"

Implement this user story by doing the following:

- Use the existing data in your database and create any new query methods as necessary.
- Update any components or directives as necessary.
- Create any new server-side routes as necessary.

**WHEN COMPLETE** please make a commit with "step four complete".

### Limit transactions between users

![part five][five]

#### Implement the following developer stories:

- When a user attempts to transfer more than $500 in one transaction, block the transaction and display a message.
- When a user attempts to transfer to the same user more than two times within 15 seconds, block the transaction and display a message.
- A user can have up to -200 balnace . When the balance goes below zero the balance should be displayed in red.
- A user cannot make any transaction when his balance is below -200

Implement this user story by doing the following:
- Write rate-limiting middleware for your Express server (do no use any existing npm modules).
- if you can t implement a middleware deal with this user story however you see fit.
- Create any new components or directives as necessary.

**WHEN COMPLETE** please make a commit with "step five complete".

### Authentication

#### Implement the following developer stories:

- When a user enters their name and a password for the first time they check their balance, save this password to their account and require it for all subsequent logins.

Implement this user story by doing the following:

- Write authentication middleware for your Express server.
- Update any components or directives as necessary.

**WHEN COMPLETE** please make a commit with "step six complete".

## Available Resources

- [MDN](https://developer.mozilla.org/)
- [ExpressJS Docs](https://expressjs.com/)
- [Body Parser Middleware Docs](https://github.com/expressjs/body-parser)
- [MySQL Doc](https://dev.mysql.com/doc/refman/5.7/en/)
- [MySQL npm package Docs](https://www.npmjs.com/package/mysql)
- [ReactJS Docs](https://facebook.github.io/react/)
- [React Router Docs](https://github.com/ReactTraining/react-router/tree/master/docs)
- [Webpack Docs](https://webpack.github.io/docs/)
- [Babel Docs](https://babeljs.io/docs/setup/)
- [NodeJS Docs](https://nodejs.org/)
- [ExpressJS Docs](https://expressjs.com/)
- [jQuery Docs](https://jquery.com/)
- [Postman](https://www.getpostman.com/)
- [BluebirdJS Docs](http://bluebirdjs.com/)
- Docs for any npm packages you might use
- [Stack Overflow](http://stackoverflow.com/)
- [Google Search](https://google.com) to search for the correct page on any of the documentation above


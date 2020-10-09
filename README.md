This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

#Login Page:

Steps followed for firebase access:
1. Enabled firebase authentication email and password in the firebase account.
2. Created firebase.js file with the config content from the firebase account.
3. In the firebase.js file initialized the app with firebase config, initialized the db and auth(// this gives us a variable , that we can use to handle all the signing in and everything like that).
4. In Login.js file , tried accessing the user login and register functionalities. Used auth.createUserWithEmailAndPassword() -to register account.  Inside this if the auth is correct (if the account is successfully create a user I firebase db with a email and password, we are redirecting/ pushing  the user to main page.
5. AND auth.signInWithEmailAndPassword() to sign in the account.(if the user entered a correct email and password, we are redirecting/ pushing  the user to main page).


1. Now accessing the auth details in the app.js file
2. Store the user inside of our react context API (so inside of our store), so goto our reducer.js file and add a user in the initial state.
3. Go back to App.js file , when the user logs in, we need the dispatch. The information of the user will be stored in to the data layer(every time the user logs in, then it will shoot the user in to the data layer i.e., dispatch({ type: ’SET_USER’, user: authUser}), and if the user logs out, then it will eradicate/ remove the user from the data layer i.e,.dispatch({ type: ’SET_USER’, user: null})

#Deployment

sudo npm i -g firebase-tools
firebase init
select -> Hosting 
What do you want to use as your public directory? build
Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y

npm run build (whenever you do changes to the project, run this command)
firebase deploy


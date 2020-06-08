This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts (In Package.Json)
In the project directory, you can run: 
### For Installation 'yarn install'
Description: It will install all the dependencies of project.

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

### 'yarn pr’
Desc: This command will help in identifying Lint errors, run unit, and end to end test cases and to create deployable code for the production. 
### ‘yarn prettier’
Desc: This command will beautify/format the code. 
### ‘yarn lint”
Desc: This command will help to identify Lint errors.
### ‘yarn e2e”
Desc: This command will run end to end test cases.
### husky
This command can prevent bad git commit, and push.
### UI library 
Material UI
### end to end testing
TestCafe
File of Testcafe is located at src/e2e/app.js. A basic test case is written to validate whole application workflow
### Unit testing
React testing library
File of unit test case is located at src/App.test.js. Four test cases are written to validate 
1.	Wizard moves backwards and forwards based on actions sent by steps.
2.	Wizard calls onComplete() of the parent when a steps sends the end action.
3.	Shipping Label marker prints the shipping label when onComplete() is called.
### Core Component 
The file is located at src/core/components/wizard/folder/Wizard.js. 
This is higher order component class so that it can accept steps, actions and wizard context.
### Auth Component
This is higher order function component. This will help in Authentication, and then it will initiate the shipping label marker project. To run this, go to http://localhost:3000](http://localhost:3000) and enter the username: kirti and password:shiva@3@456
### Project File naming convention
Folder name should in lower case or lower case with dashes(-).
File name should be in camel case
### Project’s file location





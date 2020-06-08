### `Shipping Label Maker is an application that collects shipping information from the user and prints a shipping label. `

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
      
### Project Setup  `yarn install`
Description: It will install all the dependencies of project.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Low Level Design , Project file and folder structure 
  ------ ### `Project File naming convention`
     a) Folder name should in lower case or lower case with dashes(-).
     b) File name should be in camel case
     
     ### `Low Level Design `
     1.  `ShippingLabelMaker` [src/features/shipping-label-maker/ShippingLabelMarker.js] 
        It is main file to start the project steps and in this file you will noticed the StepHub component which is wrrapedComponent for Wizard HOC 
     2. 'StepHub' [src/features/shipping-label-maker/steps/StepHub.js] 
        a) It contain StepHubProgressBar and TaskHub component for rendering the steps . 
            i) StepHubProgressBar - It is used to display the progress bar in stepper mode 
            ii) TaskHub is responsible to display the required form as per active step and complete logic for rendering Task is added in         getCurrentTask() function. 
            We can add as many components within one step 
            that's why it is named as TaskHub 
            iii) StepHubActionButton - renders the previous and next button for the step
     3. ### `Step 1 (GetSenderAddress)` - `Task` is named as TaskSenderAddress.js and located at [src/features/shipping-label-maker/steps/TaskSenderAddress.js]
     4.  ### `Step 2 (GetReceiverAddress)` - `Task` is named as TaskReceiverAddress.js and located at [src/features/shipping-label-maker/steps/TaskReceiverAddress.js]
     5 ### `Step 3 (GetWeight)` - `Task` is named as TaskWeight.js and located at [src/features/shipping-label-maker/steps/TaskWeight.js]
     6.  ### `Step 4 (GetShippingOption)` - `Task` is named as TaskSenderAddress.js and located at [src/features/shipping-label-maker/steps/TaskShippingOption.js]
     7. ### `Step 5 (Confirm)` - `Task` is named as TaskConfirm.js and located at [src/features/shipping-label-maker/steps/TaskConfirm.js]
        8.### `ShippingLabel` - is named as `ShippingLabel.js` and located at  [src/features/shipping-label-maker/ShippingLabel.js]
 
### `Core Component wizard` [src/core/components/wizard]
The file is located at [src/core/components/wizard/folder/Wizard.js.]
This is higher order component class so that it can accept steps, actions and wizard context.

### `Auth Component` [src/core/components/auth]
This is higher order function component. This will help in Authentication, and then it will initiate the shipping label marker project. --- To run this, go to http://localhost:3000](http://localhost:3000) and enter the username: kirti and password:shiva@3@456
--- Basic validation is added for now for login button 

### `Util Folder` [src/util]
 This is used as utility of shippingLabelMarker to get shipping cost , getShippingOption, getShippingCost, ShippingOption, convertWeightToInt. 

### `common folder` [src/common]
It is used for command components like Header, footer , signup etc.  

### `UI library` 
Material UI - 
 Modified the css accordingly as per template
 
### `End to End Testing` [src/e2e]
  ### TestCafe
   File of Testcafe is located at [src/e2e/app.js]. A basic test case is written to validate whole application workflow. Configuration is added for only chrome browser for now. But we can modified the configuations as per our requirement. Ideally we should add all browsers to verify the code . 
   
### `Unit testing`
### React testing library
File of unit test case is located at [src/App.test.js]. Four test cases are written to validate 
1.	Wizard moves backwards and forwards based on actions sent by steps.
2.	Wizard calls onComplete() of the parent when a steps sends the end action.
3.	Shipping Label marker prints the shipping label when onComplete() is called.

### ` Validations  `
   Validation pending for steps - Not done 
   
### `PACKAGE.JSON - USEFUL COMMANDS FOR PROJECT DEPLOYMENT AND TESTING `

`### `yarn test`
Launches the test runner in the interactive watch mode.

### `yarn build`
Builds the app for production to the `build` folder.<br />

### `yarn pr`
This command will help in identifying Lint errors, run unit, and end to end test cases and to create deployable code for the production. 

### `yarn prettier`
This command will beautify/format the code. 

### `yarn lint`
This command will help to identify Lint errors.

### `yarn e2e`
This command will run end to end test cases.

### `husky`
Husky hook is added to prevent bad git commit, and push. And  pre-commit and pre-push hook is added to prevent the bad git push and commit 
`



  





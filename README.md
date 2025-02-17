# Udacity Ract would you rather project


This is the third project of Udacity react nanodegree.

**Would you rather** lets a user play the famous “Would You Rather?” game. The game goes like this: 

> A user is asked a question in the form: “Would you rather [_option A_]
> or [_option B_] ?”.
> 
> Other users answer the poll question and choose form A & B, answering "neither" or "both" is against the rules
 



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  ## Get Stated

 1. run `yarn` or  `npm i` to install needed dependencies
 2. run `yarn start` to open the project in development mode


## Available Scripts

  

In the project directory, you can run:

  

### `yarn start`

  

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.

You will also see any lint errors in the console.

 

### `yarn build`

  

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!


  

### `yarn eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  ## Data API
  The `_DATA.js` file represents a fake database and methods that let you access the data.
 

  

## Data

  

There are two types of objects stored in our database:

  

* Users

* Questions

  

### Users

  

Users include:

  

| Attribute | Type | Description |
|-----------------|------------------|------------------- |
| id | String | The user’s unique identifier |
| name | String | The user’s first name and last name |
| avatarURL | String | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers | Object | The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

  

### Questions

  

Questions include:

  

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The question’s unique identifier |
| author | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

  

### Voting Options

  

Voting options are attached to questions. They include:

  

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes | Array | A list that contains the id of each user who voted for that option|
| text | String | The text of the option |


Your code will talk to the database via 4 methods:

  

* `_getUsers()`

* `_getQuestions()`

* `_saveQuestion(question)`

* `_saveQuestionAnswer(object)`

  

1) `_getUsers()` Method

  

*Description*: Get all of the existing users from the database.

*Return Value*: Object where the key is the user’s id and the value is the user object.

  

2) `_getQuestions()` Method

  

*Description*: Get all of the existing questions from the database.

*Return Value*: Object where the key is the question’s id and the value is the question object.

  

3) `_saveQuestion(question)` Method

  

*Description*: Save the polling question in the database.

*Parameters*: Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

  

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

  

*Return Value*: An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

  

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

  

4) `_saveQuestionAnswer(object)` Method

  

*Description*: Save the answer to a particular polling question in the database.

*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

  

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|


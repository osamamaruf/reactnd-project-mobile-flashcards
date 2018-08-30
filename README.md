# Mobile Flash Cards

This project has been made for evaluation in the React Fundamentals course. The project is a flash cards application in which user can:
1) Create decks any number of decks
2) Decks can contain any number of cards
3) Take a quiz and obtain a score based on number of correct answers


Additionaly the user will be notified daily on 20: 00 hrs to study in case they have not completed a quiz that day.


## TL;DR
* Mobile Flash Cards
* Create / Group questions and answers ; Take a Quiz
* Use `yarn install` and `yarn start` to view (yarn can be substitued by npm)
* Project has been bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app)


# Platform
The application has been tested on Android ( 6.0 Marshmellow ).

## Installation

* project dependencies can be installed with `yarn install` or `npm install`
* to start the development server run `yarn start` or `npm start`
* apk file can be generated by executing `exp build:android` 


## Backend Server

The backend server is a mock file using AsyncStorage. The provided file [`api.js`](utils/api.js) methods used to interact with data . They are:

* `handleInitialData()`
* `getDeck(id)`
* `saveDeckTitle(id)`
* `addCardToDeck(id, object)`


## Create React Native App

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).


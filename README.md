# campai - Backend for Fullstack developer Challenge

Welcome to **[campai](https://campai.de/)**!

This is the backend side of a code challenge for the position of `Full Stack Developer`.

Please read the following notes carefully, since they are of utmost importance for this challenge

*   Show us what you know! Think outside of the box. Think about structure, reusability and scalability
*   You should create your own repository for the front-end. You can set it up however you prefer, but you have to use `React`, a store (Mobx or Redux are fine) and a comprehensive README to help anyone setup and run your code.
*   Testing is a must for the backend. Bonus points if you add it Travis.
*   Testing the front-end is not necessary, bonus points if you do :+1:
*   Once again, think about scalability. If I would have to add 20 more endpoints for your server tomorrow, how easy would that be?

Happy coding! :coffee:

# Before you start

Fork this repo to your private profile. Then you can submit a PR and let us know when you finish!

Also, for the dev environment we suggest:

*   Node 8.9.4+
*   Mongo 3.4+
*   Any code editor of your choice (Although VScode is always the right choice)
*   Npm or Yarn as package managers. Npm 5+ is fast, so we reccomend that.

## How to start:

First, you need to have Mongo installed and running. Then you can create the fake database by running:

```
npm run fake-data
```

Then you can start the app by simply running

```
npm start
```

## Testing

Unit tests are essential for this challenge. You have to use `ava` as you test runnung. You can check the documentation [here](https://github.com/avajs/ava).

To run the tests, simply do

```
npm run test
```

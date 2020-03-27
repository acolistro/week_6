# _Doctor Info_

#### _A simple app that allows a user to find a nearby doctor by name or by symptom, current version: 2020 _

#### By _**Alyssa Colistro**_

## Description

_This app uses the Better Doctor API to allow a user to search doctors and practices nearby that either match a name query or a symptom query based on the location of the user. It displays the first 10 results that match the query._

|   Behavior    |   Input     |     Output    |
|--------------:|:-----------:|--------------:|
|User enters a medical issue as a string |flu 345 |"please enter query without numbers." |
|A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query |Migraine |*contact info for physician.* |
|A user should be able to enter a name to receive a list of doctors in the Portland area that fit the search query. |Marsha Brady |*list of physicians with similar names* |
|If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data). |Marsha Brady |Marsha, Brady, 123 Alphabet St, 502-123-4567, www.abc.com, accepting new patients. |
|If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is. |*API call with bad link* |Error: connection refused. |
|If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.) |Search: Marsha Brady |"There are no doctors by that name in your area." |






## Setup/Installation Requirements

* _Access my repository for this project on GitHub here: https://github.com/acolistro/week_6.git_
* _Ensure you have node and npm properly installed on your machine_
* _Once you have the repository cloned, run npm init -y in the repository from your command line_
* _Delete the package-lock.json file from the repository._
* _Once that is done, run npm install_
* _Once that is done, run npm run build_
* _You will need your own user key for the better doctor API, which you can get by following the instructions here: https://developer.betterdoctor.com/_
* _If you build a front end/UI, you can use the npm start command to view the app on a local server._


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you find a bug I highly encourage you to contact me at arcolistro@gmail.com and/or submit a pull request to this repository. Please note that this application is not built to be compatible with web-accessibility tools or be viewed on any browser other than the current version of the Chrome browser._
## Technologies Used

_This app was built using JavaScript, Node.js, npm, HTML, and the BetterDoctorAPI as well as the following dependencies:_

    "@babel/core": "^7.6.4",
    "@babel/plugin-transform-modules-commonjs": "^7.6.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.2.0",
    "dotenv-webpack": "^1.7.0",
    "eslint": "^6.3.0",
    "eslint-loader": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "style-loader": "^1.0.0",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "webpack": "4.39.3",
    "webpack-cli": "^3.3.8",
    "webpack-dev-server": "^3.8.0"
    "bootstrap": "^4.4.1",
    "jquery": "^3.4.1",
    "popper.js": "^1.16.1"

### License

*There are no licensed materials used in this app in its current state.*

Copyright (c) 2020 **_MallSoft95 LLC_**

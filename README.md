# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

|   Behavior    |   Input     |     Output    |
|--------------:|:-----------:|--------------:|
|User enters a mediacal issue as a string |flu 345 |"please enter query without numbers." |
|A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query |Migraine |*contact info for physician.* |
|A user should be able to enter a name to receive a list of doctors in the Portland area that fit the search query. |Marsha Brady |*list of physicians with similar names* |
|If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data). |Marsha Brady |Marsha, Brady, 123 Alphabet St, 502-123-4567, www.abc.com, accepting new patients. |
|If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is. |*API call with bad link* |Error: connection refused. |
|If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.) |Search: Marsha Brady |"There are no doctors by that name in your area." |






## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**

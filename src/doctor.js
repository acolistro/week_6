export class Doctor {
    constructor() {
      this.error;
    }
      async getDoctor(query) {
        try {
          let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=45.505%2C-122.675%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
          let jsonifiedResponse;
          if (response.ok && response.status == 200) {
            jsonifiedResponse = await response.json();
          } else {
            let errorMessage = ("There was an error handling your request: " + response.statusText);
            this.error = errorMessage;
            jsonifiedResponse = errorMessage;
          }
          return jsonifiedResponse;
        } catch(error) {
          let errorMessage = ("There was an error handling your request: " + error.message);
          return errorMessage
        }
      }  
  } 
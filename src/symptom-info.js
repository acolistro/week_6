export class SymptomInfo {
    constructor(symptom) {
      this.symptom = symptom;
      this.description = "Description: " + symptom.practices[0].description;
      this.practice = "Practices:" + symptom.practices[0].name;
      this.email = "Email: " + symptom.practices[0].email; 
      this.website = "Website: " + symptom.practices[0].website;
    }
  }
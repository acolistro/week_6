import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import { Doctor } from './../src/doctor.js';

$(document).ready(function() {

  $('#getDoctor').click(function() {
    const name = $('#name').val();
    $('#name').val("");
    console.log(name);
    

    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctorByName(name);
      getElements(response);
    })();

    async function getElements(response) {
      const docArray = response;
      let docNameArray = [];
      
      docArray.data.forEach(function(doctor) {
        let newPatients = [];
        console.log(newPatients);
        docNameArray.push(doctor.profile.first_name + " " + doctor.profile.last_name);
        acceptNew.push(doctor.practices);
        console.log(doctor.profile.bio);
        doctor.practices.forEach(function(practice) {
          newPatients.push(practice.accepts_new_patients);
          console.log(docArray.data.practices);
        });
      });
      

      for (let i=0; i<docNameArray.length; i++) {
        docNameArray[i].toUpperCase();
        $('.panel-title').append(docNameArray[i]);
        $('.showBio').append("<li>" + "Doctor Name: " + docNameArray[i] + "</li>");
      if (newPatients === true) {
        $('.acceptingNew').append("<li>" + "This doctor is accepting new patients! " + "</li>");
      } else {
        $('.acceptingNew').append("<li>" + "This doctor is NOT accepting new patients! " + "</li>");
      }
    }
  }

  });
});
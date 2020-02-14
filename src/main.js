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
      let acceptNew = [];
      console.log(docArray);

      docArray.data.forEach(function(doctor) {
        docNameArray.push(doctor.profile.bio);
        acceptNew.push(doctor.accepts_new_patients);
        console.log(doctor.profile.bio);
      });

      for (let i=0; i<docNameArray.length; i++) {
      $('.showBio').append("<li>" + "Doctor Name: " + docNameArray[i] + "</li>");
      if (acceptNew[i] === true) {
        $('.acceptingNew').append("<li>" + "This doctor is accepting new patients! " + "</li>");
      } else {
        $('.acceptingNew').append("<li>" + "This doctor is NOT accepting new patients! " + "</li>");
      }
    }
  }

  });
});
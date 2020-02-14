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

      docArray.data.practices.forEach(doctor) {
        docNameArray.push(doctor.name);
        acceptNew.push(doctor.accepts_new_patients)
      }

      for (let i=0; i<docArray.length; i++) {
      $('.showName').append("<li>" + "Doctor Name: " + docNameArray[i] + "</li>");
      $('.acceptingNew').append("<li>" + "Is this doctor accepting new patients: " + acceptNew[i] + "</li>");
    }
  }

  });
});
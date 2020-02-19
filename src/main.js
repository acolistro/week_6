import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import { Doctor } from './../src/doctor.js';
import { DoctorInfo } from './../src/doctor-info.js';


$(document).ready(function() {
  
  $('form#by-query').submit(function(event) {
    event.preventDefault();
    const query = $('#query').val();
    $('#query').val("");

    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctor(query);
      console.log(response);
      getElements(response);
      if (doctor.error) {
        $("p.error").append(response);
        console.log(doctor.error);
      }
      if (response.data.length === 0) {
        $("p.error").append("There was an error handling your request: either no doctors match your query or you did not enter a valid name or symptom. Please try again!");
      }
    })();
    
    
    async function getElements(response) {      
      response.data.forEach(function(doctor) {
        let docInfo = new DoctorInfo(doctor);
        let acceptsNew;
        let website;
        docInfo.doctor.practices.forEach(function(practice) {
          if (practice.accepts_new_patients === true) {
            acceptsNew = "This doctor is accepting new patients!";
          } else {
            acceptsNew = "Please contact doctor directly to find out whether they is accepting new patients";
          }
          if (practice.website) {
            website = '<a href="' + practice.website + '">Practice Website</a>';
          } else {
            website = "This doctor does not have a website listed.";
          }
        });
        let info = '<li>' + '<h2 class="doc-name">' + docInfo.name + '</h2>' + '<p id="doc-bio">' + docInfo.bio + '</p>' + '<p class="practices">' + docInfo.practice + '</p>' + '<p class="address">' + docInfo.address + '</p>' + '<p class="phone">' + docInfo.phone + '</p>' + '<p class="accepting-new">' + acceptsNew + '</p>' + '<p class="website">' + website + '</p>' + '</li>';
        console.log(info);

        $("ul.show-info").append(info);
        
      });
    }
  });
});

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import { Doctor } from './../src/doctor.js';
import { DoctorInfo } from './../src/doctor-info.js';
import { SymptomInfo } from './../src/symptom-info.js';

$(document).ready(function() {
  
  $('form#by-name').submit(function(event) {
    event.preventDefault();
    const name = $('#name').val();
    $('#name').val("");

    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctorByName(name);
      console.log(response);
      getElements(response);
      if (doctor.errorMessage) {
        $(".errors").append(doctor.errorMessage);
      }
    })();
    
    
    async function getElements(response) {      
      response.data.forEach(function(doctor) {
        let docInfo = new DoctorInfo(doctor);
        let acceptsNew;
        docInfo.doctor.practices.forEach(function(practice) {
          if (practice.accepts_new_patients === true) {
            acceptsNew = "This doctor is accepting new patients!";
          } else if (practice.accepts_new_patients === undefined) {
            acceptsNew = "It is not clear whether this doctor is accepting new patients";
          }
        });
        let info = '<li>' + '<h2 class="doc-name">' + docInfo.name + '</h2>' + '<p id="doc-bio">' + docInfo.bio + '</p>' + '<p class="practices">' + docInfo.practice + '</p>' + '<p class="address">' + docInfo.address + '</p>' + '<p class="phone">' + docInfo.phone + '</p>' + '<p class="accepting-new">' + acceptsNew + '</p>' + '</li>';
        console.log(info);

        $("ul.show-info").append(info);
        
      });
    }

    $('form#by-symptom').submit(function(event) {
      event.preventDefault();
      const symptom = $('#symptom').val();
      $('#symptom').val("");
  
      (async () => {
        let doctor = new Doctor();
        const response = await doctor.getDoctorBySymptom(symptom);
        console.log(response);
        getElements(response);
        if (doctor.errorMessage) {
          $(".errors").append(doctor.errorMessage);
        }
      })();
      
      
      async function getElements(response) {      
        response.data.forEach(function(symptom) {
          let pracInfo = new SymptomInfo(symptom);
          let acceptsNew;
          pracInfo.symptom.practices.forEach(function(practice) {
            if (practice.accepts_new_patients === true) {
              acceptsNew = "This practice is accepting new patients!";
            } else if (practice.accepts_new_patients === undefined) {
              acceptsNew = "It is not clear whether this practice is accepting new patients";
            }
          });
          let info = '<li>' + '<h2 class="prac-name">' + pracInfo.practice + '</h2>' + '<p id="doc-desc">' + pracInfo.description + '</p>' + '<p class="email">' + pracInfo.email + '</p>' + '<p class="website">' + pracInfo.website + '<p class="accepting-new">' + acceptsNew + '</p>' + '</li>';
          console.log(info);
  
          $("ul.show-info").append(info);
          
        });
      }
    })
  })
})
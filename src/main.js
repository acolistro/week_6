import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import { Doctor } from './../src/doctor.js';
import { DoctorInfo } from './../src/doctor-info.js';

$(document).ready(function() {
  
  $('#getDoctorName').click(function() {
    const name = $('#name').val();
    $('#name').val("");
    let docInfoArray = [];
    console.log(docInfoArray);
    
    for (let i=0; i<=docInfoArray.length; i++) { 
      $("#show_by_name").append(docInfoArray[i]);
    }
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
        docInfoArray.push('<h2 class="doc-name">' + docInfo.name + '</h2>' + '<p id="doc-bio">' + docInfo.bio + '</p>' + '<p class="practices">' + docInfo.practice + '</p>' + '<p class="address">' + docInfo.address + '</p>' + '<p class="phone">' + docInfo.phone + '</p>' + '<p class="accepting-new">' + acceptsNew + '</p>');
        
      });
    }
  })
})
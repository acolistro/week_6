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
        docInfo.acceptingNew();
        $(".show_by_name").append(
          '<div class="panel panel-default">' + 
            '<div class="panel-heading">' +
              '<h2 class="panel-title">' + docInfo.name + '</h2>' + '</div>' + 
              '<div class="panel-body">' + '<h2 id="doc-bio">' + docInfo.bio + '</h2>'
        );
       

      });
      

  //     for (let i=0; i<docArray.length; i++) {
  //       docNameArray[i].toUpperCase();
  //       $('.panel-title').append(docNameArray[i]);
  //       $('.showBio').append("<li>" + "Doctor Name: " + docNameArray[i] + "</li>");
  //     if (newPatients === true) {
  //       $('.acceptingNew').append("<li>" + "This doctor is accepting new patients! " + "</li>");
  //     } else {
  //       $('.acceptingNew').append("<li>" + "This doctor is NOT accepting new patients! " + "</li>");
  //     }
  //   }
  // }


  }
})
});
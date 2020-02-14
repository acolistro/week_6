import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import { Doctor } from './doctor.js';

$(document).ready(function() {

  $('#getDoctor').click(function() {
    const name = $('#name').val();
    $('#name').val("");

    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctorrByName(name);
      getElements(response);
    })();

    function getElements(response) {
      $('.showAddress').text(`Location:`);
      $('.acceptingNew').text(`Is this doctor accepting new patients:`);
    }

  });
});
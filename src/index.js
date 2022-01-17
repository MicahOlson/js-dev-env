import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Placeholder from './js/placeholder';

$(document).ready(function () {
  const placeholder = new Placeholder();
  $('#test-1').text(placeholder.methodA());
  $('#test-2').text(placeholder.methodB());

  // $('.form-group').submit(function (event) {
  //   event.preventDefault();
  // });
});

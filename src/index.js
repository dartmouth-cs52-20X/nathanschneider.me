import $ from 'jquery';
import './style.scss';

let seconds = 0;

setInterval(() => {
  seconds += 1;
  $('#main').html(`You've been on the page for ${seconds} seconds`);
}, 1000);

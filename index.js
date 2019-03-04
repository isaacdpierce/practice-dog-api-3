'use strict';

function userBreed() {
  const breed = $('.js-breed').val();
  return breed;
}

function getDogImage() {
  fetch(`https://dog.ceo/api/breed/${userBreed()}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      displayResults(responseJson);
      throw responseJson;
    })
    .catch(error => {
      alert(error.message);
    });
}

function displayResults(responseJson) {
  const image = responseJson.message;

  $('.js-results').empty();

  return $('.js-results').append(`
      <img src="${image}" alt="dog" class="results-img"/>
    `);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

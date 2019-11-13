$(function() {

    let $list = $('ol');
    let $newItemForm = $('#newItemForm');
  
    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      let text = $('#itemField').val();
      $list.append(`<li>${text}</li>`);
      $('#itemField').val('');
    });
  
    $list.on('click', 'li', function() {
      let $this = $(this);
      $this.remove();
    });
  });

  var myLocation = document.getElementById("my-coordinates")

function getLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
   myLocation.innerHTML = "Not available"
  }
}

function displayPosition(position) {
  myLocation.innerHTML = "Longitude: " + position.coords.longitude + "<br> Latitude: " + position.coords.latitude + "<br>"
}
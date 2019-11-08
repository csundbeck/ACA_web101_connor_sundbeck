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
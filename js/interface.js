$(document).ready(function() {

  var player = new Player();
  var CPU = new Computer();
  var game = new Game(player, CPU);

  $('#add-name').on('submit', function(event) {
    event.preventDefault();
    var name = $('#name').val();
    player.setName(name);
    $('#add-name').fadeOut('slowly')
    $('#player').append(name);
  });



});
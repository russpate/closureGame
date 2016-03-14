$(document).ready(function() {
  page.init();
});
var opponent = "";
var opponentBike = "";
var page = {

  init: function () {
      page.events();
      page.styling();
  },

  styling: function(){

  },

  events: function (){
    $('#welcome').on('submit', page.toCharacters);
    $('#characters').on('submit', page.toRide);
    // $('#char-form').on('change', page.toCharSelect);
    $('#char-select').on('change', page.toCharSelect);
    $('#ride').on('submit', page.toRace);
    $('#btnGo').on('click', page.toResults);
    $('#playAgain').on('click', page.toBeginning);
  },

  toCharacters: function(){
    event.preventDefault();
    $(this).removeClass('active');
    $('#characters').addClass('active');
  },

  toCharSelect: function(){
    if($(this).val() !== ""){
      $('#char-select-submit').removeAttr("disabled");
    }
  },

  charChoice: function(){
    return window[$('#char-select').val()];
  },

  toRide: function(){
    event.preventDefault();
    $(this).removeClass('active');
    $('#ride').addClass('active');
    // $('#char-select').val('')
    // $('#char-select-submit').attr("disabled","disabled");
    page.charChoice().ride();
    return $('.ride-content').html(
      "<div class='charFeature'><img src='"
      + page.charChoice().img
      + "'></div>"
      + "<div class='charFeature'><img src='"
      + page.charChoice().bike.img
      + "'></div>"
      + "<h3>Great choice! You will be racing as the "
      + page.charChoice().name
      + " and we are setting you up with the "
      + page.charChoice().bike.name
      + "</h3>"
      + "<br /><p>So it looks like your ready to race! Now that you've got your character and your bike let's get you set up with an opponent.</p>")
  },
  // opponent: function(){
  //   return randomizer(characters);
  // },
  //
  // opponentBike: function(){
  //   return randomizer(bikes);
  // },
  toRace: function(){
    event.preventDefault();
    $(this).removeClass('active');
    $('#race').addClass('active');

    var opponent = Character.prototype.racer();
    var opponentBike = Character.prototype.racerBike();

    return $('.opponent-content').html(
      "<h1>Meet your opponent</h1>"
      + "<div class='playerAvatar'><img src='"
      + opponent.img
      + "'></div>"
      + "<p class='vs'>vs</p>"
      + "<div class='playerAvatar'><img src='"
      + page.charChoice().img
      + "'></div>"
      +"<h3>Nothing beats a little healthy competition!<br /> You will be riding as "
      + page.charChoice().name
      +" going head to head against "
      + opponent.name
      + " riding on a "
      + opponentBike.name
      + "</h3>"
      + "<div class='charFeature'><img src='"
      + opponent.img
      + "'></div>"
      + "<div class='charFeature'><img src='"
      + opponentBike.img
      + "'></div>")
  },

  toResults: function(){
    event.preventDefault();
      console.log("click");
    if (page.charChoice().weight + page.charChoice().speed + page.charChoice().energy > opponentBike.weight + opponent.speed + opponent.energy){
      return $('#race').html(
        "<h3>YOU WIN</h3>"
        + "<p>you did it, you finished your first bike race!"
        + "<button id='playAgain' name='Play Again'>Play Again</button>")
    } else if (page.charChoice().weight + page.charChoice().speed + page.charChoice().energy < opponentBike.weight + opponent.speed + opponent.energy) {
      return $('#race').html(
        "<h3>YOU LOSE GOOD DAY SIR!</h3>"
        + "<button id='playAgain' name='Play Again'>Try Again</button>")
    } else {
      return $('#race').html("<h3>ITS A TIE</h3>" + "<button id='playAgain' name='Play Again'>Try Again</button>");
    };
  },

  toBeginning: function(){
    event.preventDefault();
    console.log('clicked')
    $('section').closest().removeClass('active');
    $('#welcome').addClass('active');
  }
}; // end page

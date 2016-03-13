$(document).ready(function() {
  page.init();
});

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
    $('#race').on('submit', page.toResults);
    $('#results').on('submit', page.toBeginning);
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

  toRide: function(){
    event.preventDefault();
    $(this).removeClass('active');
    $('#ride').addClass('active');
    $('#char-select').val('')
    $('#char-select-submit').attr("disabled","disabled");
  },

  toRace: function(){
    event.preventDefault();
    $(this).removeClass('active');
    $('#race').addClass('active');
  },

  toResults: function(){
    event.preventDefault();
    $(this).removeClass('active');
    $('#results').addClass('active');
  },

  toBeginning: function(){
    event.preventDefault();
    $(this).removeClass('active');
    $('#welcome').addClass('active');
  },

  charChoice: function(){
    return window[$('#char-select').val()];
  },

}; // end page

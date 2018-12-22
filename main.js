
$(document).ready(function(){
    $("#about-btn").click(function(){
      var id = "#" + $(this).attr('goto');
      console.log($(this).attr('goto'))
      var top = $(id).position().top;
      $('html, body').scrollTop(top);
      console.log('go to about')
    });

  $("#org-btn").click(function(){ 
    var id = "#" + $(this).attr('goto');
    var top = $(id).position().top;
    $('html, body').scrollTop(top);
    console.log('go to team')
  });
  
});



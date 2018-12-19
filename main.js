
$(document).ready(function(){
    $("#about-btn").click(function(){
        console.log('go to about')
      var id = "#" + $(this).attr('goto');
      var top = $(id).position().top;
      
      $('html').scrollTop(top);
    });
  });


$(document).ready(function(){
$("#org-btn").click(function(){
    console.log('go to team')
    var id = "#" + $(this).attr('goto');
    var top = $(id).position().top;
    
    $('html').scrollTop(top);
});
});

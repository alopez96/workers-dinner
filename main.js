
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


function english() { 
  mixpanel.track("english button", { 
    "button": "eng", 
  });
}


function spanish() {
  mixpanel.track("spanish button", { 
    "button": "spanish", 
  });
}


function about() {
  mixpanel.track("about button", { 
    "button": "about", 
  });
}

function org() {
  mixpanel.track("orgaizers button", { 
    "button": "organizers", 
  });
}


function email() {
  mixpanel.track("email button", { 
    "button": "email", 
  });
}

function vol() {
  console.log('vol clicked')
  alert('This event has passed, and you can no longer sign up to attend!')
}


$("button").click(function(){
  for(var i = 0 ; i < playlist["results"].length; i++) {
    $("#tracknames").append("<li>" + playlist["results"][i]["trackName"] + "</li>");
  }
});

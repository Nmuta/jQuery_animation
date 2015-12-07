$("button").click(function(){
  var timer = 0;
  for(var i = 0 ; i < playlist["results"].length; i++) {
    $("#tracknames").append("<li class='dim'>" + playlist["results"][i]["trackName"] + "</li>")
    $("li").delay(timer).animate({"opacity": 1.0}, 1000);
    timer += 25;
  }
});

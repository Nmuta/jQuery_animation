
$("button").click(function(){
  $("#fun").animate({"opacity": 1.0}, 1000);
  console.log(playlist.results[1]["trackName"])
});

$(document).ready(function(){
  var track = '';
  var timer = 0;
  for (var i = 0; i < playlist["results"].length; i++) {
    $("#container").append("<div id=" + i + " class='dim'>" + playlist.results[i]["trackName"] + "<div>");
    var my_div = $("#"+i);
    my_div.delay(timer).animate({"opacity": 1.0}, 1000);
    timer += 100;
  }
})

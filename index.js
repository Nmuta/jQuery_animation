l//
// $("button").click(function(){
//   // object of css values, time, & function to call when done.
//   $(".dimm").animate({"opacity": 1.0, "font-size": "30px"}, 1000);
//   var timer = 0;
// playlist["results"].forEach(function(e, i) {
//   var newid = "song"+i;
//   var trackName = playlist["results"][i]["trackName"];
//   $("#container").append('<div class="dim" id='+newid+'>' + trackName + '</div>')
//   var my_div = $("#" + newid);
//   my_div.delay(timer).animate({"opacity": 1.0}, 1000);
//   timer += 20;
// })
// });


$("button").click(function() {
bbc["playlist"]["a"].forEach(function(e, i) {
  var title = bbc["playlist"]["a"][i]["title"];
  var newId = "song" + i;
  var timer = 0;

  $("#container").append('<div id='+newId+'>' + title + '</div>')
  var my_div = $("#" + newId);
  $("#container").delay(timer).animate({"left": "100px"});
  timer += 4;

})
});

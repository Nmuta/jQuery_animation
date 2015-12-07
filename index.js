
$("button").click(function(){
  ///object of css values, time, function to call when done.
$(".dim").animate({"opacity": 1.0}, 1000, function() {console.log("done")});

  var tracks = playlist.results;
  var timer = 0;

  for (var i = 0; i < tracks.length; i++) {
    var my_id = "song" + i;
    $("#container").append('<br>'+'<div id='+my_id+' class="dim">'+tracks[i].trackName+'</div>');
    var my_div = $("#"+my_id);
    my_div.delay(timer).animate({"opacity": 1.0}, 1000, function() {console.log("appear")});
    timer +=50;
  }
});

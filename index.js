
$("button").click(function(){
  ///object of css values, time, function to call when done.
$(".dim").animate({"opacity": 1.0}, 1000, function() {console.log("done")});

  //var tracks = playlist.results;
  //var timer = 0;

  //for (var i = 0; i < tracks.length; i++) {
    //var my_id = "song" + i;
    //$("#container").append('<br>'+'<div id='+my_id+' class="dim">'+tracks[i].trackName+'</div>');
    //var my_div = $("#"+my_id);
    //my_div.delay(timer).animate({"opacity": 1.0}, 1000, function() {console.log("appear")});
    //timer +=50;
  //}

var yonce = $.ajax ({
  url: "https://itunes.apple.com/search?term=beyonce&entity=musicVideo",
  method: "GET",
  dataType: "jsonp"
})

yonce.done(function(data) {
var bey = data.results;
var timer = 0;
for (var i = 0; i < bey.length; i++) {
  var my_id = "video" + i;
  var title = bey[i]["trackName"];
  var vidUrl = bey[i]["trackViewUrl"];
  var thumbnail = bey[i]["artworkUrl30"];
  $("#container").append('<tr><td>' +title+ '</td><td><a href="'+vidUrl+'">'+vidUrl+'</a>' + '</td><td><img src="'+thumbnail+'"></td></tr>' + '</div>');
  var my_div = $("#"+my_id);
  my_div.delay(timer).animate({"opacity": 1.0}, 3000, function() {} );
  timer +=50;
}
})
});

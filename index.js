
$("button").click(function(){

  // object of css values, time, function to call when done.
  // $(".dim").animate({"color": "#229911", "opacity": 1.0}, 1000, function() {console.log("done");});
  //
  genTrack();

});

function genTrack() {
  var timer = 0;
  playlist["results"].forEach(function (trackElement, indexElement) {
    var myId="song" + indexElement;
    $('#container').append('<div id='+myId + ' class = "dim"> '+  trackElement["trackName"] + '</div>');
    var myDiv = $("#"+myId);
    myDiv.delay(timer).animate({"opacity": 1.0}, 1000);
    timer += 50;

  })};

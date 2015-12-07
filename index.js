
$("button").click(function(){
  // object of css values, time, function
  var timer = 0

  for (r of playlist.results) {

    $('#container').append('<div id="' + r['trackId'] +'">' + r['trackName'].toUpperCase() + '</div>');

    $('#'+r['trackId']).delay(timer+=50).animate({'opacity': 1}, 500)
  }
});

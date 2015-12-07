$("button").click(function() {
  // Object of css values, time, function
  $(".dim").animate({
    "opacity": 1.0
  }, 1000)
  var derp = playlist["results"]
  var timer = 0
  derp.forEach(function(e, i) {
    $('#container').append("<div class='dim' id='" + i + "'><p>" + e["trackName"] + "</p></div>")
    $("#" + i).delay(timer).animate({
      "opacity": 1.0
    }, 1000)
    timer+= 50
  })
});

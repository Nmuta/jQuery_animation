
$("button").click(function(){
  var hey = playlist["results"]

  var timer = 0

  for (var i = 0; i < hey.length; i++) {
    $("#container").append("<div  class='dim'id='beyonce"+i+"'><img src='"+hey[i]["artworkUrl30"]+"'/>"+"<br>"+hey[i]["trackName"]+"</div>")
    var mydiv= $("#beyonce"+i)
    mydiv.delay(timer).animate({"opacity":1.0}, 1000)
    timer +=100
  }

});

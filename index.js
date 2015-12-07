
$("button").click(function(){
  // object of css values, time, function to call when done.
  $(".dim").animate({"opacity": 1.0, "fontSize": "30px"}, 10000, function(){
  });

  var results = playlist["results"]
  var timer = 0;

  results.forEach(function(element, index){
    var my_id = "song" + index;
    $("#container").append('<div id='+my_id+' class="dim">' + results[index]["trackName"]  + '</div>')
    var my_div= $("#" + my_id);

    my_div.delay(timer).animate({"opacity": 1.0}, 3000);
    timer += 10;

  });



});

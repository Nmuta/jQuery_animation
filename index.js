
$("button").click(function(){
  //object of CSS values, time, function to call when done.
  $(".dim").animate({"opacity": 1.0, "font-size": "30px"}, 1000, function(){

    results = playlist["results"];
      var timer = 0;
    playlist["results"].forEach(function(e,i){
      var my_id = "song"+i;
      $("#container").append('<div id='+my_id+' class="dim">"'+ results[i]["trackName"] + '"</div>');
      var my_div = $("#"+my_id);
      my_div.delay(timer).animate({"opacity": 1.0}, 1000)
      timer += 10;
    })
  })
});

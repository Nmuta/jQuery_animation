$(document).ready(function(){
$("button").click(function(){

    var ajax_call = $.ajax({
      url: "http://swapi.co/api/starships/?format=json",
      method: "GET",
      dataType: "json"
  });

  var timer = 0;
  ajax_call.done(function(response){
    for (var i = 0; i < response["results"].length; i++){
      var my_id = "ship"+i;
      $("#container").append('<div id='+my_id+' class="dim">"' + response["results"][i]["name"] + '"</div>');
      var my_div = $("#"+my_id);
        my_div.delay(timer).animate({"opacity": 1.0}, 1000)
        timer += 15;
      }
    })
  })
});

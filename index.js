
$("button").click(function(){
//object of css values- target of where opacity is going to.
// a time- is in milleseconds
// function to call when done
  $(".dim").animate({"opacity":1.0, "font-size":"30px"}, 1000, function(){console.log("done");})
  var resultsHere = playlist["results"];
  var timer = 0;
  // this is set before our for loop
  for (i = 0; i < resultsHere.length; i++) {
  var my_id = "song"+i;
  $("#container").append('<div id='+my_id+' class="dim"> <resultsHere[i]>'+resultsHere[i]["trackName"]+'</div>');
var my_div = $("#"+my_id);
my_div.delay(timer).animate({"opacity": 1.0}, 1000);
timer += 20;
}


});
 

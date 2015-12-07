// BEYONCE ACTIVITY //
// $("button").click(function(){
// //object of css values- target of where opacity is going to.
// // a time-
// // function to call when done
//   $(".dim").animate({"opacity":1.0, "font-size":"30px"}, 1000, function(){console.log("done");})
//   var resultsHere = playlist["results"];
//   var timer = 0;
//   // this is set before our for loop
//   for (i = 0; i < resultsHere.length; i++) {
//   var my_id = "song"+i;
//   $("#container").append('<div id='+my_id+' class="dim"> <resultsHere[i]>'+resultsHere[i]["trackName"]+'</div>');
// var my_div = $("#"+my_id);
// my_div.delay(timer).animate({"opacity": 1.0}, 1000);
// timer += 20;
// }
//
//
// });

// --------------------------------------------------------------------------------- //
$(document).ready(function(){
$("button").click(function(){

   var ajaxy = $.ajax({
     url: "https://maps.googleapis.com/maps/api/geocode/json?address=Oxford%20University,%20uk&sensor",
     method: "GET",
     dataType: "json"
 });

 ajaxy.done(function(results){
     var timer = 0;
     var newArray = results["results"][0]["address_components"];
     for (i = 0; i < newArray.length; i++){
      var resultsHere = newArray[i]["long_name"];
          $('#container').append('<div id="'+i+'" class="dim">'+ resultsHere+'</div>');
      var my_div = $("#"+i);
        $(my_div).delay(timer+100).animate({"opacity": 1.0}, 1000)
        console.log(my_div);
        timer += 100;
   };
});



})
});

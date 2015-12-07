//
// $("button").click(function(){
//   /// object of css values, time, function to call when done.
//
//   // $(".dim").animate({opacity: 1.0, "font-size": "30px"}, 1000, function(){console.log('done');})
//
//   var results = playlist["results"];
//   var timer = 0;
//
//   results.forEach(function(e,i){
//     // console.log(e);
//     // console.log(i);
//     var my_id = "song" + i;
//     $("#container").append("<div id = "+my_id+" class='dim'>" +results[i]["trackName"] + "</div>");
//     var my_div = $("#" + my_id)
//     //dynamically building a selector
//     my_div.delay(timer).animate({"opacity": 1.0}, 1000);
//     timer += 10;
//   });
//
// });


$(document).ready(function(){

$("button").click(function(){
 var getter = $.ajax({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Oxford%20University,%20uk&sensor=false',
  method: "GET",
  dataType: "json"
});

getter.done(function(response){
  //console.log(response);
   var results = response.results[0].address_components;
   var timer = 0;
   //console.log(results);
   results.forEach(function(e,i){
     //console.log(e);
     //console.log(i);
     var my_id = "long_name" + i;
     $('#container').append("<div id = "+my_id+" class='dim'>" + results[i]["long_name"] +"</div>");
     var my_div = $("#" + my_id)
     my_div.delay(timer).animate({"opacity": 1.0}, 1000);
     timer += 25;
   })
})
})







});

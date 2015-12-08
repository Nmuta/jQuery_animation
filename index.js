
// $("button").click(function(){
//     // object of css values, time, function to call when done.
//     $(".dim").animate( {"opacity": 1.0, "font-size": "30px"}, 1000, function() {console.log("done");})
//
//     results = playlist["results"];
//     var timer = 0;
//
//     results.forEach(function(e,i) {
//     var my_id="song"+i;
//     $("#container").append('<div id='+my_id+' class="dim" >'+results[i]["trackName"]+'</div>');
//
//     var my_div = $('#'+my_id);
//
//     my_div.delay(timer).animate({"opacity": 1.0}, 1000);
//     timer += 10;
//   });
//
//
// });

$("button").click(function() {
  $(".dim").animate( {"opacity": 1.0, "font-size": "30px"}, 1000);
  $(".dimm").animate( {"opacity": 0.6, "font-size": "25px"}, 1500);
  // $(".dimmer").animate( {"opacity": 1, "font-size": "20px"}, 2000);
  // $(".dimmy").animate( {"opacity": 1.5, "font-size": "15px"}, 500);
  var getter = $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699",
    method: "GET",
    dataType: "json"
  });

  // $(".dim").animate( {"opacity": 1.0, "font-size": "30px"}, 1000, function() {console.log("done");})

  getter.done(function(response) {
    console.log("success");

    var results = response["items"][0]["volumeInfo"];

    var timer = 0;

    $("#fun").append(results["title"]);

    $("#container").append(results["authors"]);

    $("#describer").append(results["description"]);

    $("#imager").append('<img src="'+results["imageLinks"]["thumbnail"]+'"/>');

    // var describy = results["description"];
    // describy.delay(timer).animate({"opacity": 0.5}, 2000);
    // timer += 10;
  });

  getter.fail(function() {
    console.log("fail");
  });
});

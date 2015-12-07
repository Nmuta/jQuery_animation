$("button").click(function(){
  //User input for API search
  var getter = $.ajax({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=Oxford%20University,%20uk",
    method: "GET",
    dataType: "json"
  });

  var timer = 0;

  getter.done(function(data) {
    // console.log(data["results"][0]["address_components"][i]["long_name"]);
    for(var i = 0 ; i < data["results"][0]["address_components"].length; i++) {
      console.log(data["results"][0]["address_components"][i]["long_name"]);
      $("ul").append("<li class='dim'>" + data["results"][0]["address_components"][i]["long_name"] + "</li>")
      $("li").delay(timer).animate({"opacity": 1.0}, 1000);
      timer += 25;
    }
  });
});

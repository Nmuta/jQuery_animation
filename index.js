$("button").click(function(){
  var urll = "https://maps.googleapis.com/maps/api/geocode/json?address=" + $("#search").val();
  var getter = $.ajax({
    url: urll,
    method: "GET",
    dataType: "json"
  });

  getter.done(function(data) {
    var timer = 0;

    for(var i = 0 ; i < data["results"][0]["address_components"].length; i++) {
      $("ul").append("<li>" + data["results"][0]["address_components"][i]["long_name"] + "</li>")
      $("li").delay(timer).animate({"font-size": "36px"}, 2000);
      timer += 50;
    }
    $("li").animate({"font-size": "16px"}, 1000);
  });
});

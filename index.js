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
      $("ul").append("<li class='dim'>" + data["results"][0]["address_components"][i]["long_name"] + "</li>").slideDown("slow");
      $("<li class='dim'>" + data["results"][0]["address_components"][i]["long_name"] + "</li>").appendTo($("ul")).slideDown("slow");
      timer += 500;
    }
  });
});

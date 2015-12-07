
var timer = 0 ;

$("#buttoni").click(function(){
   var searchy = $("#searchbox").val();

   var searchReddit = $.ajax({
      url: "https://www.reddit.com/subreddits/search.json?q="+searchy,
      method: "GET",
      dataType: "json",
   });

      searchReddit.done(function(response){
         for (var i = 0; i < response["data"]["children"].length; i++) {
            $("#results").append("<div class='dim' id='result"+ i +"'><a href='https://www.reddit.com"+response["data"]["children"][i]["data"]["url"]+"'>"+response["data"]["children"][i]["data"]["title"]+"</a>");
            $("#result"+i).delay(timer).animate({"opacity":1.0, "font-size":"1.5em"},1000,function(){console.log()});
            timer += 15;
         }
   });
});

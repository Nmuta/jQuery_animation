
var input = $("#searchTerm");

$("button").click(function(){
    $(".dim").animate({"opacity": 1.0, "fontSize": "14px"}, 1000, function(){console.log("me");});
    var apiRetrieve = $.ajax({
        url: "https://www.reddit.com/search.json?q=" + input.val(),
        method: "GET",
        dataType: "json"
    });
    apiRetrieve.done( function(response) {
    var theArray = apiRetrieve["responseJSON"]["data"]["children"];
    console.log(theArray);
    var time = 0;
    for (i = 0; i < theArray.length; i++) {
        console.log(theArray[i]);
        $("#container").append("<div class='dim' id='" + i + "record'>" + theArray[i]["data"]["author"] + " " + theArray[i]["data"]["title"].substring(0, 80) + " " + theArray[i]["data"]["subreddit"] + "</div>");
        $("#" + i + "record").delay(time).animate({"opacity": 1.0, "fontSize": "12px"}, 850, function(){console.log(" ");});
        time += 300;
    }
});
});

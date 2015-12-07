$(document).ready(function(){

  $('#booksearch').click(function(){
    var sarch = $('#book').val();
    console.log("Bing Bong");

    var getter = $.ajax({
      url:"https://www.googleapis.com/books/v1/volumes?q='" + sarch + "'",
      dataType: "JSON",
      method: "GET"
    });
    getter.done(function(response){
      var books = response["items"];

      var displayArray = books.map(function(item ,i){
        var volumeInfo = item["volumeInfo"]
        var newObject = {};
        newObject.title = volumeInfo.title;
        newObject.pageCount = volumeInfo.pageCount;
        newObject.image = volumeInfo.imageLinks.smallThumbnail;
        newObject.author = volumeInfo["authors"];
        newObject.rating = volumeInfo.averageRating;
        return newObject;
      });

      displayArray.forEach(function(item){
        bringToLife(item);
      })

    });

    getter.fail(function(){
      console.log("Stubeau is sadbeau");
    })

  })


})


function bringToLife(stuff){
  var newDiv = $("<div class='bookContainer'></div>").appendTo('#container');
  $(newDiv).append("<h2>" + stuff.title + "</h2>");
  $(newDiv).append("<img src='" + stuff.image + "'/>");
  var moreInfo = $('<div class="moreInfo"></div>').appendTo(newDiv);
  var authorInfo = $('<div class="authorInfo"><h4>Author</h4></div>').appendTo(moreInfo);
  var misc = $('<div class="Misc"></div>').appendTo(moreInfo);
  $(authorInfo).append('<p>' + stuff.author + '</p>');
  $(misc).append('<p>Page Count:' + stuff.pageCount + '</p>');
  $(misc).append('<p>Rating :' + stuff.rating + '</p>');

}


//
// var i = 0;
// $("button").click(function(){
//
//   // object of css values
//   // time (milliseconds)
//   // function to call when done
//   //$('.dim').animate({"opacity": 1.0, "font-size": '100px'}, 1000);
//   var timer = 0;
//   playlist["results"].forEach(function(e, i){
//     var newDiv = $('<div id="song' + i + '" class="hidden"></div>').prependTo('#container');
//     var title = e["trackName"]
//     var image = e["artworkUrl30"]
//     $(newDiv).append('<img src="' + image + '"/>');
//     $(newDiv).append('<p>'+ title + '</p>');
//     $('.hidden').delay(800+timer).fadeIn(1000);
//     timer += 200;
//   })
//   // $('.prepend').animate({"position" : "relative", "top" : "100px", "bottom" : ""}, 1000)
// });

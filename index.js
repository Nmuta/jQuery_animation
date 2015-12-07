$(document).ready(function(){
 $("button").click(function(){

   var getter = $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes?q=quilting',
      method: "GET",
      dataType: "json"

}).done(function(response){
   var results = response["items"];
   var timer = 0;

    results.forEach(function(e,i){

      var bookTitles = results[i].volumeInfo.title
      var my_id = "title" + i;

    $('#container').append("<div id = "+my_id+" class='dim'>" + bookTitles +"</div>");

      var my_div = $("#" + my_id)
      my_div.delay(timer).animate({"opacity": 1.0}, 1000);
      timer += 200;

     })
   });
 });
})

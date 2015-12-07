

var timer = 0
$("button").click(function(){
  var getter = $.ajax({
    url:"https://www.googleapis.com/books/v1/volumes?q=king",
    method:"GET",
    dataType:"json"
  })

  getter.done(function(response){

    $("#container").children().remove()
    response["items"].forEach(function(e,i){

      newId="Title" + i
      console.log(newId)
    $("#container").append("<p id="+newId+" class='dim newBook'>"+e.volumeInfo.title+"</p>")

    $(".newBook").delay(timer).animate({"opacity":1, "left": 0},1000)
    timer += 50

  })

  })

})














    //object of css values, time, function to call when done
    //
    // var timer = 0
    // getter.playlist.forEach(function(i,dex){
    //
    // $("#container").append("<div class='dim' id="+songid+">"+i.trackName+"</div>")
    //
    // var myDiv = $("#"+songid)
    // myDiv.delay(timer).animate({"opacity": 1, "font-size":"30px"},1000)
    // // $(".dim").delay(timer).animate({"opacity": 1, "font-size":"30px"}, 1000)
    // timer += 50
    // })

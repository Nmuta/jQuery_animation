//NOTES on animation
//
// $("button").click(function(){
//   // what animate needs: object of css clss, time, funtion to call when done
//   // $(".dim").animate({"opacity":1.0, "fontSize": "30px"}, 1000, function(){console.log("done")});
//
// });

//list track names


// $("button").click(function(){
//   console.log(playlist['results'][2]['trackName']);
//   $(".dim").animate({"opacity":1.0, "fontSize": "30px"}, 1000, function(){console.log("done")});
//   var timer = 0;
//   for (var i = 0; i < playlist['results'].length; i++) {
//     $("#container").append('<div class="sName" id="sName'+[i]+'">'+playlist['results'][i]['trackName']+'</div>')
//     var my_div = $('.sName')
//     my_div.delay(timer).animate({"opacity":1.0}, 1000,function(){});
//     timer += 50;
//
//   }
// })

//********************** Assignment starts here

$("button").click(function(){
console.log(playlist2['results'][0]['artistName']);
  var timer = 0;
  var i = 0;
  var pl2 = playlist2['results'];
  $("#fun").append("Artist Name: "+playlist2['results'][0]['artistName']).animate({opacity:1.0, 'fontSize':'30px'}, 1000, function(){})
  pl2.forEach(function(i){
    $("#container").append('<div class="sName" id="sName'+[i]+'">'+i['trackName']+'</div>');
    var my_div = $('.sName')
    my_div.delay(timer).animate({'opacity':1.0}, 1000, function(){});
    timer += 50;
    i++
  })
})

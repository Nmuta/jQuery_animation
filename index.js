$(document).ready(function(){

  $("#add").click(function(){
    var getter = $.ajax ({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Oxford%20University,%20uk&sensor=false',
      method: 'GET',
      dataType: 'json'
    })
  getter.done(function(returned){
  $('.dim').animate({'opacity':1.0,'font-family':'impact', 'font-size':'30px'}, 1000, function(){})
  var results = returned['results'][0]['address_components']
  var timer = 0;
  results.forEach(function (obj, i) {

    var my_id = "long_name"+ i;
    $('#container').append('<div id='+my_id+' class="dim" >'+results[i]['long_name']+'</div>')

    var my_div = $('#'+my_id);
    my_div.delay(timer).animate({'opacity': 1.0}, 1000, function(){});
    timer += 100;
    })

  })
  $('#remove').click(function (){
    $('#container').find('div').remove()

  })

});
})

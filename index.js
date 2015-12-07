$('document').ready(function(){
  console.log('go');

  var records = results['playlist']

  $('button').click(function(){
    var index = 0;
    var timer = 0;
    for (record in records){
      for (i of records[record]) {
        $('#container').append('<img src="' + i['image'] + '" id="img' + index + '" class="dim" >');
        $("#img"+index).delay(timer+=25).animate({'opacity': 1.0},500,function(){
          $(this).toggleClass('shown')
        })
        ++index
      }
    }
  })
})

//
// $("button").click(function(){
//
//   // object of css values, time, function to call when done.
//   // $(".dim").animate({"color": "#229911", "opacity": 1.0}, 1000, function() {console.log("done");});
//   //
//   genTrack();
//
// });
//
// function genTrack() {
//   var timer = 0;
//   playlist["results"].forEach(function (element, indexElement) {
//     var myId="song" + indexElement;
//     $('#container').append('<div id='+myId + ' class = "dim"> '+  element["trackName"] + '</div>');
//     var myDiv = $("#"+myId);
//     myDiv.delay(timer).animate({"opacity": 1.0}, 1000);
//     timer += 50;
//
//   })};

//==========================================
// On the click button, generate the div.
$("button").click(function() {
  processAPI();
});
//==========================================


//==========================================
// Process the API JSON.
function processAPI() {
  var searchTerm = "dog";
  var getter=$.ajax({
    url: "https://www.reddit.com/subreddits/search.json?q="+searchTerm,
    method: "GET",
    dataType: "json"
  });

// Generate the div once response is received from query
  getter.done(function(response) {
    genDiv(response);
  });

// Generate failure message upon failure of query
  getter.fail(function(){
    console.log("failed query" );
  });
};
//==========================================


//==========================================
//Generate the div with the animated objects.
// function genDiv() {
function genDiv(response) {

  //Set the timer so consecutive objects are delayed in animation.
  var animateTimer = 0;

  // Empty container from prior contents.
  $('#container').empty();

  //For each track, add and animate the objects to the div.
  response["data"]["children"].forEach(function (element, indexElement) {

    // Build an id for the consecutive songs and song images.  We will
    // make a separate div for each song to add to the container.
    var myId="song" + indexElement;
    var myImgId="songImage" + indexElement;

    // Add a div for each song.
    $('#container').append('<div id='+myId + '> </div>');
    var myDiv = $("#"+myId);

    // Add an image to that div.
    $(myDiv).append('<img id = ' + myImgId + ' class = "dim"  src = "' + element["data"]["header_img"] + '">');

    // Animate that image with full opacity, a size change, and a wider border.
    var myImg = $("#" + myImgId);
    myImg.delay(animateTimer).animate({opacity: 1.0});
    myImg.delay(animateTimer).animate({width:"100px", height:"100px"});
    myImg.delay(animateTimer).animate({"border-width": "10px"})

    // Increment timer so the creation and animation of each object is successively delayed.
    animateTimer += 75;
  }
)};
//==========================================

$("document").ready(function(){
	displayQuotes();
  $("#newQuote").on("click", function(e){
      e.preventDefault();  
      displayQuotes();
   });
  $("#tweet").on("click", function(e){
    e.preventDefault();
    var currentTweet = $("#quote").text()+" by "+$("#author").text();
    if (currentTweet.length > 140) {
      //this.popover('show');
      $("#message").text("Tweet should be less than 140 chars");
    }else {
       var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(currentTweet);
       window.open(twtLink,'_blank');
     }
  });
});
function displayPopover() {
   $("#tweet").popover({
        title: 'Click Inside',
        placement: 'bottom',        
        template: '<div class="popover-all"><div class="popover-arrow"></div><div class="popover-inner"><h3 class="popover-title">Example</h3><div class="popover-content"><p> Clicks:0 </p></div></div></div>'
    });
}
function displayQuotes() {
  $.ajax({
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/", // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) { 
     $("#quote").text(data.quote);  
     $("#author").text("- "+data.author);                       },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "Q3JVg1p2HBmsh1XfJddwHoS5tPcgp14mD1JjsnAzjsW7UltL34"); // Enter here your Mashape key
    }
});
}  
          
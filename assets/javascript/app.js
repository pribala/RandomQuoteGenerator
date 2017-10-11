$("document").ready(function(){
	displayQuotes();
});

function displayQuotes() {
  var queryURL = "https://api.forismatic.com/api/1.0/method=getQuote&key=&format=json&lang=en";
  $.ajax({
     url: queryURL,
     method: "GET"
  }).done(function(response) {
           var results = response.data;
           console.log(results);
  });
}  
          
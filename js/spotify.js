(function($) {

var $button = $('#search');
var $divResults = $('.results');

$button.on("click", function(e) {

  e.preventDefault();

  var $inputValue = ($('#query').val()).toString();



 

   function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          return hashParams;
        }

  var params = getHashParams();

  var access_token = params.access_token;

$.ajax({
   url: "https://api.spotify.com/v1/search?type=artist&query=" + $inputValue,
   dataType: 'json',
   headers: {
       'Authorization': 'Bearer ' + access_token
   },
   success: function(response) {      
  			$.get("https://api.spotify.com/v1/search?type=artist&query=" + $inputValue, completeFunction);   
  
   }
});
});

  function completeFunction(response, textStatus, request) {
    
  	var $iamgeArray, $nameArtist, $imageArtist, $imageUrl;

     $divResults.css('border', '1px solid #000');

   
    console.log(response);
   
    if(textStatus === 'error') {
   
      $divResults.text('Error del GÚENOOORL ' + request.status + ' ' + request.statusText);
    } 
	

	var $showResults = $('#showResults');
	$showResults.empty();

	response.artists.items.forEach(function(i){
		
		$showResults.append('<li> <p>' + i.name  + '</p></li>');
	 	
	 	if(i.images.length !== 0){
	 		var imageResult = $showResults.append('<img src=' + i.images[1].url + '>'  );
	 	}
	//	console.log(i.name);
	//	console.log(i.images[1].url);
  	}
  
  )}

/*	//Buscar album
 function requestToAlbum(getHashParams) {

$.ajax({
   url: 'https://api.spotify.com/v1/albums/'+ $inputValue,
   dataType: 'json',
  
   headers: {
       'Authorization': 'Bearer ' + access_token
   },
   success: function(response) {      
  			$.get("https://api.spotify.com/v1/search?type=artist&query=" + $inputValue, completeFunction);   
  
   }
};*/

})(jQuery);
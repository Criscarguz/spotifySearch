//Button to search

var $btnSearch = $('#btnSearch');
var $artist = $('#artist');

$btnSearch.on('click', function(){

	$artist.get('https://api.spotify.com/v1/search?type=artist&query=SEARCHTERM', {}, searchArtist);

});

//Search artist

function searchArtist(){

	
}
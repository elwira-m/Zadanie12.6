$(function(){

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');		//ul

$('#search').click(searchCountries);		//button

function searchCountries() {
 	var countryName = $('#country-name').val();			//input
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList			//? ()
  	});
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
        //Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
  	$('<li>').text(item.name).appendTo(countriesList);     
    });
}

})

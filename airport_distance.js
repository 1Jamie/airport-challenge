// Challenge: Create a web app that calculates the distance (in nautical miles) between two airports. The app should auto-complete the airports and should feature all airports in the U.S. Bonus: Plot the trip on Google maps.


// PSEUDOCODE:
// INPUT: Starting airport, landing airport
  // auto-complete
// OUTPUT: starting address, landing address, Distance
// Bonus: Show on google maps, cab fare (putting in current location)


// API used: Google Places API Web Service
// Get Google Maps to show
// Search Bar
// Autocomplete
// Get coordinates of starting airport and ending airport


// Calculate distance between them (algorithm in backend)
// Plot points on map!



// Search bar autocomplete resources:

// - http://stackoverflow.com/questions/27865483/google-maps-api-autocomplete-search-without-selecting-from-dropdown
// - http://blog.teamtreehouse.com/creating-autocomplete-dropdowns-datalist-element
// - https://jqueryui.com/autocomplete/
// - http://blog.teamtreehouse.com/creating-autocomplete-dropdowns-datalist-element


function initialize() {
      var mapProp = {
        center:new google.maps.LatLng(-33.8902, 151.1759),
        zoom: 2,
        mapTypeId:google.maps.MapTypeId.HYBRID
      };
      var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var startInput = (document.getElementById('starting-search'));
    var endInput = (document.getElementById('ending-search'));

    var startSearchBox = new google.maps.places.SearchBox(startInput);
    var startAutocomplete = new google.maps.places.Autocomplete(startInput);

    var endSearchBox = new google.maps.places.SearchBox(endInput);
    var endAutocomplete = new google.maps.places.Autocomplete(endInput);


// can these have the same IDs?
// replace google.maps with just map?






    }

  google.maps.event.addDomListener(window, 'load', initialize);




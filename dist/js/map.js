/*map*/

$(window).on('load', function() {

    /*
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: {lat:55.6217316, lng: 37.7837413},
        scrollwheel: false,
        zoom: 14
    });
    //var image = 'img/icons/point_map.png';
    var marker = new google.maps.Marker({
        position: {lat: 55.6217316, lng: 37.7837413},
        map: map
        //icon: image
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    var infowindow = new google.maps.InfoWindow({
        content: 'г Москва ТК "Южные Ворота" линия з-9 пав 122 и 13з',
        maxWidth: 300
    });

    */

    function initMap() {

        var map = new google.maps.Map(document.getElementById('map_canvas'), {
            zoom: 4,
            center: {lat: 51.05192259, lng: 49.02804657},
            scrollwheel: false
        });

        // Create an array of alphabetical characters used to label the markers.
        //var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        var image = 'img/icons/pointer_map.png';
        
        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.


        var markers = locations.map(function(location) {
            var marker = new google.maps.Marker({
                position: location,
                icon: image,
                map: map
                //label: labels[i % labels.length]

            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });
            var infowindow = new google.maps.InfoWindow({
                content: location.content,
                maxWidth: 300
            });
            return marker;
            
            
        });


        
        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: "img/icons/pointer_map"});
    }
    var locations = [
        {lat: 55.79290178, lng: 37.6173, content: 'Москва 1'},
        {lat: 55.77127853, lng: 37.59601399, content: 'Москва 2' },
        {lat: 55.71020535, lng: 37.39002034, content: 'Москва 3'},
        {lat: 55.80756787, lng: 37.94826313, content: 'Москва 4'},
        {lat: 55.55205496, lng: 37.07347676, content: 'Москва 5'},

        {lat: 50.4501, lng: 30.5234, content: 'Киев 3'},
        {lat: 50.44933486, lng: 30.4705283, content: 'Киев 1'},
        {lat: 50.47302041, lng: 30.50662994, content: 'Киев 2'},
        {lat: 53.91060785, lng: 27.55130768, content: 'Минск 1'},
        {lat: 53.80531417, lng: 27.5485611, content: 'Минск 2'}

    ]

    initMap();
});
/*map*/

$(window).on('load', function() {
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
});
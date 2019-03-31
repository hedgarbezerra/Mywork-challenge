// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//
//= require jquery
//= require rails-ujs
//= require bootstrap-sprockets
//= require activestorage
//= require turbolinks
//= require_tree .

var map;
var directionsDisplay;
var directionsService;
var latlng;
var marker;
var geocoder;


function initMap(lat, lng) {
    var myCoords = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        center: myCoords,
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myCoords,
        map: map
    });
}


function initMap2() {
    geocoder = new google.maps.Geocoder();
    var lat = document.getElementById('latitude').value;
    var lng = document.getElementById('longitude').value;
    if (!lat || !lng) {
        lat = -23.944394;
        lng = -46.354350;
        document.getElementById('latitude').value = lat;
        document.getElementById('longitude').value = lng;
    }
    var myCoords = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        center: myCoords,
        zoom: 14,
        disableDefaultUI: true,
        zoomControl: true
    };
    var map = new google.maps.Map(document.getElementById('map2'), mapOptions);
    var marker = new google.maps.Marker({
        position: myCoords,
        animation: google.maps.Animation.DROP,
        map: map,
        draggable: true
    });
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });

    function placeMarker(location) {

        newlat = (Math.round(location.lat() * 1000000)) / 1000000;
        newlng = (Math.round(location.lng() * 1000000)) / 1000000;
        document.getElementById('latitude').value = newlat;
        document.getElementById('longitude').value = newlng
        marker.setPosition(location);
        map.setCenter(marker.getPosition());
    }

    function refreshMarker() {
        var lat = document.getElementById('latitude').value;
        var lng = document.getElementById('longitude').value;
        var myCoords = new google.maps.LatLng(lat, lng);
        marker.setPosition(myCoords);
        map.setCenter(marker.getPosition());
    }


    document.getElementById('latitude').onchange = refreshMarker;
    document.getElementById('longitude').onchange = refreshMarker;

    // when marker is dragged update input values
    marker.addListener('drag', function() {
        latlng = marker.getPosition();
        newlat = (Math.round(latlng.lat() * 1000000)) / 1000000;
        newlng = (Math.round(latlng.lng() * 1000000)) / 1000000;
        document.getElementById('latitude').value = newlat;
        document.getElementById('longitude').value = newlng;
    });



    marker.addListener('dragend', function() {
        map.panTo(marker.getPosition());
    });

    $('input[type=text]').on('keydown', function(e) {
        if (e.which == 9) {
            var address = document.getElementById('address').value
            geocoder.geocode({ 'address': address, 'region': 'BR' }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        lat = results[0].geometry.location.lat();
                        lng = results[0].geometry.location.lng();
                        var location = new google.maps.LatLng(lat, lng);
                        marker.setPosition(location);
                        map.setCenter(marker.getPosition());
                        map.setZoom(13);
                        document.getElementById('latitude').value = lat;
                        document.getElementById('longitude').value = lng;
                    }
                }
            });

        }
    });


}



function parse_end(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, function(results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
            alert(status);
        }
        if (status == google.maps.GeocoderStatus.OK) {
            var address = (results[0].formatted_address);
            document.getElementById('address').innerHTML = address;
        }
    });
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);

}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}



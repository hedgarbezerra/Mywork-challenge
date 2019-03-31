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

/*var map;
var directionsDisplay;
var directionsService;
var latlng;
var marker;*/
var geocoder;


function initMap(lat, lng) {
    var myCoords = new google.maps.LatLng(lat, lng);
    var mapOptions = {
    center: myCoords,
    zoom: 15,
    disableDefaultUI: true
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
    if (!lat || !lng){
        lat=-23.944394;
        lng=-46.354350;
        document.getElementById('latitude').value = lat;
        document.getElementById('longitude').value = lng;
    }
    var myCoords = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        center: myCoords,
        zoom: 14,
        disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById('map2'), mapOptions);
    var marker = new google.maps.Marker({
        position: myCoords,
        animation: google.maps.Animation.DROP,
        map: map,
        draggable: true
    });


    function refreshMarker(){
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
        newlat=(Math.round(latlng.lat()*1000000))/1000000;
        newlng=(Math.round(latlng.lng()*1000000))/1000000;
        document.getElementById('latitude').value = newlat;
        document.getElementById('longitude').value = newlng;
    });

    marker.addListener('dragend', function() {
        map.panTo(marker.getPosition());   
    });

}

    function endereco(address) {
    geocoder.geocode({ 'address': address, 'region': 'BR' }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
                var myCoords = new google.maps.LatLng(lat, lng);
                console.log(results[0].formatted_address);
                var mapOptions = {
                center: myCoords,
                zoom: 14,
                disableDefaultUI: true
                };
                var map = new google.maps.Map(document.getElementById('map2'), mapOptions);
                marker = new google.maps.Marker({
                    map: map,
                    title: results[0].formatted_address,
                    draggable: true,
                });
               document.getElementById('latitude').value = lat;
                document.getElementById('longitude').value = lng;
                var location = new google.maps.LatLng(lat, lng);
                marker.setPosition(location);
                map.setCenter(location);
                map.setZoom(13);
            }
        }
    });
    
}


function parse_end(lat, lng) {  
    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
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
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}









function inixe() {
  var myOptions = {
    zoom: 12,
    center: new google.maps.LatLng(0, 0),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(
    document.getElementById("map"),
    myOptions);
  setMarkers(map, beaches);
}

var beaches  = [
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 161.259052, 5],
  ['Cronulla Beach', -36.028249, 153.157507, 3],
  ['Manly Beach', -31.80010128657071, 151.38747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.159302, 1]
];

function setMarkers(map, locations) {
  var shape = {
    coord: [1, 1, 1, 20, 18, 20, 18 , 1],
    type: 'poly'
  };
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      shadow: shadow,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
    bounds.extend(myLatLng);
  }
  map.fitBounds(bounds);
}



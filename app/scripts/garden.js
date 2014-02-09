var map;
//data as an array of objects
var markers = [
  { lat: 38.877821, lng: -104.870802, povLat: 38.877771, povLng: -104.870694, heading: 260, zoom: 2, pitch: 0, icon: "images/entrance.png", name: "Park Entrance: 30th Street" },
  { lat: 38.859936, lng: -104.897785, povLat: 38.860319, povLng: -104.897909, heading: 0  , zoom: 2, pitch: 0, icon: "images/entrance.png", name: "Park Entrance: Garden Drive" },
  { lat: 38.863090, lng: -104.892677, povLat: 38.862779, povLng: -104.892518, heading: 335, zoom: 2, pitch: 0, icon: "images/entrance.png", name: "Park Entrance: Beckers Lane" },
  { lat: 38.861231, lng: -104.879333, icon: "images/entrance.png", name: "Park Entrance: Ridge Road" },
  { lat: 38.879608, lng: -104.881026, povLat: 38.876877, povLng: -104.877224, heading: 313, zoom: 3, pitch: 10, icon:"images/formations.png",name: "North Gateway Rock" },
  { lat: 38.880727, lng: -104.881391, povLat: 38.881663, povLng: -104.881251, heading: 180, zoom: 1, pitch: 20, icon:"images/formations.png", name: "Tower of Babel" },
  { lat: 38.879775, lng: -104.879288, povLat: 38.878213, povLng: -104.878076, heading: 310, zoom: 3, pitch: 10, icon:"images/formations.png",name: "White Rock" },
  { lat: 38.879984, lng: -104.880977, povLat: 38.878648, povLng: -104.871220, heading: 276, zoom: 4, pitch: 8, icon:"images/formations.png",name: "Kissing Camels" },
  { lat: 38.877800, lng: -104.880365, povLat: 38.878849, povLng: -104.878155, heading: 240, zoom: 2, pitch: 5, icon:"images/formations.png",name: "South Gateway Rock" },
  { lat: 38.874764, lng: -104.879612, povLat: 38.876251, povLng: -104.878131, heading: 211, zoom: 2, pitch: 10, icon:"images/formations.png",name: "Gray Rock (Cathedral Rock)" },
  { lat: 38.875791, lng: -104.883906, povLat: 38.875693, povLng: -104.883455, heading: 290, zoom: 2, pitch: 0, icon:"images/formations.png",name: "Giant Footsteps" },
  { lat: 38.872415, lng: -104.884509, povLat: 38.872534, povLng: -104.885333, heading: 90 , zoom: 2, pitch: 0, icon:"images/formations.png",name: "Scotsman" },
  { lat: 38.864773, lng: -104.897502, povLat: 38.864957, povLng: -104.897275, heading: 215, zoom: 2, pitch: 10, icon:"images/formations.png",name: "Balanced Rock" },
  { lat: 38.864600, lng: -104.897292, povLat: 38.864796, povLng: -104.897201, heading: 220, zoom: 2, pitch: 0, icon:"images/formations.png",name: "Steamboat Rock" },
  { lat: 38.869850, lng: -104.888510, povLat: 38.867630, povLng: -104.888300, heading: 359, zoom: 4, pitch: 0, icon:"images/formations.png",name: "Siamese Twins" },
  { lat: 38.878714, lng: -104.880468, icon:'images/formations.png', img: 'images/signatureRock.jpg', name: 'Signature Rock' },
  { lat: 38.877061, lng: -104.881664, icon:"images/formations.png", img: 'images/pulpitRock.jpg', name: "Pulpit Rock" },
  { lat: 38.876190, lng: -104.881352, icon:"images/formations.png", img: 'images/threeGraces.jpg', name: "Three Graces" },
  { lat: 38.876296, lng: -104.881089, icon:"images/formations.png", img: 'images/cathedralSpires.jpg', name: "Cathedral Spires" },
  { lat: 38.873494, lng: -104.880470, icon:"images/formations.png", img: 'images/sleepingGiant.jpg', name: "Sleeping Giant" },
  { lat: 38.863123, lng: -104.898165, icon:"images/formations.png", img: 'images/toadstools.jpg', name: "Toad and Toadstools" },
  { lat: 38.878272, lng: -104.880929, icon:"images/formations.png", img: 'images/sentinelSpires.jpg', name: "Sentinel Spires" },
  //NEED KEYHOLE WINDOW IMAGE{ lat: 38.873294, lng: -104.880599, icon:"images/formations.png", img: 'images/INSERT_IMAGE_HERE.jpg', name: "Keyhole Window" },
  { lat: 38.879007, lng: -104.870542, name: "Parking", icon:"images/parking.png"},
  { lat: 38.878422, lng: -104.869754, name: "Restrooms", icon:"images/restrooms.png"},
  { lat: 38.881170, lng: -104.880434, name: "Parking", icon:"images/parking.png"},
  { lat: 38.880777, lng: -104.879909, name: "Restrooms", icon:"images/restrooms.png"},
  { lat: 38.869694, lng: -104.878085, name: "Parking", icon:"images/parking.png"},
  { lat: 38.865642, lng: -104.879018, name: "Parking", icon:"images/parking.png"},
  { lat: 38.865295, lng: -104.897305, name: "Parking", icon:"images/parking.png"},
  { lat: 38.863976, lng: -104.892579, name: "Restrooms", icon:"images/restrooms.png"},
  { lat: 38.864310, lng: -104.892730, name: "Parking", icon:"images/parking.png"},
  { lat: 38.865559, lng: -104.890053, name: "Parking", icon:"images/parking.png"},
  { lat: 38.872254, lng: -104.885117, name: "Parking", icon:"images/parking.png"}
];

//Initialize map when DOM is ready
$(function() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(38.874463,-104.880322),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    streetViewControl: false,
    scaleControl: true,
    scaleControlOptions:  {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    panControl: true,
    panControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.TOP_RIGHT
    }
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
  // google.maps.event.addListener(map, 'click', function() {
  //       infowindow.close();
  //       });
  for (var i = 0; i < markers.length; i++) {
    // obtain the attribues of each marker
    var lat = markers[i].lat;
    var lng = markers[i].lng;
    var point = new google.maps.LatLng(lat,lng);
    var html = ''
    var label = markers[i].name;
    // create the marker
    var marker = createMarker(point,label,markers[i]);
  }
  

  $('#legend').draggable();

  //addMarkers(markers);
});

    
// arrays to hold copies of the markers used by the side_bar 
var gmarkers = []; 

var sv = new google.maps.StreetViewService();
var clickedMarker = null;
var panorama = null;

// Create the shared infowindow with three DIV placeholders
// One for a text string, oned for the html content from the xml, one for the StreetView panorama.
var content = document.createElement("DIV");
var title = document.createElement("DIV");
content.appendChild(title);
var htmlContent = document.createElement("DIV");
content.appendChild(htmlContent);
var streetview = document.createElement("DIV");
streetview.style.width = "250px";
streetview.style.height = "250px";
content.appendChild(streetview);
var infowindow = new google.maps.InfoWindow({ 
    size: new google.maps.Size(150,50),
    content: content
});
// A function to create the marker and set up the event window function 
function createMarker(latlng, name, data) {
    //var contentString = html;
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: name,
        icon: data.icon
        });
    if (data.povLat) {
      var location = new google.maps.LatLng(data.povLat, data.povLng);
      heading = data.heading;
      pitch = data.pitch;
      zoom = data.zoom;

      google.maps.event.addListener(marker, "click", function() {
         clickedMarker = marker;
         $('#pano').data('id', data);
         sv.getPanoramaByLocation(location, 5, processSVData);
         // openInfoWindow(marker);
      });
    }
    else {    
      google.maps.event.addListener(marker, "click", function() {
        // clickedMarker = marker;
        // sv.getPanoramaByLocation(marker.getPosition(), 50, processSVData);
        openInfoWindow(marker);
      });
    }
    // save the info we need to use later for the side_bar
    gmarkers.push(marker);
}
 
// This function picks up the click and opens the corresponding info window
function myclick(i) {
  google.maps.event.trigger(gmarkers[i], "click");
}
  function processSVData(data, status) {
    var povData = $('#pano').data();
    if (status === google.maps.StreetViewStatus.OK) {
      var marker = clickedMarker;
      openInfoWindow(clickedMarker);

      if (!!panorama  && !!panorama.setPano) {
      
      panorama.setPano(data.location.pano);
      panorama.setPov({
        heading: povData.id.heading,
        pitch: povData.id.pitch,
        zoom: povData.id.zoom
      });
      panorama.setVisible(true);
      
      google.maps.event.addListener(marker, 'click', function() {
      
        var markerPanoID = data.location.pano;
        // Set the Pano to use the passed panoID
        panorama.setPano(markerPanoID);
        panorama.setPov({
          heading: povData.id.heading,
          pitch: povData.id.pitch,
          zoom: povData.id.zoom
        });
        panorama.setVisible(true);
      });
      }
    } else {
      openInfoWindow(clickedMarker);
      title.innerHTML = clickedMarker.getTitle() + "<br>Street View data not found for this location";
      panorama.setVisible(false);
      // alert("Street View data not found for this location.");
    }
  }


    // Handle the DOM ready event to create the StreetView panorama
    // as it can only be created once the DIV inside the infowindow is loaded in the DOM.
    var pin = new google.maps.MVCObject();
    
    google.maps.event.addListenerOnce(infowindow, "domready", function() {
      panorama = new google.maps.StreetViewPanorama(streetview, {
       navigationControl: false,
       enableCloseButton: false,
       addressControl: false,
       linksControl: false,
       visible: true
      });
      panorama.bindTo("position", pin);
    });
    
    // Set the infowindow content and display it on marker click.
    // Use a 'pin' MVCObject as the order of the domready and marker click events is not garanteed.
    function openInfoWindow(marker) {
       title.innerHTML = marker.getTitle();
       htmlContent.innerHtml = marker.myHtml;
       pin.set("position", marker.getPosition());
       infowindow.open(map, marker);
    }



























































function addMarkers(data) {
  var marker;
  var itemData;
  for (var i = 0; i < data.length; i++) {
      itemData = data[i];
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(data[i].lat, data[i].lng),
        map: map,
        icon: data[i].icon,
        animation: google.maps.Animation.DROP,
        title: data[i].name
      });
      addInfo(marker, itemData);
  };
};


function addListener(marker, data) {
  var content;
  google.maps.event.addListener(marker, "click", function() {
    if (!data.heading && data.img) {
      $('#infoDiv').children().empty();
      content = '<div class="title">' + data.name + ': StreetView Unavailable</div>'
      content += '<div><img src="' + data.img + '" /></div>';
      $('#pano').hide();
    }
    else if (data.name === "Parking" || data.name === "Restrooms") {
      $('#infoDiv').children().empty();
      content = '<div class="title">' + data.name + '</div>'
      $('#pano').hide();
    }
    else {
      $('#infoDiv').children().empty();
      content = '<div class="title">' + data.name + '</div>'
      //content += '<div id="pano"></div>';
      streetView(data);
      $('#pano').show();
    }
    $('#infoDiv').append(content);
  });
};

function streetView(data) {
  
  var position = new google.maps.LatLng(data.povLat, data.povLng);
  var panoramaOptions = {
    position: position,
    addressControl: false,
    pov: {
      heading: data.heading,
      pitch: data.pitch,
      zoom: data.zoom
    }
  };
  var panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"), panoramaOptions);
  map.setStreetView(panorama);
  $('#pano').show();
};

function addInfo(marker, itemData) {
  var content;
  var infoWindow = new google.maps.InfoWindow();
  if (!itemData.heading && itemData.img) {
    content = '<div>' + itemData.name + ': StreetView Unavailable</div>'
    content += '<div><img src="' + itemData.img + '" /></div>';
  }
  else if (itemData.name === "Parking" || itemData.name === "Restrooms") {
    content = '<div>' + itemData.name + '</div>'
  }
  else {
    content = '<div>' + itemData.name + '</div>'
    content += '<div id="panoHolder"></div>';
  }
  google.maps.event.addListener(marker, "click", function() {
    infoWindow.setContent(content);
    infoWindow.open(map, marker);
  });
  if (itemData.heading) {
  streetView(itemData);
  }
};
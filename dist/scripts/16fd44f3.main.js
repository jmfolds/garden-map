function createMarker(a,b,c){var d=new google.maps.Marker({position:a,map:map,title:b,icon:c.icon});if(c.povLat){var e=new google.maps.LatLng(c.povLat,c.povLng);heading=c.heading,pitch=c.pitch,zoom=c.zoom,google.maps.event.addListener(d,"click",function(){clickedMarker=d,$("#pano").data("id",c),sv.getPanoramaByLocation(e,5,processSVData)})}else google.maps.event.addListener(d,"click",function(){openInfoWindow(d)});gmarkers.push(d)}function myclick(a){google.maps.event.trigger(gmarkers[a],"click")}function processSVData(a,b){var c=$("#pano").data();if(b===google.maps.StreetViewStatus.OK){var d=clickedMarker;openInfoWindow(clickedMarker),panorama&&panorama.setPano&&(panorama.setPano(a.location.pano),panorama.setPov({heading:c.id.heading,pitch:c.id.pitch,zoom:c.id.zoom}),panorama.setVisible(!0),google.maps.event.addListener(d,"click",function(){var b=a.location.pano;panorama.setPano(b),panorama.setPov({heading:c.id.heading,pitch:c.id.pitch,zoom:c.id.zoom}),panorama.setVisible(!0)}))}else openInfoWindow(clickedMarker),title.innerHTML=clickedMarker.getTitle()+"<br>Street View data not found for this location",panorama.setVisible(!1)}function openInfoWindow(a){title.innerHTML=a.getTitle(),htmlContent.innerHtml=a.myHtml,pin.set("position",a.getPosition()),infowindow.open(map,a)}function addMarkers(a){for(var b,c,d=0;d<a.length;d++)c=a[d],b=new google.maps.Marker({position:new google.maps.LatLng(a[d].lat,a[d].lng),map:map,icon:a[d].icon,animation:google.maps.Animation.DROP,title:a[d].name}),addInfo(b,c)}function addListener(a,b){var c;google.maps.event.addListener(a,"click",function(){!b.heading&&b.img?($("#infoDiv").children().empty(),c='<div class="title">'+b.name+": StreetView Unavailable</div>",c+='<div><img src="'+b.img+'" /></div>',$("#pano").hide()):"Parking"===b.name||"Restrooms"===b.name?($("#infoDiv").children().empty(),c='<div class="title">'+b.name+"</div>",$("#pano").hide()):($("#infoDiv").children().empty(),c='<div class="title">'+b.name+"</div>",streetView(b),$("#pano").show()),$("#infoDiv").append(c)})}function streetView(a){var b=new google.maps.LatLng(a.povLat,a.povLng),c={position:b,addressControl:!1,pov:{heading:a.heading,pitch:a.pitch,zoom:a.zoom}},d=new google.maps.StreetViewPanorama(document.getElementById("pano"),c);map.setStreetView(d),$("#pano").show()}function addInfo(a,b){var c,d=new google.maps.InfoWindow;!b.heading&&b.img?(c="<div>"+b.name+": StreetView Unavailable</div>",c+='<div><img src="'+b.img+'" /></div>'):"Parking"===b.name||"Restrooms"===b.name?c="<div>"+b.name+"</div>":(c="<div>"+b.name+"</div>",c+='<div id="panoHolder"></div>'),google.maps.event.addListener(a,"click",function(){d.setContent(c),d.open(map,a)}),b.heading&&streetView(b)}console.log("'Allo 'Allo!");var map,markers=[{lat:38.877821,lng:-104.870802,povLat:38.877771,povLng:-104.870694,heading:260,zoom:2,pitch:0,icon:"images/entrance.png",name:"Park Entrance: 30th Street"},{lat:38.859936,lng:-104.897785,povLat:38.860319,povLng:-104.897909,heading:0,zoom:2,pitch:0,icon:"images/entrance.png",name:"Park Entrance: Garden Drive"},{lat:38.86309,lng:-104.892677,povLat:38.862779,povLng:-104.892518,heading:335,zoom:2,pitch:0,icon:"images/entrance.png",name:"Park Entrance: Beckers Lane"},{lat:38.861231,lng:-104.879333,icon:"images/entrance.png",name:"Park Entrance: Ridge Road"},{lat:38.879608,lng:-104.881026,povLat:38.876877,povLng:-104.877224,heading:313,zoom:3,pitch:10,icon:"images/formations.png",name:"North Gateway Rock"},{lat:38.880727,lng:-104.881391,povLat:38.881663,povLng:-104.881251,heading:180,zoom:1,pitch:20,icon:"images/formations.png",name:"Tower of Babel"},{lat:38.879775,lng:-104.879288,povLat:38.878213,povLng:-104.878076,heading:310,zoom:3,pitch:10,icon:"images/formations.png",name:"White Rock"},{lat:38.879984,lng:-104.880977,povLat:38.878648,povLng:-104.87122,heading:276,zoom:4,pitch:8,icon:"images/formations.png",name:"Kissing Camels"},{lat:38.8778,lng:-104.880365,povLat:38.878849,povLng:-104.878155,heading:240,zoom:2,pitch:5,icon:"images/formations.png",name:"South Gateway Rock"},{lat:38.874764,lng:-104.879612,povLat:38.876251,povLng:-104.878131,heading:211,zoom:2,pitch:10,icon:"images/formations.png",name:"Gray Rock (Cathedral Rock)"},{lat:38.875791,lng:-104.883906,povLat:38.875693,povLng:-104.883455,heading:290,zoom:2,pitch:0,icon:"images/formations.png",name:"Giant Footsteps"},{lat:38.872415,lng:-104.884509,povLat:38.872534,povLng:-104.885333,heading:90,zoom:2,pitch:0,icon:"images/formations.png",name:"Scotsman"},{lat:38.864773,lng:-104.897502,povLat:38.864957,povLng:-104.897275,heading:215,zoom:2,pitch:10,icon:"images/formations.png",name:"Balanced Rock"},{lat:38.8646,lng:-104.897292,povLat:38.864796,povLng:-104.897201,heading:220,zoom:2,pitch:0,icon:"images/formations.png",name:"Steamboat Rock"},{lat:38.86985,lng:-104.88851,povLat:38.86763,povLng:-104.8883,heading:359,zoom:4,pitch:0,icon:"images/formations.png",name:"Siamese Twins"},{lat:38.878714,lng:-104.880468,icon:"images/formations.png",img:"images/signatureRock.jpg",name:"Signature Rock"},{lat:38.877061,lng:-104.881664,icon:"images/formations.png",img:"images/pulpitRock.jpg",name:"Pulpit Rock"},{lat:38.87619,lng:-104.881352,icon:"images/formations.png",img:"images/threeGraces.jpg",name:"Three Graces"},{lat:38.876296,lng:-104.881089,icon:"images/formations.png",img:"images/cathedralSpires.jpg",name:"Cathedral Spires"},{lat:38.873494,lng:-104.88047,icon:"images/formations.png",img:"images/sleepingGiant.jpg",name:"Sleeping Giant"},{lat:38.863123,lng:-104.898165,icon:"images/formations.png",img:"images/toadstools.jpg",name:"Toad and Toadstools"},{lat:38.878272,lng:-104.880929,icon:"images/formations.png",img:"images/sentinelSpires.jpg",name:"Sentinel Spires"},{lat:38.879007,lng:-104.870542,name:"Parking",icon:"images/parking.png"},{lat:38.878422,lng:-104.869754,name:"Restrooms",icon:"images/restrooms.png"},{lat:38.88117,lng:-104.880434,name:"Parking",icon:"images/parking.png"},{lat:38.880777,lng:-104.879909,name:"Restrooms",icon:"images/restrooms.png"},{lat:38.869694,lng:-104.878085,name:"Parking",icon:"images/parking.png"},{lat:38.865642,lng:-104.879018,name:"Parking",icon:"images/parking.png"},{lat:38.865295,lng:-104.897305,name:"Parking",icon:"images/parking.png"},{lat:38.863976,lng:-104.892579,name:"Restrooms",icon:"images/restrooms.png"},{lat:38.86431,lng:-104.89273,name:"Parking",icon:"images/parking.png"},{lat:38.865559,lng:-104.890053,name:"Parking",icon:"images/parking.png"},{lat:38.872254,lng:-104.885117,name:"Parking",icon:"images/parking.png"}];$(function(){var a={zoom:8,center:new google.maps.LatLng(38.874463,-104.880322),zoom:14,mapTypeId:google.maps.MapTypeId.TERRAIN,streetViewControl:!1,scaleControl:!0,scaleControlOptions:{position:google.maps.ControlPosition.RIGHT_BOTTOM},panControl:!0,panControlOptions:{position:google.maps.ControlPosition.TOP_RIGHT},zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE,position:google.maps.ControlPosition.TOP_RIGHT}};map=new google.maps.Map(document.getElementById("map"),a);for(var b=0;b<markers.length;b++){var c=markers[b].lat,d=markers[b].lng,e=new google.maps.LatLng(c,d),f=markers[b].name;createMarker(e,f,markers[b])}$("#legend").draggable()});var gmarkers=[],sv=new google.maps.StreetViewService,clickedMarker=null,panorama=null,content=document.createElement("DIV"),title=document.createElement("DIV");content.appendChild(title);var htmlContent=document.createElement("DIV");content.appendChild(htmlContent);var streetview=document.createElement("DIV");streetview.style.width="250px",streetview.style.height="250px",content.appendChild(streetview);var infowindow=new google.maps.InfoWindow({size:new google.maps.Size(150,50),content:content}),pin=new google.maps.MVCObject;google.maps.event.addListenerOnce(infowindow,"domready",function(){panorama=new google.maps.StreetViewPanorama(streetview,{navigationControl:!1,enableCloseButton:!1,addressControl:!1,linksControl:!1,visible:!0}),panorama.bindTo("position",pin)});
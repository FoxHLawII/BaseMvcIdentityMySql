// Maps

function initMap() {
    // Map options

    var mapOptions = {
        zoom: 12,
        center: { lat: 4.6713413, lng: -74.1206616 }
    }

    // New map frame

    var map = new google.maps.Map(document.getElementById('mapaEventosYPromociones'), mapOptions)

    addMarker({
        coords: { lat: 4.7042066, lng: -74.1424129 },
        icon: '/Content/img/placeholder.png',
        content: '<div class="container-fluid">' +
                     '<div class="row">' +
                        '<img src="/Content/img/icon/iconoUbicacion.svg" alt="ubicacion" width="90" class="map-box-img img-fluid">' +
                        '<div class="map-box-content">' +
                            '<h5>Autopista Norte</h5>' +
                            '<p>Direccion: Cl 85 #19-12, Bogota</p>' +
                            '<p>Lugar Petfriendly</p>' +
                            '<p>Horario: L-V 8:00 am - 9:00 pm</p>'+
                        '</div>'+
                      '</div>' +
                 '</div>'
    })
    addMarker({
        coords: { lat: 4.6761727, lng: -74.0600755 },
        icon: '/Content/img/placeholder.png',
        content: '<div class="container-fluid">' +
                    '<div class="row">' +
                    '<img src="/Content/img/icon/iconoUbicacion.svg" alt="ubicacion" width="90" class="map-box-img img-fluid">' +
                    '<div class="map-box-content">' +
                        '<h5>Autopista Norte</h5>' +
                        '<p>Direccion: Cl 85 #19-12, Bogota</p>' +
                        '<p>Lugar Petfriendly</p>' +
                        '<p>Horario: L-V 8:00 am - 9:00 pm</p>' +
                    '</div>' +
                    '</div>' +
                '</div>'
    })
    addMarker({
        coords: { lat: 4.6713413, lng: -74.1206616 },
        icon: '/Content/img/placeholder.png',
        content: '<div class="container-fluid">' +
                    '<div class="row">' +
                    '<img src="/Content/img/icon/iconoUbicacion.svg" alt="ubicacion" width="90" class="map-box-img img-fluid">' +
                    '<div class="map-box-content">' +
                        '<h5>Autopista Norte</h5>' +
                        '<p>Direccion: Cl 85 #19-12, Bogota</p>' +
                        '<p>Lugar Petfriendly</p>' +
                        '<p>Horario: L-V 8:00 am - 9:00 pm</p>' +
                    '</div>' +
                    '</div>' +
                '</div>'
    })
    addMarker({
        coords: { lat: 4.666726, lng: -74.0553429 },
        icon: '/Content/img/placeholder.png',
        content: '<div class="container-fluid">' +
                    '<div class="row">' +
                    '<img src="/Content/img/icon/iconoUbicacion.svg" alt="ubicacion" width="90" class="map-box-img img-fluid">' +
                    '<div class="map-box-content">' +
                        '<h5>Autopista Norte</h5>' +
                        '<p>Direccion: Cl 85 #19-12, Bogota</p>' +
                        '<p>Lugar Petfriendly</p>' +
                        '<p>Horario: L-V 8:00 am - 9:00 pm</p>' +
                    '</div>' +
                    '</div>' +
                '</div>'
    })
    addMarker({
        coords: { lat: 4.6661097, lng: -74.0579313 },
        icon: '/Content/img/placeholder.png',
        content: '<div class="container-fluid">' +
                    '<div class="row">' +
                    '<img src="/Content/img/icon/iconoUbicacion.svg" alt="ubicacion" width="90" class="map-box-img img-fluid">' +
                    '<div class="map-box-content">' +
                        '<h5>Autopista Norte</h5>' +
                        '<p>Direccion: Cl 85 #19-12, Bogota</p>' +
                        '<p>Lugar Petfriendly</p>' +
                        '<p>Horario: L-V 8:00 am - 9:00 pm</p>' +
                    '</div>' +
                    '</div>' +
                '</div>'
    })
    addMarker({
        coords: { lat: 4.7156478, lng: -74.0314144 },
        icon: '/Content/img/placeholder.png',
        content: '<div class="container-fluid">' +
                    '<div class="row">' +
                    '<img src="/Content/img/icon/iconoUbicacion.svg" alt="ubicacion" width="90" class="map-box-img img-fluid">' +
                    '<div class="map-box-content">' +
                        '<h5>Autopista Norte</h5>' +
                        '<p>Direccion: Cl 85 #19-12, Bogota</p>' +
                        '<p>Lugar Petfriendly</p>' +
                        '<p>Horario: L-V 8:00 am - 9:00 pm</p>' +
                    '</div>' +
                    '</div>' +
                '</div>'
    })

    // Add marker function

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: props.icon
        })

        // Show intern frame content
        if (props.content) {
            var info = new google.maps.InfoWindow({
                content: props.content
            })
            marker.addListener('click', function () {
                info.open(map, marker)
            })
        }
    }
}

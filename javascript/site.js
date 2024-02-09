function initMap() {
        var mapOptions = {
            center: { lat: 59.3293, lng: 18.0686 }, // Koordinater för centrum av kartan
            zoom: 10 // Zoomnivå (ju högre värde, desto närmare zoomad)
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    }
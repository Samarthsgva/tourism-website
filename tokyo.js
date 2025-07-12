function initMap() {
    
    const tokyo = { lat: 35.6762, lng: 139.6503 };
    const map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 12,
        center: tokyo
    });

  
    const places = [
        { name: 'Senso-ji Temple', position: { lat: 35.7117, lng: 139.7925 } },
        { name: 'Shibuya Crossing', position: { lat: 35.6595, lng: 139.7004 } },
        { name: 'Tokyo Skytree', position: { lat: 35.7100, lng: 139.8107 } },
        { name: 'Meiji Shrine', position: { lat: 35.6764, lng: 139.6993 } },
        { name: 'Tokyo Disneyland', position: { lat: 35.6329, lng: 139.8804 } },
        { name: 'Ueno Park', position: { lat: 35.7148, lng: 139.7731 } }
    ];

   
    places.forEach(place => {
        new google.maps.Marker({
            position: place.position,
            map: map,
            title: place.name
        });
    });
}

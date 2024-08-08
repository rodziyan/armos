/**
 * Logistic Fleet
 */
'use strict';

(function () {
  // Mapbox Access Token
  // Replace with your Mapbox access token
  mapboxgl.accessToken = '';

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          iconSize: [20, 42],
          message: '1'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.999024, 40.75249842]
        }
      },
      {
        type: 'Feature',
        properties: {
          iconSize: [20, 42],
          message: '2'
        },
        geometry: {
          type: 'Point',
          coordinates: [-74.03, 40.75699842]
        }
      },
      {
        type: 'Feature',
        properties: {
          iconSize: [20, 42],
          message: '3'
        },
        geometry: {
          type: 'Point',
          coordinates: [-73.967524, 40.7599842]
        }
      },
      {
        type: 'Feature',
        properties: {
          iconSize: [20, 42],
          message: '4'
        },
        geometry: {
          type: 'Point',
          coordinates: [-74.0325, 40.742992]
        }
      }
    ]
  };

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-73.999024, 40.75249842],
    zoom: 12.25
  });

  // Ensure map resizes when the window is resized
  window.addEventListener('resize', () => {
    map.resize();
  });

  // Add markers to the map and their functionality
  for (const marker of geojson.features) {
    // Create a DOM element for each marker
    const el = document.createElement('div');
    const width = marker.properties.iconSize[0];
    const height = marker.properties.iconSize[1];
    el.className = 'marker';
    el.insertAdjacentHTML(
      'afterbegin',
      '<img src="' +
        'assets/img/illustrations/fleet-car.png' +
        '" alt="Fleet Car" width="20" class="rounded-3" id="carFleet-' +
        marker.properties.message +
        '">'
    );
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.cursor = 'pointer';

    // Add markers to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    // Select Accordion for respective Marker
    const element = document.getElementById('fl-' + marker.properties.message);

    // Select Car for respective Marker
    const car = document.getElementById('carFleet-' + marker.properties.message);

    element.addEventListener('click', function () {
      const focusedElement = document.querySelector('.marker-focus');

      if (element.classList.contains('active')) {
        // Fly to location
        map.flyTo({
          center: geojson.features[marker.properties.message - 1].geometry.coordinates,
          zoom: 16
        });
        // Remove marker-focus from other marked cars
        if (focusedElement) {
          focusedElement.classList.remove('marker-focus');
        }
        car.classList.add('marker-focus');
      } else {
        // Remove marker-focus if not active
        car.classList.remove('marker-focus');
      }
    });
  }

  // For selecting default car location
  const defCar = document.getElementById('carFleet-1');
  if (defCar) {
    defCar.classList.add('marker-focus');
  }

  // Hide mapbox controls
  const controlContainer = document.querySelector('.mapboxgl-control-container');
  if (controlContainer) {
    controlContainer.classList.add('d-none');
  }

  // Selecting Sidebar Accordion for perfect scroll
  const sidebarAccordionBody = document.querySelectorAll('.logistics-fleet-sidebar-body');

  // Perfect Scrollbar for Sidebar Accordion
  if (sidebarAccordionBody.length) {
    new PerfectScrollbar(sidebarAccordionBody[0], {
      wheelPropagation: false,
      suppressScrollX: true
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and modal
    const addLocationButton = document.getElementById('add-location-button');
    const addLocationModal = document.getElementById('addLocationModal');

    // Initialize the modal
    const modal = new bootstrap.Modal(addLocationModal);

    // Add event listener to the button
    if (addLocationButton) {
      addLocationButton.addEventListener('click', function () {
        // Show the modal
        modal.show();
      });
    }

    // Add event listener to the button inside the modal
    const confirmButton = document.getElementById('confirm-add-location');
    if (confirmButton) {
      confirmButton.addEventListener('click', function () {
        // Redirect to app-warehouse.html
        window.location.href = 'form-warehouse.html';
      });
    }
  });
})();

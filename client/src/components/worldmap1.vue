<template>
  <div>
    <h2>World</h2>
    <div id="map-container"></div>
  </div>
</template>

<script>
// import L from "leaflet";
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },

  data() {
    return {
      center: [37, 7749, -122, 4194],
    };
  },
  mounted() {
    this.setupLeafletMap();
  },
  methods: {
    setupLeafletMap: function() {
      const mapDiv = LMap("map-container").setView(this.center, 13);
      LMap.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: "pk.eyJ1IjoibmF0YW5oYXJ0IiwiYSI6ImNraXUzZWZjNTJ3ZnMycnFqczB0NXM1N24ifQ.MXqk4P5ifQ0VdQM2mT0fLw",
      }).addTo(mapDiv);
    },
  },
};
</script>

<style lang="scss" scoped>
#map-container {
  width: 80vw;
  height: 60vh;
}
</style>

<template>
  <div style="height: 500px; width: 100%">
    <div style="height: 200px overflow: auto;"></div>
    <l-map :zoom="zoom" :center="center" :options="mapOptions" style="height: 80%" @update:center="centerUpdate" @update:zoom="zoomUpdate">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="withPopup">
        <l-popup> </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  // LTooltip
} from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    // LTooltip,
  },
  data() {
    return {
      zoom: 1,
      center: latLng(47.41322, -1.219482),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 1,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      accessToken: "pk.eyJ1IjoibmF0YW5oYXJ0IiwiYSI6ImNraXUzZWZjNTJ3ZnMycnFqczB0NXM1N24ifQ.MXqk4P5ifQ0VdQM2mT0fLw",
      mapOptions: {
        zoomSnap: 1.5,
      },
      showMap: true,
    };
  },
  methods: {
    async getSatPos() {
      axios.get()
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
  },
};
</script>

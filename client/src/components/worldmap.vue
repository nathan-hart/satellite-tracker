<template>
  <div style="height: 500px; width: 100%">
    <div style="height: 200px overflow: auto;"></div>
    <l-map :zoom="zoom" :center="center" :options="mapOptions" style="height: 80%" @update:center="centerUpdate" @update:zoom="zoomUpdate">
      <l-tile-layer :url="url" :attribution="attribution" />
      <!-- <l-marker :lat-lng="withPopup">
        <l-popup> </l-popup>
      </l-marker> -->
    </l-map>
    <h1>{{ satData }}</h1>
  </div>
</template>

<script>
import axios from "axios";
import { latLng } from "leaflet";
import {
  LMap,
  LTileLayer,
  // LMarker,
  // LPopup,
  // LTooltip
} from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    // LMarker,
    // LPopup,
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
      satLat: null,
      satLong: null,
      satData: null,
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    getSatPos: async function() {
      await axios({
        method: "get",
        url: "http://localhost:8000/api",
      }).then((response) => {
        this.satData = response.data;
        this.satLong = response.data.positions[0].satlongitude;
        this.satLat = response.data.positions[0].satlatitude;
        console.log(this.satLong);
      });
    },
  },
  mounted() {
    this.getSatPos();
  },
};
</script>

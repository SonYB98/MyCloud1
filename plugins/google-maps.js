import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDDXDdoYwn-bRRX0LseKP0C0EpRnIxa0M4",
    libraries: "places"
  }
});

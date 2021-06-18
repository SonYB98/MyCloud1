<template>
  <div>
    <section class="hero is-link">
      <div class="hero-body">
        <p class="title">
          <i class="fas fa-dog"></i> 강아지와
          <i class="fas fa-cat"></i> 고양이의 행동변화
        </p>
        <p class="subtile">애완동물의 행동에 따른 변화를 알아보자</p>
      </div>
    </section>
    <hr />
    <div class="container-fluid mt--7">
      <div class="card shadow border-0">
        <div
          id="map"
          class="map-canvas"
          data-lat="40.748817"
          data-lng="-73.985428"
          style="height: 600px"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Loader } from "google-maps";
const loader = new Loader("AIzaSyDDXDdoYwn-bRRX0LseKP0C0EpRnIxa0M4");
import Firebase from "firebase";
// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyAZtQ0wUnk88TqcjeMmhjXZNTgIzrktpfM",
    authDomain: "cloudbase-a87e8.firebaseapp.com",
    databaseURL: "https://cloudbase-a87e8-default-rtdb.firebaseio.com",
    projectId: "cloudbase-a87e8",
    storageBucket: "cloudbase-a87e8.appspot.com",
    messagingSenderId: "608120056059",
    appId: "1:608120056059:web:e2479a2cb3752dc9a1e85e",
    measurementId: "G-J31E886V5F"
};
let app = Firebase.initializeApp(firebaseConfig);
let db = app.database();
let locationRef = db.ref("location");
let map, marker;
export default {
  data() {
    return {
      nav: null,
    };
  },
  mounted() {
    loader.load().then(function (google) {
      // Regular Map
      // const myLatlng = new google.maps.LatLng(40.748817, -73.985428);
      const myLatlng = new google.maps.LatLng(
        37.28928696370265,
        127.2048022021344
      );
      const mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        disableDefaultUI: true, // a way to quickly hide all controls
        zoomControl: true,
        styles: [
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }],
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
          },
        ],
      };
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      locationRef.on("value", (snapshot) => {
        let newMaker = { lat: snapshot.val().lat, lng: snapshot.val().lng };
        console.log(newMaker.lat);
        console.log(newMaker.lng);
        if (marker != null) marker.setMap(null);
        marker = new google.maps.Marker({
          position: newMaker,
          title: "Lost Tag",
          icon: "https://cdn.glitch.com/37d9e42b-5b4d-4b17-9e77-c177a73cd5ec%2Fdasol.png?v=1621847826305",
        });
        marker.setMap(map);
      });
    });
  },
};
</script>
<style></style>
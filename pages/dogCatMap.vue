<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <p class="title">
          <i class="fas fa-map-signs"></i> 대전에 있는 동물병원 찾기
          
        </p>
        <p class="subtile">대전 지역에 있는 동물병원 위치를 간단히 체크하자</p>
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
        36.34397644068321, 
        127.37407620541092
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

        marker = new google.maps.Marker({
          position: newMaker,
          title: "hospital",
          icon: "https://cdn.glitch.com/37d9e42b-5b4d-4b17-9e77-c177a73cd5ec%2Fdasol.png?v=1621847826305",
        });
        marker.setMap(map);
      });
    });
  },
};
</script>
<style></style>
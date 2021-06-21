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
    <article class="message">
      <div class="message-header">동물병원 위치 마킹</div>
      <div class="message-body">
        <section>
          <GMap
            ref="gMap"
            language="en"
            :center="{ lat: locations[9].lat, lng: locations[9].lng }"
            :zoom="12"
          >
            <GMapMarker
              v-for="location in locations"
              :key="location.id"
              :position="{ lat: location.lat, lng: location.lng }"
            >
            </GMapMarker>
          </GMap>
        </section>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  data() {
    return {
      locations: [
        {
          lat: 36.39601756836841,
          lng: 127.31158740987249,
          label: "hospital",
        },
        {
          lat: 36.39076669332907,
          lng: 127.30678089114245,
          label: "hospital",
        },
        {
          lat: 36.38865401001996,
          lng: 127.31618459618917,
          label: "hospital",
        },
        {
          lat: 36.38706481631785,
          lng: 127.31764371794652,
          label: "hospital",
        },
        {
          lat: 36.386097465117054,
          lng: 127.32107694561087,
          label: "hospital",
        },
        {
          lat: 36.376285079990616,
          lng: 127.31918867039548,
          label: "hospital",
        },
        {
          lat: 36.370410876834185,
          lng: 127.31747205656329,
          label: "hospital",
        },
        {
          lat: 36.377603746901784,
          lng: 127.34268394364764,
          label: "hospital",
        },
        {
          lat: 36.37150198706765,
          lng: 127.33871433399854,
          label: "hospital",
        },
        {
          lat: 36.36534162975464,
          lng: 127.33900303288212,
          label: "hospital",
        },
        {
          lat: 36.36028512298601,
          lng: 127.35228318152633,
          label: "hospital",
        },
        {
          lat: 36.35377511330496,
          lng: 127.34521005887888,
          label: "hospital",
        },
        {
          lat: 36.344416020529856,
          lng: 127.34073522618354,
          label: "hospital",
        },
        {
          lat: 36.35359500966891,
          lng: 127.38550809795532,
          label: "hospital",
        },
        {
          lat: 36.348169296330745,
          lng: 127.38581430936276,
          label: "hospital",
        },
        {
          lat: 36.34636064119187,
          lng: 127.38101699731288,
          label: "hospital",
        },
        {
          lat: 36.347922664012934,
          lng: 127.37713831948533,
          label: "hospital",
        },
        {
          lat: 36.3297519348717,
          lng: 127.40490148709318,
          label: "hospital",
        },
        {
          lat: 36.32029490133281,
          lng: 127.41490439306953,
          label: "hospital",
        },
      ],
    };
  },
};
</script>
<style></style>
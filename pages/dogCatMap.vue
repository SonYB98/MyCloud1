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
        <div>
          <section>
            <GmapMap
              :center="{ lat: 36.334864, lng: 127.359508 }"
              :zoom="7"
              map-type-id="terrain"
              style="width: 500px; height: 300px"
            />
          </section>
        </div>
    </div>
  </div>
</template>
<script>

</script>
<style></style>
<template>
  <div>
    <nav class="breadcrumb">
      <ul>
        <li>
          <nuxt-link to="/"><i class="fas fa-home"></i>메인화면</nuxt-link>
        </li>

         <li>
          <nuxt-link to="/dogCatNames"><i class="fas fa-bone"></i>&nbsp;행동파악</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/dogCatcure"><i class="fas fa-book-medical"></i>&nbsp;건강상태</nuxt-link>
        </li>
        
         <li>
          <nuxt-link to="/dogCatseed"><i class="fas fa-utensils"></i>&nbsp;건강식품</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/dogCatChart"><i class="fas fa-chart-pie"></i>&nbsp;비용통계</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/dogCatMap"> <i class="fas fa-map-signs"></i>&nbsp;병원찾기</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
        <i class="fas fa-copyright"></i> 2020-2021 , 홈페이지제작 1860024 손영범
      </div>
    </footer>
  </div>
</template>
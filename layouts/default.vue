<template>
  <div>
    <nav class="breadcrumb">
      <ul>
        <li>
          <nuxt-link to="/"><i class="fas fa-home"></i>HOME</nuxt-link>
        </li>
         <li>
          <nuxt-link to="/dogCatNames"><i class="fas fa-bone"></i>&nbsp;행동파악</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/dogCatcure"><i class="fas fa-book-medical"></i>&nbsp;건강상태</nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
        <i class="fas fa-copyright"></i> 2020-2021 , 홈페이지제작
      </div>
    </footer>
  </div>
</template>
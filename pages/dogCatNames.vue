<template>
  <div>
    <section class="hero is-link">
      <div class="hero-body">
        <p class="title">
          <i class="fas fa-dog"></i> 강아지와
          <i class="fas fa-cat"></i> 고양이의 행동변화
        </p>
        <p class="subtile">아직 어떻게 사용할지 몰라서 같은거로 했습니다.</p>
      </div>
    </section>
    <hr />
    <section class="columns">
      <div class="column">
        <table class="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>번호</th>
              <th>강아지의 행동패턴</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="pos in tabledogStat.length">
              <tr :key="pos">
                <td>{{ pos }}</td>
                <td>{{ tabledogStat[pos - 1] }}</td>
                <td>{{ tabledogStat2[pos - 1] }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div class="column">
        <table class="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>번호</th>
              <th>고양이의 행동패턴</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="pos in tablecatStat.length">
              <tr :key="pos">
                <td>{{ pos }}</td>
                <td>{{ tablecatStat[pos - 1] }}</td>
                <td>{{ tablecatStat2[pos - 1] }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
import catStat from "~/assets/catStat.json";
import catStat2 from "~/assets/catStat2.json";
import dogStat from "~/assets/dogStat.json";
import dogStat2 from "~/assets/dogStat2.json";

export default {
  data() {
    return {
      tabledogStat: dogStat.names,
      tabledogStat2: dogStat2.names,
      tablecatStat: catStat.names,
      tablecatStat2: catStat2.names,
    };
  },
};
</script>
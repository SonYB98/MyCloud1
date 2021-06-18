<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">
          <i class="fas fa-paw"></i> 애완동물 상태체크
          <i class="fas fa-paw"></i>
        </p>
        <p class="subtitle">애완동물의 건강정보에 대해 볼수 있는 곳</p>
      </div>
    </section>
    <div class="columns">
      <div class="column">
        <article class="message">
          <div class="message-header">
            <p>강아지</p>
          </div>
          <div class="message-body">
            <figure class="image is-256x256">
              <img
                src="~assets/dog.jpg"
                alt=""
              />
            </figure>
            제가 키우는 강아지 사진입니다
          </div>
        </article>
        <article class="notification">
          <table
            class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
          >
            <thead>
              <tr>
                <th>팁</th>
                <th>견주를 위한 간단 팁!</th>
              </tr>
            </thead>
            <tbody>
              <tr class="is-selected">
                <td>산책을 자주가자</td>
                <td>강아지들의 건강을 위해 산책 겸 운동은 필수!</td>
              </tr>
              <tr>
                <td>충분한 쉼터를 주자</td>
                <td>강아지도 우리처럼 혼자만의 느긋함이 필요!</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>

      <div class="column">
        <article class="message">
          <div class="message-header">
            <p>고양이</p>
          </div>
          <div class="message-body">
            <figure class="image is-256x256">
              <img src="~assets/cat.jpg" alt="" />
            </figure>
            제가 키우는 고양이 사진입니다
          </div>
        </article>
        <article class="notification">
          <table
            class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
          >
            <thead>
              <tr>
                <th>팁</th> 
                <th>집사들을 위한 간단 팁!</th>
              </tr>
            </thead>
            <tbody>
              <tr class="is-selected">
                <td>장난감으로 놀아주자</td>
                <td>고양이들은 놀아주는걸 매우 좋아하니 운동겸 자주 놀아주자
                </td>
              </tr>
              <tr>
                <td>이해하려 하지말자 (필수)</td>
                <td>원래 고양이는 이해가 불가능한 생명체이니 집안의 고양이 손이 닿는 물건은 전부 치우자</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </div>
  </div>
</template>

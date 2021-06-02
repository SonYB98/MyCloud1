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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bulldog_adult_male.jpg/220px-Bulldog_adult_male.jpg"
                alt=""
              />
            </figure>
            강아지들에 대한 내용 , 건강상태체크
          </div>
        </article>
        <article class="notification">
          <table
            class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
          >
            <thead>
              <tr>
                <th>강아지가 주는 신호</th>
                <th>행동내용</th>
              </tr>
            </thead>
            <tbody>
              <tr class="is-selected">
                <td>신호1</td>
                <td>이러이러한 신호1를 준다는 내용</td>
              </tr>
              <tr>
                <td>신호2</td>
                <td>이러이러한 신호2를 준다는 내용</td>
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
              <img src="~assets/cat.jpeg" alt="" />
            </figure>
            고양이의 상태체크 내용
          </div>
        </article>
        <article class="notification">
          <table
            class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
          >
            <thead>
              <tr>
                <th>고양이가 주는 신호</th>
                <th>행동내용</th>
              </tr>
            </thead>
            <tbody>
              <tr class="is-selected">
                <td>신호1</td>
                <td>이러이러한 신호1를 준다는 내용</td>
              </tr>
              <tr>
                <td>신호2</td>
                <td>이러이러한 신호2를 준다는 내용</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>

      <div class="column">
        <article class="message">
          <div class="message-header">
            <p>임시3(아직 못정함)</p>
          </div>
          <div class="message-body">임시3에 대한 내용</div>
        </article>
      </div>
    </div>
  </div>
</template>

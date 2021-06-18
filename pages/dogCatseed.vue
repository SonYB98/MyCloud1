<template>
	<div>
		<section class="hero is-danger">
			<div class="hero-body">
				<p class="title"><i class="fas fa-utensils"></i> 건강식 알아보기</p>
				<p class="subtile">
					우리 애완동물들의 건강을 위한 식품을 알아보자
				</p>
			</div>
		</section>
		<hr />
		<section class="columns">
			<div class="column">
				<article class="message is-primary">
					<div class="message-header">오늘의 강아지</div>
					<div class="message-body">
						<div class="content">
							지금 나오는 강아지를 알아보세요.
							<button class="button is-warning" @click="showDogName">
								강아지 품종?
							</button>
						</div>
						<figure class="image container">
							<img :src="dogImageUrl" alt="" />
						</figure>
					</div>
				</article>
			</div>
		</section>
		<div class="column">
			<table class="table">
				<thead>
					<th>사진</th>
					<th>이름</th>
                    <th>정보</th>
					<td>가격</td>			
				</thead>
				<tbody>
					<template v-for="pos in tableStatusKey.length">
						<tr :key="pos">
							<td>{{ tableStatus[pos - 1]}}</td>
                            <td>{{ tableStatus2[pos - 1]}}</td>
                            <td>{{ tableStatus3[pos - 1]}}</td>	
							<td>{{ tableStatus3[pos - 1]}}</td>								
						</tr>
					</template>
				</tbody>
			</table>
            <div class="content">
				<p class="tag is-danger">출처</p>
				<a href="https://github.com/SonYB98">MY GIT</a><br />
			</div>
		</div>
		<div class="column"></div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		data() {
			const colors = [
				'is-white',
				'is-primary',
				'is-link',
				'is-info',
				'is-success',
				'is-warning',
				'is-danger',
			];
			return {
				dogNameField: 'dogName',
				colors: colors,
				colorSize: colors.length,
			};
		},
		async asyncData() {
			const petStat = await axios.get('https://raw.githubusercontent.com/SonYB98/MyCloud1/master/assets/petStat.json');
            //alert(Object.keys(petStat));
            console.log(Object.keys(petStat.data.message));
			return {
				tableStatus: petStat.data.message,
                tableStatusKey: Object.keys(petStat.data.message),
                tableStatus2: petStat.data.status,
                tableStatus3: petStat.data.status2
                
                
			};
		}
	};
</script>
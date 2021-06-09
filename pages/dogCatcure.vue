<template>
	<div>
		<section class="hero is-warning">
			<div class="hero-body">
				<p class="title"><i class="fas fa-dog"></i> 애완동물 건강체크</p>
				<p class="subtile">
					애완동물의 상태를 간단하게 체크해봅시다.
				</p>
			</div>
		</section>
		<hr />
		<section class="columns"></section>
		<div class="column">
			<table class="table">
				<thead>
					<th>번호</th>
					<th>간단한 진단 내역</th>
					<th>애완동물</th>
                    <th>패턴 변화</th>
				</thead>
				<tbody>
					<template v-for="pos in tableDogKeys.length">
						<tr :key="pos">
							<td>{{ pos }}</td>
							<td>{{ tableDogKeys[pos - 1] }}</td>
							<td>
								<span
									class="tag is-black"
									v-if="
										((ar = tableDogBreeds[tableDogKeys[pos - 1]]),
										ar.length == 0)
									"
									>없음</span
								>
								<span v-else
									><template v-for="subbreed in ar"
										><span class="tag is-success" :key="subbreed">{{
											subbreed
										}}</span
										>&nbsp;</template
									>
								</span>
							</td>
						</tr>
					</template>
				</tbody>
			</table>
            <div class="content">
				<p class="tag is-danger">출처</p>
				<a href="https://dog.ceo/dog-api/documentation/">Dog CEO</a><br />
				<a
					class="button is-primary is-small"
					href="https://dog.ceo/api/breeds/list/all"
					>List all breeds</a
				>
			</div>
		</div>
		<div class="column"></div>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		async asyncData() {
			const dogBreeds = await axios.get('https://raw.githubusercontent.com/SonYB98/MyCloud1/master/assets/petStat.json');
			//alert(Object.keys(dogBreeds));
			return {
				tableDogBreeds: dogBreeds.data.message,
				tableDogKeys: Object.keys(dogBreeds.data.message),
			};
		},
	};
</script>
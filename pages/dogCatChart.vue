<template>
	<div>
		<section class="hero is-success">
			<div class="hero-body">
				<p class="title">
					<i class="fas fa-chart-pie"></i>  통계 알아보는 
					애완동물이 아픈시기와 금액비용<i class="fas fa-dog"></i>
				</p>
				<p class="subtile">
					다치는 시기와 병원금액으로 미리 예방하자
				</p>
			</div>
		</section>
		<hr />
		<section class="columns">
			<div class="column">
				<article class="message">
					<div class="message-header">
						동물병원 평균 비용
					</div>
					<div class="message-body">
						<div
							id="lineChart"
							:style="`width:100%;height:${chartHeight}px`"
						></div>
						<div class="content">
							<p class="tag is-danger">출처</p>
							<a href="https://www.data.go.kr/data/15035719/fileData.do">
								공공데이터포털</a
							>
						</div>
					</div>
				</article>
			</div>
			<div class="column">
				<article class="message">
					<div class="message-header">
						동물들이 자주 다치는 평균 연령대
					</div>
					<div class="message-body">
						<div id="pieChart" style="width:100%;height:400px"></div>
						<div class="content">
							<p class="tag is-danger">출처</p>
							<a>
								제가 키우는 아이들과 그외 여러 SNS와 유튜브</a
							>
						</div>
					</div>
				</article>
			</div>
		</section>
	</div>
</template>
<script>
	import toastuiChart from '~/plugins/toastuiChart';
	let showChart = false;
	const mypetMoney = {
		categories: [
			'5만원 미만',
			'5~10만원',
			'10~15만원',
			'15~20만원',
			'20만원 이상',
		], // y-axis
		series: [
			// x-axis
			{
				name: '강아지',
				data: [5, 8, 40, 12, 35],
			},
			{
				name: '고양이',
				data: [3, 3, 24, 50, 20],
			},
			{
				name: '그 외',
				data: [12, 16, 21, 41, 10],
			},
		],
	};
	const mypetYear = {
		categories: ['연령대'],
		series: [
			{
				name: '~3개월',
				data: 7,
			},
			{
				name: '3~6개월',
				data: 14,
			},
			{
				name: '6개월~1살',
				data: 11,
			},
			{
				name: '1살~3살',
				data: 33,
			},
			{
				name: '3살~5살',
				data: 15,
			},
			{
				name: '5살 이상',
				data: 20,
			},
		],
	};
	export default {
		data() {
			return { chartHeight: 400 };
		},
		mounted() {
			if (!showChart && process.client) {
				if (!toastuiChart('bar', 'lineChart', mypetMoney)) return;
				if (!toastuiChart('pie', 'pieChart', mypetYear)) return;
				showChart = true;
			}
		},
		destroyed() {
			showChart = false;
		},
	};
</script>
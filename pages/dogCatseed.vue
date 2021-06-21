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
		<div class="column">
			<table class="table">
				<thead>
					<th>사진</th>
					<th>이름</th>
                    <th>정보</th>
					<td>가격</td>			
				</thead>
				<tbody>
					<template v-for="pos in tablefoodnameKey.length">
						<tr :key="pos">			
							<td><img src= {{ tableimage[pos - 1]}} width="50px" height="50px"> </td>				
                            <td>{{ tablefoodname[pos - 1]}}</td>
                            <td>{{ tablematerial[pos - 1]}}</td>	
							<td>{{ tableprice[pos - 1]}}</td>								
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
		async asyncData() {
			const petFood = await axios.get('https://raw.githubusercontent.com/SonYB98/MyCloud1/master/assets/petFood.json');
			//alert(Object.keys(petStat));
			return {
				tableimage: petFood.data.image,
				tablefoodname: petFood.data.foodname,
                tablefoodnameKey: Object.keys(petFood.data.foodname),
                tablematerial: petFood.data.material,
                tableprice: petFood.data.price,               
			};
		},
	};
</script>
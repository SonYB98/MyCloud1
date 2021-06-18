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
		<section class="box">
			<form @submit.prevent="submitpetFood">
				<div class="field">
					<label class="label">건강식 찾기</label>
					<div class="control">
						<input type="text" v-model="petFood" />
						<button class="button is-link" type="submit">검 색</button>
					</div>
					<p class="help is-success">
						알아보고 싶은 건강식을 찾아보자
					</p>
				</div>
			</form>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				petFoodField: 'dogName',
				petFood: null,
			};
		},
		methods: {
			submitpetFood() {
				this.$router.push(
					'/PetFoodAll?' + this.petFoodField + '=' + this.petFood
				);
			},
		},
	};
</script>
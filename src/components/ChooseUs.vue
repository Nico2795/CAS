<template>
	<div class="container" id="featured-3">
		<h1 class="pb-2">Why Choose Us</h1>
		<div class="row g-4 py-5 justify-content-center">
			<div class="feature col">
				<div
					class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3"
				>
        <i class="far fa-star"></i>
				</div>
				<h3 class="fs-2">CERTIFICATED BY FAA & EASA</h3>
			</div>
			<div class="feature col">
				<div
					class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3"
				>
        <i class="fas fa-globe"></i>
				</div>
				<h3 class="fs-2">EXPERIENCE</h3>
			</div>
			<div class="feature col">
				<div
					class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3"
				>
        <i class="fas fa-check"></i>
				</div>
				<h3 class="fs-2">QUALITY</h3>
			</div>
			<div class="feature col">
				<div
					class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3"
				>
        <i class="fas fa-users"></i>
				</div>
				<h3 class="fs-2">SERVICE</h3>
			</div>
			<div class="feature col">
				<div
					class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3"
				>
        <i class="fas fa-money-bill"></i>
				</div>
				<h3 class="fs-2">PRICE</h3>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ChooseUs",
};
</script>

<style scoped>

.feature-icon{
	transition:all 0.2s ease-in-out;
}

.feature-icon:hover{
	transform: scale(1.2);
	color: #1e3163;

}

</style>

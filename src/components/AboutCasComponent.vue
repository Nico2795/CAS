<template>
	<!-- Carousel wrapper -->
	<div
		id="carouselBasicExample"
		class="carousel slide carousel-fade"
		data-mdb-ride="carousel"
	>
		<!-- Indicators -->
		<div class="carousel-indicators">
			<button
				type="button"
				data-mdb-target="#carouselBasicExample"
				data-mdb-slide-to="0"
				class="active"
				aria-current="true"
				aria-label="Slide 1"
			></button>
			<button
				type="button"
				data-mdb-target="#carouselBasicExample"
				data-mdb-slide-to="1"
				aria-label="Slide 2"
			></button>
			<button
				type="button"
				data-mdb-target="#carouselBasicExample"
				data-mdb-slide-to="2"
				aria-label="Slide 3"
			></button>
			<button
				type="button"
				data-mdb-target="#carouselBasicExample"
				data-mdb-slide-to="3"
				aria-label="Slide 4"
			></button>
		</div>

		<!-- Inner -->
		<div class="carousel-inner">
			<!-- Single item -->
			<div class="carousel-item active">
				<img
					src="../assets/AboutCasAssets/Plane1.jpg"
					class="plane1 d-block w-100"
					alt="Sunset Over the City"
				/>
				<div class="carousel-caption d-none d-md-block">
					<h3>Composite Aeronautic Specialists LLC: Your trusted partner for aircraft spare parts and composite material solutions.</h3>
					<p></p>
				</div>
			</div>

			<!-- Single item -->
			<div class="carousel-item">
				<img
					src="../assets/AboutCasAssets/30Years.jpg"
					class="d-block w-100"
					alt="Canyon at Nigh"
				/>
				<div class="carousel-caption d-none d-md-block">
					<h3>With 30+ years of experience, our dedicated professionals provide the highest quality, up-to-date materials to meet customer and FAA requirements.</h3>
					<p></p>
				</div>
			</div>

			
			<!-- Single item -->
			<div class="carousel-item">
				<img
					src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
					class="d-block w-100"
					alt="Cliff Above a Stormy Sea"
				/>
				<div class="carousel-caption d-none d-md-block">
					<h3>Our expertise is in overhaul and repair of aircraft parts and specialized in composite material production.</h3>
					<p></p>
				</div>
			</div>
			<div class="carousel-item">
				<img
					src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
					class="d-block w-100"
					alt="Cliff Above a Stormy Sea"
				/>
				<div class="carousel-caption d-none d-md-block">
					<h3>We offer guaranteed, high-quality service tailored to each client's needs. Our commitment to excellence ensures that your aircraft runs smoothly with the best products and services.</h3>
					<p></p>
				</div>
			</div>
		</div>
		<!-- Inner -->
		<!-- Controls -->
		<button
			class="carousel-control-prev"
			type="button"
			data-mdb-target="#carouselBasicExample"
			data-mdb-slide="prev"
		>
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button
			class="carousel-control-next"
			type="button"
			data-mdb-target="#carouselBasicExample"
			data-mdb-slide="next"
		>
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>
	<!-- Carousel wrapper -->
</template>
<script>
export default {};
</script>
<style scoped>


.carousel-item{
	height: 95vh !important;
}

@media (max-width: 768px) {
		.carousel-item{
			height: 30vh !important;
			width: 100vw !important; /* Cambias el margen inferior a 2px */
		}
	}




</style>

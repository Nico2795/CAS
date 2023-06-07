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
		</div>

		<!-- Inner -->
		<div class="carousel-inner">
			<!-- Single item -->
			<div class="row">
				<div class="col-md-6">
					
				</div>
				<div class="col-md-6">

				</div>
			</div>
			<div class="carousel-item active">
				<div class="carousel-caption">
					<h1>Mission</h1>
					<br>
					<br>
					<br>
					<h3>We aim to offer custom solutions for Aircraft Composites, delivering quality and value to build strong customer relationships.</h3>
					<br>
					<br>
				</div>
				<img
					src="../assets/SolutionsAssets/Mission.jpg"
					class="plane1 d-block w-100"
					alt="Sunset Over the City"
				/>

			</div>


			
			<!-- Single item -->
			<div class="carousel-item">
				<img
					src="../assets/SolutionsAssets/Vision.jpg"
					class="d-block w-100"
					alt="Cliff Above a Stormy Sea"
				/>
				<div class="carousel-caption ">
					<h1>Vision</h1>
					<br>
					<br>
					<h3>Our goal is to grow and lead in the Aircraft Composite industry by providing high-quality solutions, earning customer trust and loyalty, and being profitable and competitive.</h3>
					
					<br>
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
	height: 100vh !important;
}

@media (max-width: 768px) {
		.carousel-item{
			margin-top: 20%;
			height: 50% !important;
			width: 200% !important;; /* Cambias el margen inferior a 2px */
		}
		.carousel-caption{
			font-size: 20%;
			text-align: center;
		}
	}


.carousel-caption{
	text-align: start;
	width: 30%;
}



</style>

<template>
	<!-- Footer -->
	<footer class="footer text-center text-white">
		<!-- Grid container -->
		<div class="container p-4">
			<!-- Section: Social media -->
			<section class="mb-4">
				<!-- Facebook -->
				<a
					class="btn btn-primary btn-floating m-1"
					style="background-color: #3b5998"
					href="https://www.facebook.com/CASCOMPOSITE"
					role="button"
					><i class="fab fa-facebook-f"></i
				></a>

				<!-- Twitter -->
				<!-- 				<a
					class="btn btn-primary btn-floating m-1"
					style="background-color: #55acee"
					href="#!"
					role="button"
					><i class="fab fa-twitter"></i
				></a> -->

				<!-- Google -->
				<!-- 				<a
					class="btn btn-primary btn-floating m-1"
					style="background-color: #dd4b39"
					href="#!"
					role="button"
					><i class="fab fa-google"></i
				></a> -->

				<!-- Instagram -->
				<a
					class="btn btn-primary btn-floating m-1"
					style="background-color: #ac2bac"
					href="https://www.instagram.com/cascomposite/"
					role="button"
					><i class="fab fa-instagram"></i
				></a>

				<!-- Linkedin -->
				<a
					class="btn btn-primary btn-floating m-1"
					style="background-color: #0082ca"
					href="https://www.linkedin.com/company/composite-aeronautic-specialists-llc/"
					role="button"
					><i class="fab fa-linkedin-in"></i
				></a>
				<!-- Github -->
				<!-- 			<a
					class="btn btn-primary btn-floating m-1"
					style="background-color: #333333"
					href="#!"
					role="button"
					><i class="fab fa-github"></i
				></a> -->
			</section>
			<!-- Section: Social media -->

			<!-- Section: Text -->
			<section class="mb-4">
				<div class="text">
					<p>FAA 5C0R216D EASA.145.6841 C.A.S.E. MEMBER D54</p>
				</div>
			</section>
			<section class="mb-4">
				<div class="text">
					<p>9010 NW 105th Way Medley, Florida. Zip Code: 33178 United States</p>
				</div>
			</section>
			<section class="mb-4">
				<div class="text">
					<p>+1 (786) 204 3760</p>
					<p>
						SALES@CASCOMPOSITE.COM
					</p>
				</div>
			</section>
			<!-- Section: Text -->
		</div>
		<!-- Grid container -->

		<!-- Copyright -->
		<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
			© Composite Aeronautic Specialist
		</div>
		<!-- Copyright -->
	</footer>
	<!-- Footer -->
</template>

<script>
export default {
	name: "FooterComponent",
};
</script>

<style scoped>
.logoCas img {
	width: 10vw;
}

.footer {
	background-image: url("../assets/Footer.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	bottom: 0;
}
</style>

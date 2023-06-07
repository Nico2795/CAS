<template>
	<section
		data-bs-version="5.1"
		class="header1 cid-s48MCQYojq mbr-fullscreen mbr-parallax-background"
		id="header1-f"
	>
  <div class="jarallax">

		<div class="align-center container mb-3">
			<div class="row justify-content-center">
				<div class="col-12 col-lg-8">
					<h1 class="mbr-section-title mbr-fonts-style mb-3 ">
						Welcome to Composite Aeronatic Specialists LLC
					</h1>

					<p class="mbr-text mbr-fonts-style display-7"></p>
					<div class="mbr-section-btn mt-3">
						<a class="btn btn-primary display-4 mb-4" href="/about"
							>Know About Us</a
						>
					</div>
				</div>
			</div>
		</div>
  </div>
	</section>
</template>

<script>
import jarallax from "jarallax";

export default {
  mounted() {
    jarallax(document.querySelectorAll(".jarallax"));
  },
};
</script>

<style scoped>

.container{
    font-family: 'Jost', sans-serif;
  /* font-size: 4.6rem; */
  line-height: 1.1;
  text-align: center;
  align-content: center;
}



h1, h2, h3, h4, h5, h6{
  line-height: 1;
  word-break: break-word;
  word-wrap: break-word;
  font-weight: 400;
  font-family: 'Jost', sans-serif;
  font-size: 4.6vw;
  line-height: 1.1;
  justify-content: center;
  margin-top: 0;
  color: #fafafa;
}

section{
width: 100vw;
height: 100vh;
overflow: hidden;
z-index: -100;
justify-content: center;
display: grid;
place-items: center;
background-image: url(../assets/casBackground.jpg);
background-repeat: none;
background-size: cover;
background-attachment: fixed;
}
.btn-primary, .btn-primary:active {
  background-color: #516fa4 !important;
  border-color: #516fa4 !important;
  color: #ffffff !important;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);

  
}
.jarallax {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    justify-content: center;
    display: grid;
    place-items: center;
  }

  .jarallax > .container {
    position: relative;
    z-index: 1;
  }

  .jarallax:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/casBackground.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;
  }


.btn {
  font-weight: 600;
  border-width: 1px;
  font-style: normal;
  margin: 0.6rem 0.6rem;
  white-space: normal;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  word-break: break-word;
  padding: 1rem;
  border-radius: 4px;
}
</style>

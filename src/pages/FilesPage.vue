<template>
  <NavBarVue></NavBarVue>
	<section class="container my-5">
		<h2 class="text-center mb-4">Certificates</h2>
		<div class="row">
			<div class="col-md-4 mb-4">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">PDF 1</h5>
						<a href="/ruta/pdf1.pdf" download class="btn btn-primary">Descargar</a>
					</div>
				</div>
			</div>
			<div class="col-md-4 mb-4">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">PDF 2</h5>
						<a href="/ruta/pdf2.pdf" download class="btn btn-primary">Descargar</a>
					</div>
				</div>
			</div>
			<div class="col-md-4 mb-4">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">PDF 3</h5>
						<a href="/ruta/pdf3.pdf" download class="btn btn-primary">Descargar</a>
					</div>
				</div>
			</div>
		</div>
	</section>
  <FooterComponent></FooterComponent>
</template>

<script>
import NavBarVue from '@/components/NavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
	name: "FilesPage",
  components: {NavBarVue, FooterComponent}
};
</script>

<style scoped>
section{
  height: 100vh;
  margin-top: 100px !important;
}
</style>

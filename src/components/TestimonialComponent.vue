<template>
  <!-- Carousel wrapper -->
  <div id="solutions">
    <div id="carouselExampleControls" class="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
    <div><h1>Solutions</h1></div>
    <br>
    <br>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="rounded-circle shadow-1-strong mb-4"
        src="../assets/SolutionsAssets/maintance.jpg" alt="avatar"
        style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover;" />
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">Maintenance Repair & Overhaul</h5>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="rounded-circle shadow-1-strong mb-4"
        src="../assets/SolutionsAssets/time.jpg" alt="avatar"
        style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover;" />
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">On-Time Deliveries</h5>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="rounded-circle shadow-1-strong mb-4"
        src="../assets/SolutionsAssets/exchange.jpg" alt="avatar"
        style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover;" />
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">Component Exchange, Leasing and Repair Management</h5>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="rounded-circle shadow-1-strong mb-4"
        src="../assets/SolutionsAssets/spare.jpg" alt="avatar"
        style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover;" />
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">Spare Parts and Component Procurement</h5>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="rounded-circle shadow-1-strong mb-4"
        src="../assets/SolutionsAssets/guaranteed.jpg"
        style="width: 200px; height: 200px; object-fit: cover; border-radius: 50%;" />
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">Guaranteed Service and Product Quality</h5>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="rounded-circle shadow-1-strong mb-4"
        src="../assets/SolutionsAssets/monitored.jpg" alt="avatar"
        style="width: 200px; height: 200px;
        object-fit: cover; border-radius: 50%;" />
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">Monitored and Expedited Shipments</h5>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
    data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
    data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>

<!-- Carousel wrapper -->
</template>

<script>
export default {
name:"TestimonialComponent"
}
</script>

<style>
#carouselExampleControls{
  margin-top: 5rem;
}

@media screen and (min-width:768px) and (max-width:1023px){
  #carouselExampleControls{

  }
}
</style>
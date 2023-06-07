<template>
  <!-- Gallery -->
  <h1 id="solutions" ref="solutionSection">Solutions</h1>
  <br>
  <div class="row">
    <div class="col-lg-2 col-md-12 mb-2 mb-lg-0">
      <img src="../assets/maintance.jpg"
        class="w-100 shadow-1-strong rounded mx-auto mb-2" alt="Boat on Calm Water" />
        <p>Maintenance Repair & Overhaul</p>

      <img src="../assets/delivery.jpg"
        class="w-100 shadow-1-strong rounded mb-2" alt="Wintry Mountain Landscape" />
        <p>On-Time Deliveries</p>
    </div>

    <div class="col-lg-2 mb-2 mb-lg-0">
      <img src="../assets/ProductQuality.jpg"
        class="w-100 shadow-1-strong rounded mb-2" alt="Mountains in the Clouds" />
        <p>Guaranteed Product Quality</p>

      <img src="../assets/SolutionsAssets/Parts.jpg"
        class="w-100 shadow-1-strong rounded mb-2" alt="Boat on Calm Water" />
        <p>Component Exchange, Leasing and Repair Management</p>
    </div>

    <div class="col-lg-2 mb-2 mb-lg-0">
      <img src="../assets/SolutionsAssets/Parts2.jpg"
        class="w-100 shadow-1-strong rounded mb-2" alt="Waves at Sea" />
        <p>Spare Parts and Component Procurement</p>

      <img src="../assets/SolutionsAssets/Delivery.jpg"
        class="w-100 shadow-1-strong rounded mb-2" alt="Yosemite National Park" />
        <p>Just-In-Time Delivery Programs</p>
    </div>
    <div class="col-lg-2 mb-2 mb-lg-0">
      <img src="../assets/SolutionsAssets/Quality.jpg"
        class="w-100 shadow-1-strong rounded mb-2" alt="Waves at Sea" />
        <p>Guaranteed Service Quality</p>

      <img src="../assets/SolutionsAssets/Delivery2.jpg"
        class="w-100 shadow-1-strong rounded mb-2" alt="Yosemite National Park" />
        <p>Monitored and Expedited Shipments</p>
    </div>
  </div>
  <!-- Gallery -->
</template>

<script>
export default {
  name:"SolutionComponent",

}
</script>

<style scoped>
.row img{
  height: 30vh;

}

.row{
  width: 90%;
  justify-content: center;
  margin: auto;
}
</style>
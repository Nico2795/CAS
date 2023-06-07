<template>
  <div class="container">
    <div class="products" id="products">
      <h1>Some of our products</h1>
    </div>

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(image, index) in images" :key="index" :class="['carousel-item', index === 0 ? 'active' : '']">
          <img :src="image" class="d-block w-100" alt="Carousel Image" />
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderComponent',
  data() {
    return {
      images: [
        'https://i.pinimg.com/564x/e3/54/84/e354848c24d963cf8dbfae4117da6d4f.jpg',
        'https://via.placeholder.com/500x500?text=Image+2',
        'https://via.placeholder.com/500x500?text=Image+3',
        'https://via.placeholder.com/500x500?text=Image+4',
      ],
    }
  },
}
</script>

<style>
.carousel-item img {
  height: 100vh;
}

.products {
  text-align: center;
}
</style>

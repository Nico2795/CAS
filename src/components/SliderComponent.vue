<template>
    <div class="products" id="products">
        <h1>Some of our products</h1>

    </div>
    <Carousel>
      <Slide v-for="(image,index) in images" :key="index">
        <img :src="image" class="carousel__item" />
      </Slide>
  
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  
  import '../../node_modules/vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'SliderComponent',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data() {
      return {
        images: [
          'https://i.pinimg.com/564x/e3/54/84/e354848c24d963cf8dbfae4117da6d4f.jpg',
          'https://via.placeholder.com/500x500?text=Image+2',
          'https://via.placeholder.com/500x500?text=Image+3',
          'https://via.placeholder.com/500x500?text=Image+4',
        ]
      }
    },
  })
  </script>
  
  <style>
  .carousel__item {
    height: 100vh;
    width: 70%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 10px;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
  .products{
    text-align: center;
  }
  </style>
  
<template>
    <div class="py-3">
        <div class='container' >
            <VueSlickCarousel v-bind="settings">
      <div><b-img src="../assets/banner.jpg" fluid /></div>
            <div><b-img src="../assets/banner.jpg" fluid /></div>
      <div><b-img src="../assets/banner.jpg" fluid /></div>
      <div><b-img src="../assets/banner.jpg" fluid /></div>
      </VueSlickCarousel>
        </div> 
    </div>
</template>
<script>

import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'HeroCarousel',
    components: {VueSlickCarousel},
    data() {
        return {
            settings: {
                arrows: true,
  "dotsClass": "slick-dots custom-dot-class",
  "edgeFriction": 0.35,
  "infinite": true,
  "autoplay": true,
  "speed": 2000,
  "autoplaySpeed": 2000,
  "cssEase": "linear",
  "slidesToShow": 1,
  "slidesToScroll": 1
}
        }
    },
}
</script>
<style>
    
</style>
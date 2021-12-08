<template>
    <div class="pb-4 m-0">
        <div >
            <VueSlickCarousel v-bind="settings">
                <b-img src="../assets/banner.jpg" fluid alt="Responsive image" ></b-img>
                <b-img src="../assets/banner.jpg" fluid alt="Responsive image" ></b-img>
                <b-img src="../assets/banner.jpg" fluid alt="Responsive image" ></b-img>
                <b-img src="../assets/banner.jpg" fluid alt="Responsive image" ></b-img>
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
                dots: true,
                arrows: false,
  "dotsClass": "slick-dots custom-dot-class",
  "edgeFriction": 0.35,
  "infinite": true,
  "autoplay": false,
  "speed": 500,
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
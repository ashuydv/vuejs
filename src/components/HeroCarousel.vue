<template>
  <div class="py-3">
    <b-container class="mx-auto">
      <VueSlickCarousel v-bind="settings">
        <b-col class="px-0" ><b-img src="../assets/banner.jpg" fluid /></b-col>
        <b-col class="px-0" ><b-img src="../assets/banner.jpg" fluid /></b-col>
        <b-col class="px-0" ><b-img src="../assets/banner.jpg" fluid /></b-col>
        <b-col class="px-0" ><b-img src="../assets/banner.jpg" fluid /></b-col>
      </VueSlickCarousel>
    </b-container>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "HeroCarousel",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
};
</script>
<style></style>

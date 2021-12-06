<template>
    <div class="py-4">
        <div class="container">
                            <h2 class="pb-2">Top Brands</h2>
            <b-container class="text-center px-0">
                <b-row>
                    <VueSlickCarousel v-bind="settings">
                        <b-col class="relative">
                              <b-img v-bind="mainProps" class="border" src="../assets/NewU-Logo.jpg" fluid alt="Responsive image"></b-img>
                        </b-col><b-col class="relative">
                              <b-img v-bind="mainProps" class="border" src="../assets/Badahair-Products.png" fluid alt="Responsive image"></b-img>
                        </b-col><b-col class="relative">
                              <b-img v-bind="mainProps" class="border" src="../assets/NewU-Logo.jpg" fluid alt="Responsive image"></b-img>
                        </b-col><b-col class="relative">
                              <b-img v-bind="mainProps" class="border" src="../assets/Badahair-Products.png" fluid alt="Responsive image"></b-img>
                        </b-col>
                        <b-col class="relative">
                              <b-img v-bind="mainProps" class="border" src="../assets/Badahair-Products.png" fluid alt="Responsive image"></b-img>
                        </b-col>
                        <b-col class="relative">
                              <b-img v-bind="mainProps" class="border" src="../assets/Badahair-Products.png" fluid alt="Responsive image"></b-img>
                        </b-col>
                    </VueSlickCarousel>
                </b-row>
            </b-container>
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
            mainProps: {width: 500, height: 250},
            settings: {
                "arrows": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": true,
                "autoplay": false,
                "speed": 500,
                "cssEase": "linear",
                "slidesToShow": 4,
                "slidesToScroll": 1
            }
        }
    },
}
</script>
<style>
    .relative {
        position:relative;
    }
    .absolute {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        left: 0;
        justify-content: center;
    }
    .border {
        border: 2px solid purple !important;
    }
</style>
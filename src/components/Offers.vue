<template>
    <div class="py-4 offers">
        <div class="container">
                            <h2 class="pb-2">OFFERS</h2>
            <b-container class="text-center px-0">
                <b-row>
                    <VueSlickCarousel v-bind="settings">
                        <b-col class="relative">
                              <b-img class="b-img" src="../assets/shirt.jpg" fluid alt="Responsive image"></b-img>
                              <div class="absolute">
                                <p class="mb-2 desc" >shirts</p>
                                <b-button size="lg" rounded="top" class="offer-btn" >UPTO 40% OFF</b-button>
                              </div>
                        </b-col>
                        <b-col class="relative">
                              <b-img class="b-img" src="../assets/shirt.jpg" fluid alt="Responsive image"></b-img>
                              <div class="absolute">
                                <p class="mb-2 desc" >shirts</p>
                                <b-button size="lg" rounded="top" class="offer-btn" >UPTO 40% OFF</b-button>
                              </div>
                        </b-col><b-col class="relative">
                              <b-img class="b-img" src="../assets/shirt.jpg" fluid alt="Responsive image"></b-img>
                              <div class="absolute">
                                <p class="mb-2 desc" >shirts</p>
                                <b-button size="lg" rounded="top" class="offer-btn" >UPTO 40% OFF</b-button>
                              </div>
                        </b-col><b-col class="relative">
                              <b-img class="b-img" src="../assets/shirt.jpg" fluid alt="Responsive image"></b-img>
                              <div class="absolute">
                                <p class="mb-2 desc" >shirts</p>
                                <b-button size="lg" rounded="top" class="offer-btn" >UPTO 40% OFF</b-button>
                              </div>
                        </b-col><b-col class="relative">
                              <b-img class="b-img" src="../assets/shirt.jpg" fluid alt="Responsive image"></b-img>
                              <div class="absolute">
                                <p class="mb-2 desc" >shirts</p>
                                <b-button size="lg" rounded="top" class="offer-btn" >UPTO 40% OFF</b-button>
                              </div>
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
        overflow: hidden;
    }
    .offer-btn {
        background: white;
        border-radius: 0 !important;
        border-radius: 1rem 1rem 0rem 0rem !important;
        border-bottom-color: transparent !important;
        box-shadow: 0px 3px 55px rgba(0,0,0,0.5);
    }
    .desc  {
        color: white;
        z-index: 0;
    }
</style>
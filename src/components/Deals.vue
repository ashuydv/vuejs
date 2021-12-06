<template>
    <div class="deals-container">
        <div class="container">
            <div class="deals">
                <h2>DEALS OF THE DAY</h2>
                <b-container>
                <b-row>
                <VueSlickCarousel v-bind="settings">
                    <b-col class="d-flex align-items-center flex-column"> 
                        <b-card class="p-0">
                            <div><b-img class="p-3" src="../assets/eyeshadow-GlamUP.png" fluid /></div>
                            <b-card-title>Jacqueline USA</b-card-title>
                            <p class="mb-1">Eyeshadow Palette</p>
                            <p>4,600 <span class="small">MRP: 5,750</span></p>
                            <b-button block class="btn">ADD TO BAG</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="d-flex align-items-center flex-column"> 
                        <b-card class="p-0">
                            <div><b-img fluid class="p-3" src="../assets/30064537.jpg" /></div>
                            <b-card-title>Jacqueline USA</b-card-title>
                            <p class="mb-1">Eyeshadow Palette</p>
                            <p>4,600 <span class="small">MRP: 5,750</span></p>
                            <b-button block class="btn">ADD TO BAG</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="d-flex align-items-center flex-column"> 
                        <b-card class="p-0">
                            <div><b-img fluid class="p-3" src="../assets/download.jpg" /></div>
                            <b-card-title>Jacqueline USA</b-card-title>
                            <p class="mb-1">Eyeshadow Palette</p>
                            <p>4,600 <span class="small">MRP: 5,750</span></p>
                            <b-button block class="btn">ADD TO BAG</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="d-flex align-items-center flex-column"> 
                        <b-card class="p-0">
                            <div><b-img fluid class="p-3" src="../assets/KKT2671.jpg" /></div>
                            <b-card-title>Jacqueline USA</b-card-title>
                            <p class="mb-1">Eyeshadow Palette</p>
                            <p>4,600 <span class="small">MRP: 5,750</span></p>
                                                        <b-button block class="btn">ADD TO BAG</b-button>
                        </b-card>
                    </b-col>
                                 <b-col class="d-flex align-items-center flex-column"> 
                        <b-card>
                            <div><b-img fluid class="p-3" src="https://dummyimage.com/180x180/000/fff" /></div>
                            <b-card-title>Jacqueline USA</b-card-title>
                            <p class="mb-1">Eyeshadow Palette</p>
                            <p>4,600 <span class="small">MRP: 5,750</span></p>
                                                        <b-button block class="btn">ADD TO BAG</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="d-flex align-items-center flex-column"> 
                        <b-card>
                            <div><b-img fluid class="p-3" src="https://dummyimage.com/180x180/000/fff" /></div>
                            <b-card-title>Jacqueline USA</b-card-title>
                            <p class="mb-1">Eyeshadow Palette</p>
                            <p>4,600 <span class="small">MRP: 5,750</span></p>
                                                        <b-button block class="btn">ADD TO BAG</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="d-flex align-items-center flex-column"> 
                        <b-card>
                            <div><b-img fluid class="p-3" src="https://dummyimage.com/180x180/000/fff" /></div>
                            <b-card-title>Jacqueline USA</b-card-title>
                            <p class="mb-1">Eyeshadow Palette</p>
                            <p>4,600 <span class="small">MRP: 5,750</span></p>
                                       <b-button block class="btn">ADD TO BAG</b-button>
                        </b-card>
                    </b-col>
                    </VueSlickCarousel>
                    </b-row>
                    </b-container>
            </div>
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
                "autoplay": true,
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
    .deals-container {
        background: #fff;
        border: 20px solid #fff;
        margin: 10px auto;
        max-width: 1200px;
    }
    .btn {
        border: 1px solid #7954A1 !important;
        color: #7954A1 !important;
        background: transparent;
        text-align: center;
    }
    .btn:hover, .btn:focus {
        background:#7954A1 !important;
        color: white !important;
        text-align: center !important;
        font-weight: normal !important;
        border: 1px solid transparent!important;
    }
</style>
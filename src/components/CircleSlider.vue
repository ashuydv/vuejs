<template>
    <div class="py-3">
        <div class='container' >
            <h2 class="py-3">CATEGORIES</h2>
            <b-container>
            <b-row>
                            <VueSlickCarousel v-bind="settings">
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/shirt.jpg" fluid /> <h3>T-Shirts</h3> </b-col>
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/shoes.jpg" fluid /> <h3>T-Shirts</h3> </b-col>  
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/menShoes.png" fluid /> <h3>T-Shirts</h3> </b-col>     
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/shoes.jpg" fluid /> <h3>T-Shirts</h3> </b-col> 
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/shoes.jpg" fluid /> <h3>T-Shirts</h3> </b-col>     
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/shoes.jpg" fluid /> <h3>T-Shirts</h3> </b-col>
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/shoes.jpg" fluid /> <h3>T-Shirts</h3> </b-col> 
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/shoes.jpg" fluid /> <h3>T-Shirts</h3> </b-col>     
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/shoes.jpg" fluid /> <h3>T-Shirts</h3> </b-col>
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/shoes.jpg" fluid /> <h3>T-Shirts</h3> </b-col>
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/shoes.jpg" fluid /> <h3>T-Shirts</h3> </b-col> 
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/shoes.jpg" fluid /> <h3>T-Shirts</h3> </b-col>     
                <b-col class="d-flex align-items-center flex-column"><b-img v-bind="mainProps" class=" circle border border-purple rounded-circle" src="../assets/shoes.jpg" fluid /> <h3>T-Shirts</h3> </b-col>
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
            mainProps: {width: 150, height: 100, class: 'm1', center: true,},
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
    .border-purple {
        border: 2px solid purple  !important;
    }
</style>
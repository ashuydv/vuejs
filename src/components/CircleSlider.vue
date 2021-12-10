<template>
    <div class="py-3 categories">
        <div class='container' >
            <h2 class="py-4">CATEGORIES</h2>
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
            mainProps: { class: 'm1', center: true,},
            settings: {
                "arrows": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": true,
                "autoplay": true,
                "speed": 500,
                "cssEase": "linear",
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]
            }
        }
    },
}
</script>
<style>
</style>
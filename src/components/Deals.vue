<template>
  <div class="deals-container">
    <div class="container">
      <div class="deals">
        <h2>DEALS OF THE DAY</h2>
        <b-container>
          <b-row>
            <VueSlickCarousel v-bind="settings">
              <b-col class="d-flex align-items-center flex-column ">
                <b-card class="p-0 border border-secondary">
                  <font-awesome-icon
                    :icon="['far', 'heart']"
                    class="icons-heart"
                    style="font-size: 12px, margin-left: 10rem; "
                  />
                  <div>
                    <b-img
                      class="p-4"
                      src="../assets/eyeshadow-GlamUP.png"
                      fluid
                    />
                  </div>
                  <b-card-title>Jacqueline USA</b-card-title>
                  <p class="mb-1">Eyeshadow Palette</p>
                  <p class="mb-4">
                    &#8377; 4,600 <span class="small">MRP: &#8377; 5,750</span>
                  </p>
                  <b-button block variant="border border-secondary">ADD TO BAG</b-button>
                </b-card>
              </b-col>
              <b-col class="d-flex align-items-center flex-column ">
                <b-card class="p-0 border border-secondary">
                  <font-awesome-icon
                    :icon="['far', 'heart']"
                    class="icons-heart"
                    style="font-size: 12px, margin-left: 10rem; "
                  />
                  <div>
                    <b-img fluid class="p-4" src="../assets/30064537.jpg" />
                  </div>
                  <b-card-title>Jacqueline USA</b-card-title>
                  <p class="mb-1">Eyeshadow Palette</p>
                  <p class="mb-4">
                    &#8377; 4,600 <span class="small">MRP: &#8377; 5,750</span>
                  </p>
                  <b-button block variant="border border-secondary">ADD TO BAG</b-button>
                </b-card>
              </b-col>
              <b-col class="d-flex align-items-center flex-column ">
                <b-card class="p-0 border border-secondary">
                  <font-awesome-icon
                    :icon="['far', 'heart']"
                    class="icons-heart"
                    style="font-size: 12px, margin-left: 10rem; "
                  />
                  <div>
                    <b-img fluid class="p-4" src="../assets/download.jpg" />
                  </div>
                  <b-card-title>Jacqueline USA</b-card-title>
                  <p class="mb-1">Eyeshadow Palette</p>
                  <p class="mb-4">
                    &#8377; 4,600 <span class="small">MRP: &#8377; 5,750</span>
                  </p>
                  <b-button block variant="border border-secondary">ADD TO BAG</b-button>
                </b-card>
              </b-col>
              <b-col class="d-flex align-items-center flex-column ">
                <b-card class="p-0 border border-secondary">
                  <font-awesome-icon
                    :icon="['far', 'heart']"
                    class="icons-heart"
                    style="font-size: 12px, margin-left: 10rem; "
                  />
                  <div>
                    <b-img fluid class="p-4" src="../assets/KKT2671.jpg" />
                  </div>
                  <b-card-title>Jacqueline USA</b-card-title>
                  <p class="mb-1">Eyeshadow Palette</p>
                  <p class="mb-4">
                    &#8377; 4,600 <span class="small">MRP: &#8377; 5,750</span>
                  </p>
                  <b-button block variant="border border-secondary">ADD TO BAG</b-button>
                </b-card>
              </b-col>
              <b-col class="d-flex align-items-center flex-column ">
                <b-card class="border border-default">
                  <font-awesome-icon
                    :icon="['far', 'heart']"
                    class="icons-heart"
                    style="font-size: 12px, margin-left: 10rem; "
                  />
                  <div>
                    <b-img
                      fluid
                      class="p-4"
                      src="https://dummyimage.com/180x180/000/fff"
                    />
                  </div>
                  <b-card-title>Jacqueline USA</b-card-title>
                  <p class="mb-1">Eyeshadow Palette</p>
                  <p class="mb-4">
                    &#8377; 4,600 <span class="small">MRP: &#8377; 5,750</span>
                  </p>
                  <b-button block variant="border border-secondary">ADD TO BAG</b-button>
                </b-card>
              </b-col>
              <b-col class="d-flex align-items-center flex-column ">
                <b-card class="border border-default">
                  <font-awesome-icon
                    :icon="['far', 'heart']"
                    class="icons-heart"
                    style="font-size: 12px, margin-left: 10rem; "
                  />
                  <div>
                    <b-img
                      fluid
                      class="p-4"
                      src="https://dummyimage.com/180x180/000/fff"
                    />
                  </div>
                  <b-card-title>Jacqueline USA</b-card-title>
                  <p class="mb-1">Eyeshadow Palette</p>
                  <p class="mb-4">
                    &#8377; 4,600 <span class="small">MRP: &#8377; 5,750</span>
                  </p>
                  <b-button block variant="border border-secondary">ADD TO BAG</b-button>
                </b-card>
              </b-col>
              <b-col class="d-flex align-items-center flex-column ">
                <b-card class="border border-default">
                  <font-awesome-icon
                    :icon="['far', 'heart']"
                    class="icons-heart"
                    style="font-size: 12px, margin-left: 10rem; "
                  />
                  <div>
                    <b-img
                      fluid
                      class="p-4"
                      src="https://dummyimage.com/180x180/000/fff"
                    />
                  </div>
                  <b-card-title>Jacqueline USA</b-card-title>
                  <p class="mb-1">Eyeshadow Palette</p>
                  <p class="mb-4">
                    &#8377; 4,600 <span class="small">MRP: &#8377; 5,750</span>
                  </p>
                  <b-button block variant="border border-secondary">ADD TO BAG</b-button>
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
        speed: 500,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
<style>
@import url('../style.scss');
</style>

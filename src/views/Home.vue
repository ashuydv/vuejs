<template>
  <div class="home">
    <Topbar/>
    <Navbar/>
    <HeroCarousel/>
    <Banner/>
    <CircleSlider/>
    <Deals/>
    <Offers/>
    <TopBrands/>
    <Clients/>
    <Footer/>
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue"
import Navbar from "../components/Navbar.vue"
import HeroCarousel from "../components/HeroCarousel.vue"
import Banner from "../components/Banner.vue"
import CircleSlider from "../components/CircleSlider.vue"
import Deals from "../components/Deals.vue"
import Offers from "../components/Offers.vue"
import TopBrands from "../components/TopBrands.vue"
import Clients from "../components/Clients.vue"
import Footer from "../components/Footer.vue"


export default {
  name: "Home",
  components: {
    Topbar,
    Navbar,
    HeroCarousel,
    Banner,
    CircleSlider,
    Deals,
    Offers,
    TopBrands,
    Clients,
    Footer
  },
};
</script>

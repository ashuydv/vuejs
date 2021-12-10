<template>
    <div>
        <Topbar/>
        <Navbar/>
        <Products/>
        <Footer/>    
    </div>
</template>
<script>
import Topbar from "../components/Topbar.vue"
import Navbar from "../components/Navbar.vue"
import Products from "../components/Products.vue"
import Footer from "../components/Footer.vue"

export default {
    name: "Offers",
    components: {
        Topbar,
        Navbar,
        Products,
        Footer
    },
}
</script>
<style>
    
</style>
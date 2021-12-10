<template>
    <div>
        <Topbar/>
        <Navbar/>
        <OffersPage/>
        <Footer/>
    </div>
</template>
<script>
import Topbar from "../components/Topbar.vue"
import Navbar from "../components/Navbar.vue"
import OffersPage from "../components/OffersPage.vue"
import Footer from "../components/Footer.vue"

export default {
    name: "Offers",
    components: {
        Topbar,
        Navbar,
        OffersPage,
        Footer
    },
}
</script>
<style>
    
</style>
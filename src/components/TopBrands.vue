<template>
    <div>
        <div class="container" >
            <h2>Top Brands</h2>
            <b-container>
                <b-row>
                    <b-col cols="6" >
                        <b-img src="https://www.alluraa.com/media/brands/cl2.jpg" fluid alt="Responsive image" ></b-img>
                    </b-col>
                    <b-col cols="6">
                        <b-row class="m-0">
                            <SmallCarousel/>
                        </b-row>
                        <b-row class="m-0 p-0">
                        <b-img src="../assets/myra-veda.png" fluid alt="Responsive image" ></b-img>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
<script>
    import SmallCarousel from './SmallCarousel.vue'

    export default {
        name: 'HeroCarousel',
        components: {SmallCarousel},
    }
</script>
<style>
    
</style>
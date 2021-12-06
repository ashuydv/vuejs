<template>
    <div>
        <div class="container" >
            <h2>Top Brands</h2>
            <b-container>
                <b-row>
                    <b-col cols="6" >
                        <b-img src="https://dummyimage.com/600x400/" fluid alt="Responsive image" ></b-img>
                    </b-col>
                    <b-col cols="6">
                        <b-row class="m-0">
                            <SmallCarousel/>
                        </b-row>
                        <b-row class="m-0 p-0">
                        <b-img src="https://dummyimage.com/600x190/" fluid alt="Responsive image" ></b-img>
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
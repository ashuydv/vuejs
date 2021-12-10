<template>
  <div>
    <div class="container">
      <b-container class="my-2 px-0 text-center">
        <b-row class="my-2">
          <b-col class="pr-0">
            <b-img src="https://dummyimage.com/600x400/000/fff" fluid></b-img>
          </b-col>
          <b-col class="px-2">
            <b-rol>
              <b-img
                class="mb-0"
                src="https://dummyimage.com/600x200/000/fff"
                fluid-grow
              ></b-img>
            </b-rol>
            <b-rol>
              <b-img
                class="mt-2"
                src="https://dummyimage.com/600x195/000/fff"
                fluid-grow
              ></b-img>
            </b-rol>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="pr-0">
            <b-rol>
              <b-img
                class="mb-0"
                src="https://dummyimage.com/600x200/000/fff"
                fluid-grow
              ></b-img>
            </b-rol>
            <b-rol>
              <b-img
                class="mt-2"
                src="https://dummyimage.com/600x195/000/fff"
                fluid-grow
              ></b-img>
            </b-rol>
          </b-col>
          <b-col class="px-2">
            <b-img src="https://dummyimage.com/600x400/000/fff" fluid></b-img>
          </b-col>
        </b-row>
        <b-row class="my-2">
          <b-col class="pr-0">
            <b-img src="https://dummyimage.com/600x400/000/fff" fluid></b-img>
          </b-col>
          <b-col class="px-2">
            <b-img src="https://dummyimage.com/600x400/000/fff" fluid></b-img>
          </b-col>
        </b-row>
      </b-container>
      <Offers/>
      <Offers/>
      <Clients/>
    </div>
  </div>
</template>
<script>
import Offers from './Offers.vue'
import Clients from './Clients.vue'

export default {
    name: "OffersPage",
    components: {
        Offers,
        Clients
    },
};
</script>
<style></style>

<template>
  <div class="products">
    <div class="container">
      <b-container>
        <b-row>
          <b-col class="px-0 my-3">
            <b-img src="../assets/Jaquline-Brand-Banner.jpg" fluid></b-img>
          </b-col>
        </b-row>
      </b-container>
      <b-breadcrumb :items="items" class="p-0 bg-transparent"></b-breadcrumb>
      <b-text class="d-flex align-items-center justify-content-between items">
        <span>Lipstick</span>
        <span>3256 items</span>
      </b-text>
      <b-container class="px-0 mt-2 py-2 pb-3 filter">
        <b-row class="d-flex align-items-center justify-content-between">
          <b-col>
            <b-text>FILTERS</b-text>
          </b-col>
          <b-col>
            <div
              class="d-flex align-items-center justify-content-between custom-select"
            >
              Sort:
              <b-form-select
                class="forms"
                v-model="selected"
                :options="options"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="px-0 mt-0">
        <b-row>
          <b-col cols="3" class="border-right py-2">
            <Accordion />
          </b-col>
          <b-col cols="9">
            <div class="products-container">
               <Pagination/>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import Accordion from "./Accordion.vue";
import Pagination from "./Pagination.vue"
export default {
  components: { Accordion, Pagination },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select some item" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Default Selected Option" },
        { value: "c", text: "This is another option" },
      ],
      items: [
        {
          text: "Home",
          href: "#",
        },
        {
          text: "Personal Care",
          href: "#",
        },
        {
          text: "Lipstick",
          active: true,
        },
      ],
    };
  },
};
</script>
<style>
.products {
  font-weight: bold;
}
.products a {
  color: #6c757d !important;
}
.products .breadcrumb-item {
  color: #111 !important;
}
.products .items {
  width: 16%;
}
.filter {
  border-bottom: 1px solid purple;
}
.custom-select {
  background: white !important;
  border: none;
  outline: none !important;
  padding-right: 0.375rem;
}
.forms.custom-select {
  background: #fff
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")
    right 0.75rem center/8px 10px no-repeat !important;
  border: none;
  outline: none !important;
}
.forms.custom-select:focus,
.forms.custom-select:hover {
  outline: none !important;
  box-shadow: none;
}
.border-right {
  border-right: 1px solid currentColor !important;
  height: auto;
  margin-bottom: 7rem;
}
.products-container {
  background: transparent;
  border: none;
}
.products-container .b-card {
    background: white !important;
}
.products-container .card {
  border: 1px solid purple !important;
}

.products-container .btnss {
  border: 1px solid #7954a1 !important;
  color: #7954a1 !important;
  background: transparent;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  border-radius: 0px !important;
}
.products-container .btnss:hover,
.products-container .btnss:focus {
  background: #7954a1 !important;
  color: white !important;
  text-align: center !important;
  font-weight: normal !important;
  border: 1px solid transparent !important;
  border-radius: 0px !important;
}
.small {
  text-decoration: line-through;
}
.products-container .icons-heart {
  position: absolute;
  right: 5%;
  top: 3%;
}
</style>

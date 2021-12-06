<template>
    <div class="navbar-container" >
        <div class="container px-0">
  <b-navbar toggleable="lg" type="dark" variant="transparent">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Women's Fashion</b-nav-item>
        <b-nav-item href="#">Men's Fashion</b-nav-item>
        <b-nav-item href="#">Makeup</b-nav-item>
        <b-nav-item href="#">Skin Care</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
    <b-button v-b-toggle.sidebar-backdrop class="mr-2 text-white"><font-awesome-icon icon="bars" /></b-button>
    <b-sidebar
      id="sidebar-backdrop"
      title="Hello, Sigin"
      :backdrop-variant="dark"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
      <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 class="accordion-btn" >Trending</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Best Sellers</b-card-text>
          <b-card-text>Newly Launched</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 class="accordion-btn" >Shop by category</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Women's Fashion</b-card-text>
          <b-card-text>Women's Clothing</b-card-text>
          <b-card-text>Accesories</b-card-text>
          <b-card-text>Women's Shoes</b-card-text>
          <b-card-text>Indian Wear</b-card-text>
          <b-card-text>Western Wear</b-card-text>
          <b-card-text>Ethnic Wear</b-card-text>
          <b-card-text>Unstitched Fabric</b-card-text>
          <b-card-text>Jewellery</b-card-text>
          <b-card-text>Jewellery</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 class="accordion-btn" >Men's Fashion</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Women's Fashion</b-card-text>
          <b-card-text>Women's Clothing</b-card-text>
          <b-card-text>Accesories</b-card-text>
          <b-card-text>Women's Shoes</b-card-text>
          <b-card-text>Indian Wear</b-card-text>
          <b-card-text>Western Wear</b-card-text>
          <b-card-text>Ethnic Wear</b-card-text>
          <b-card-text>Unstitched Fabric</b-card-text>
          <b-card-text>Jewellery</b-card-text>
          <b-card-text>Jewellery</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 class="accordion-btn" >Makeup</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Women's Fashion</b-card-text>
          <b-card-text>Women's Clothing</b-card-text>
          <b-card-text>Accesories</b-card-text>
          <b-card-text>Women's Shoes</b-card-text>
          <b-card-text>Indian Wear</b-card-text>
          <b-card-text>Western Wear</b-card-text>
          <b-card-text>Ethnic Wear</b-card-text>
          <b-card-text>Unstitched Fabric</b-card-text>
          <b-card-text>Jewellery</b-card-text>
          <b-card-text>Jewellery</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 class="accordion-btn" >Help & Settings</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Women's Fashion</b-card-text>
          <b-card-text>Women's Clothing</b-card-text>
          <b-card-text>Accesories</b-card-text>
          <b-card-text>Women's Shoes</b-card-text>
          <b-card-text>Indian Wear</b-card-text>
          <b-card-text>Western Wear</b-card-text>
          <b-card-text>Ethnic Wear</b-card-text>
          <b-card-text>Unstitched Fabric</b-card-text>
          <b-card-text>Jewellery</b-card-text>
          <b-card-text>Jewellery</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
       </div>
    </b-sidebar>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
                <b-nav-item href="#">Women</b-nav-item>
        <b-nav-item href="#">Men</b-nav-item>
                <b-nav-item href="#">Men</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
  .navbar-container{
      background: #683581;
      width:100%;
 }

 .accordion-btn, .accordion-btn:hover,.accordion-btn:focus, .btn-secondary:focus {
   background: transparent !important;
   color: black !important;
   text-align: left !important; 
   border: none !important;
   font-weight: bold !important;
   box-shadow: none !important;
 }
  .text-white {
    color: white !important;
    border: 1px solid white !important;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: white;
  }
</style>
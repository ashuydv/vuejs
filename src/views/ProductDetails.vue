<template>
  <div>
    <Topbar />
    <Navbar />
    <b-container class="py-2">
      <b-breadcrumb :crumb="crumb"></b-breadcrumb>
      <b-jumbotron class="jumbotron p-2">
        <b-container class="px-0">
          <b-row>
            <b-col>
              <div class="row">
                <div class="col-md-3">
                  <!-- Tabs nav -->
                  <div
                    class="nav flex-column nav-pills nav-pills-custom px-2"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <b-link
                      class="nav-link mb-1 shadow active"
                      :id="v - pills - home - tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <i class="fa fa-user-circle-o mr-2"></i>
                      <span class="font-weight-bold small text-uppercase">
                        <b-img
                          src="../assets/eyeshadow-GlamUP.png"
                          fluid
                        ></b-img> </span
                    ></b-link>
                    <b-link
                      class="nav-link mb-1 shadow"
                      :id="v - pills - profile - tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <i class="fa fa-calendar-minus-o mr-2"></i>
                      <span class="font-weight-bold small text-uppercase">
                        <b-img
                          src="../assets/eyeshadow-GlamUP.png"
                          fluid
                        ></b-img> </span
                    ></b-link>
                    <b-link
                      class="nav-link mb-1 shadow"
                      :id="v - pills - messages - tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <i class="fa fa-star mr-2"></i>
                      <span class="font-weight-bold small text-uppercase">
                        <b-img
                          src="../assets/eyeshadow-GlamUP.png"
                          fluid
                        ></b-img> </span
                    ></b-link>
                    <b-link
                      class="nav-link mb-1 shadow"
                      :id="v - pills - settings - tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span class="font-weight-bold small text-uppercase">
                        <b-img
                          src="../assets/eyeshadow-GlamUP.png"
                          fluid
                        ></b-img> </span
                    ></b-link>
                    <b-link
                      class="nav-link mb-1 shadow"
                      :id="v - pills - settings - tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span class="font-weight-bold small text-uppercase">
                        <b-img
                          src="../assets/eyeshadow-GlamUP.png"
                          fluid
                        ></b-img> </span
                    ></b-link>
                  </div>
                </div>

                <div class="col-md-9">
                  <!-- Tabs content -->
                  <div class="tab-content" id="v-pills-tabContent">
                    <div
                      class="tab-pane fade shadow rounded bg-white show active p-3"
                      :id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <b-img src="../assets/eyeshadow-GlamUP.png" fluid></b-img>
                    </div>

                    <div
                      class="tab-pane fade shadow rounded bg-white p-5"
                      :id="v - pills - profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <h4 class="font-italic mb-4">Bookings</h4>
                      <p class="font-italic text-muted mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>

                    <div
                      class="tab-pane fade shadow rounded bg-white p-5"
                      :id="v - pills - messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <h4 class="font-italic mb-4">Reviews</h4>
                      <p class="font-italic text-muted mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>

                    <div
                      class="tab-pane fade shadow rounded bg-white p-5"
                      :id="v - pills - settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <h4 class="font-italic mb-4">Confirm booking</h4>
                      <p class="font-italic text-muted mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col class="py-1">
              <h4>Jacquline USA</h4>
              <h3>Eyeshadow Palette</h3>
              <b-text class="pb-4">
                <div class="d-flex align-items-center small">
                  <font-awesome-icon
                    :icon="['far', 'star']"
                    size="sm"
                    class="mr-1"
                  ></font-awesome-icon>
                  <font-awesome-icon
                    :icon="['far', 'star']"
                    size="sm"
                    class="mr-1"
                  ></font-awesome-icon>
                  <font-awesome-icon
                    :icon="['far', 'star']"
                    size="sm"
                    class="mr-1"
                  ></font-awesome-icon>
                  <font-awesome-icon
                    :icon="['far', 'star']"
                    size="sm"
                    class="mr-1"
                  ></font-awesome-icon>
                  <font-awesome-icon
                    :icon="['far', 'star']"
                    size="sm"
                    class="mr-1"
                  ></font-awesome-icon>
                  <b-text class="mr-1">4.4/5 | </b-text>
                  <b-text>3564 Rating & 65 Reviews</b-text>
                </div>
              </b-text>
              <h3 class="cost">
                &#8377; 4600
                <span class="small">MRP: <span> &#8377; 5,750</span> </span>
                <span class="text-primary smaller ml-1">(20% Off)</span>
              </h3>
              <b-text class="smaller mr-1">inclusive of all taxes</b-text>
              <br />
              <b-text class="smaller"
                >Quantity:
                <b-button class="btns-sum">
                  <b-text class="btn-text">-</b-text></b-button
                >
                <span class="text">1</span>
                <b-button class="btns-sum"
                  ><b-text class="btn-text">+</b-text></b-button
                > </b-text
              ><br />
              <small>Colors/Shades: </small>
              <b-row class="px-0 mx-0">
                <b-col cols="2" class="px-0 py-2">
                  <b-img src="../assets/eyeshadow-GlamUP.png" class="p-1" fluid></b-img>
                </b-col>
                <b-col cols="2" class="px-0 py-2">
                  <b-img src="../assets/eyeshadow-GlamUP.png" class="p-1" fluid></b-img>
                </b-col>
                <b-col cols="2" class="px-0 py-2">
                  <b-img src="../assets/eyeshadow-GlamUP.png" class="p-1" fluid></b-img>
                </b-col>
                <b-col cols="2" class="px-0 py-2">
                  <b-img src="../assets/eyeshadow-GlamUP.png" class="p-1" fluid></b-img>
                </b-col>
                <b-col cols="2" class="px-0 py-2">
                  <b-img src="../assets/eyeshadow-GlamUP.png" class="p-1" fluid></b-img>
                </b-col>
                <b-col cols="2" class="px-0 py-2">
                  <b-img src="../assets/eyeshadow-GlamUP.png" class="p-1" fluid></b-img>
                </b-col>
              </b-row>
              <div class="d-flex align-items-center justify-content-center">
                <b-col class="mx-0 px-2" cols="4">
                  <b-button size="sm" block variant="border-default border"
                    >ADD TO BAG</b-button
                  >
                </b-col>
                <b-col class="mx-0 px-0" cols="8">
                  <b-text class="small"
                    ><b-icons></b-icons> Delivery Options:
                  </b-text>
                  <div class="d-flex align-items-center">
                    <b-input size="sm" placeholder="ENTER CODE"></b-input>
                    <b-button size="sm" variant="border-default border"
                      >CHECK</b-button
                    >
                  </div>
                </b-col>
              </div>
            </b-col>
          </b-row>
        </b-container>
        <b-container class="my-2 mt-4 border-top">
          <div class="border mt-4 p-3">
            <b-tabs content-class="mt-3">
              <b-tab title="PODUCT DESCRIPTION" active
                ><p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  aliquid quo dolor quisquam eos ducimus hic molestias,
                  voluptatibus dolorem pariatur voluptate eligendi repellat
                  enim, voluptates nulla animi accusantium quas? Voluptas,
                  deserunt. Saepe fugit blanditiis, similique tempora quibusdam
                  dicta deleniti hic.
                  <span v-if="readMore"></span>
                  <span v-else>...</span>
                  <span v-show="readMore">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Earum libero animi in corporis. Doloremque quisquam
                    praesentium iusto illo consequatur distinctio odio! Amet
                    impedit, et ex quibusdam quas asperiores natus ratione?
                  </span>
                </p></b-tab
              >
              <b-tab title="CUSTOMER REVIEWS"
                ><p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  aliquid quo dolor quisquam eos ducimus hic molestias,
                  voluptatibus dolorem pariatur voluptate eligendi repellat
                  enim, voluptates nulla animi accusantium quas? Voluptas,
                  deserunt. Saepe fugit blanditiis, similique tempora quibusdam
                  dicta deleniti hic.
                  <span v-if="readMore"></span>
                  <span v-else>...</span>
                  <span v-show="readMore">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Earum libero animi in corporis. Doloremque quisquam
                    praesentium iusto illo consequatur distinctio odio! Amet
                    impedit, et ex quibusdam quas asperiores natus ratione?
                  </span>
                </p></b-tab
              >
            </b-tabs>
            <b-button
              block
              variant="border-default border"
              @click="readMore = !readMore"
            >
              <span v-if="readMore">Read Less</span>
              <span v-else>Read More</span>
            </b-button>
          </div>
        </b-container>
      </b-jumbotron>
      <h2>offers</h2>
      <ProductDetails />
      <h2>offers</h2>
      <ProductDetails />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import ProductDetails from "../components/ProductDetails.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Topbar from "../components/Topbar.vue";

const items = [
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
];

const crumb = [
  {
    text: "Home",
    href: "https://google.com",
  },
  {
    text: "Posts",
    to: { name: "home" },
  },
  {
    text: "Another Story",
    active: true,
  },
];

export default {
  components: { ProductDetails, Footer, Navbar, Topbar },

  data() {
    return {
      readMore: false,
      items: items,
      crumb: crumb,
    };
  },
};
</script>

<style scoped>
.jumbotron {
  background: white;
}
.nav-pills-custom .nav-link {
  color: #aaa;
  background: #fff;
  position: relative;
}

.nav-pills-custom .nav-link.active {
  color: #45b649;
  background: #fff;
}

.py-1 .small {
  text-decoration: none;
  font-weight: medium;
  padding-bottom: 1rem;
  border-bottom: 1px solid purple;
}

.cost {
  font-size: 1.5rem;
  margin: 5px 0;
  font-weight: normal;
}

.cost .small {
  font-weight: normal;
  font-size: 1rem;
  border: none;
  color: #353535;
  text-decoration: line-through;
}

.btns-sum {
  border-radius: 50%;
  background: transparent;
  color: #353535;
  margin: 0px 1rem;
  padding: 4px 12px;
  text-align: center;
  justify-content: center;
  vertical-align: middle !important;
  position: relative !important;
}

.btns-sum:hover,
.btns-sum:focus {
  border: 1px solid black !important;
}

.cost .smaller {
  font-size: 0.8rem;
  text-decoration: none;
}

.smaller {
  font-size: 0.8rem;
}

.nav-pills-custom .nav-link.active::before {
  opacity: 1;
}
</style>

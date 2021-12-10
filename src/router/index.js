import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import OfferPage from "../views/OfferPage.vue";
import ProductPage from "../views/ProductPage.vue";
import ProductDetails from "../views/ProductDetails.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/offers",
        name: "Offer",
        component: OfferPage,
    }, {
        path: "/products",
        name: "Products",
        component: ProductPage,
    }, {
        path: "/products/1",
        name: "ProductDetails",
        component: ProductDetails,
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
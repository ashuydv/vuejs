import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faPhoneAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope, faUser, faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faEnvelope, faBars, faPhoneAlt, faUser, faHeart, faShoppingCart)

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
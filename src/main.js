import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faPhoneAlt, faShoppingCart, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope, faUser, faHeart, faStar } from "@fortawesome/free-regular-svg-icons"
import { faFacebookF, faInstagram, faWhatsapp, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { BootstrapVueIcons } from 'bootstrap-vue'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faEnvelope, faBars, faPhoneAlt, faUser, faHeart, faShoppingCart, faFacebookF, faInstagram, faWhatsapp, faTwitter, faYoutube, faChevronDown, faStar)

Vue.component("font-awesome-icon", FontAwesomeIcon)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
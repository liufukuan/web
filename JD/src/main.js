import Vue from "vue";
import index from "./components/index.vue";
import fen from "./components/fen.vue";
import fa from "./components/fa.vue";
import gou from "./components/gou.vue";
import wo from "./components/wo.vue";
import Router from "vue-router";
import Mint from "mint-ui"
import 'mint-ui/lib/style.css';
import axios from "axios";
import Vueaxios from "vue-axios"
Vue.use(Mint)
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.use(Vueaxios,axios)
let router=new Router({
    routes:[{
        name:"index",
        path:"/",
        component:index
    },{
        name:"fen",
        path:"/fen",
        component:fen
    },{
        name:"fa",
        path:"/fa",
        component:fa
    },{
        name:"gou",
        path:"/gou",
        component:gou
    },{
        name:"wo",
        path:"/wo",
        component:wo
    },]
})
Vue.use(Router)
new Vue({
    el:"#app",
    router
})

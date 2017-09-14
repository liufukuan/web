    

    import Vue from "vue";//下载vue
    import "./components/router/css/style.css"//下载css
    import navs from "./components/nav.vue";
    import Router from "vue-router";//
    import list from "./components/list.vue";
    import foter from "./components/foter.vue";
    import jon from "./components/jon.vue";
    import son from "./components/son.vue";
    import index from "./components/index.vue";


    let router = new Router({
        routes: [{
            name: "index",
            path: "/index",
            component: index
        }, {
            name: "navs",
            path: "/navs",
            component: navs
        }, {
            name: "list",
            path: "/list",
            component: list
        }, {
            name: "foter",
            path: "/foter",
            component: foter
        }, {
            name: "jon",
            path: "/jon",
            component: jon
        }, {
            name: "ser",
            path: "/ser",
            component: ser
        }]
         linkActiveClass: "active"
    });
    Vue.use(Router)


        new Vue({
            el: "#app",
            router,
        })
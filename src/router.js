import Vue from 'vue';
import Router from 'vue-router';

import Home from './home.vue';
import Login from './login.vue';
import Slider from './slider.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/slider',
            name: 'slider',
            component: Slider
        },
    ]
});
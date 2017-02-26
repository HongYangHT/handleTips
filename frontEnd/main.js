import Vue from 'Vue';
import App from './views/app.vue';

new Vue({
	el:'body',
	render: (createElement) => createElement(App)
});

import Vue from 'vue'
import VueRouter from 'vue-router'
import mymap from '../views/mymap.vue'
import equipapply from '../views/equipapply.vue'
import equipmyapply from '../views/equipmyapply.vue'
import equipsearch from '../views/equipsearch.vue'

Vue.use(VueRouter)

const routes = [
	{
	  path: '/',
	  name: 'mymap',
	  component: mymap
	},
	{
		path: '/equipapply',
		name: 'equipapply',
		component: equipapply
	},
	{
		path: '/equipmyapply',
		name: 'equipmyapply',
		component: equipmyapply
	},
	{
		path: '/equipsearch',
		name: 'equipsearch',
		component: equipsearch
	},
]

const router = new VueRouter({
	routes
})

export default router

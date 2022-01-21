import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Timeline from "../views/Timeline.vue";
import Skills from "../views/Skills.vue";
import Testimonial from "../views/Testimonial.vue";
import Contact from "../views/Contact.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/timeline",
		name: "Timeline",
		component: Timeline,
	},
	{
		path: "/skills",
		name: "Skills",
		component: Skills,
	},
	{
		path: "/testimonials",
		name: "Testimonial",
		component: Testimonial,
	},
	{
		path: "/contact",
		name: "Contact",
		component: Contact,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Timeline from "../views/Timeline.vue";
import Testimonial from "../views/Testimonial.vue";
import Contact from "../views/Contact.vue";
import Projects from "../views/Projects.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},

	{
		path: "/timeline",
		name: "Timeline",
		component: Timeline,
	},
	{
		path: "/projects",
		name: "Projects",
		component: Projects,
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

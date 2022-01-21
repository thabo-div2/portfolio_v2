<template>
	<nav class="main-nav">
		<button class="navbars"><i class="fas fa-bars"></i></button>
		<router-link :to="{ name: 'Home' }">Home</router-link>
		<router-link :to="{ name: 'About' }">About</router-link>
		<router-link :to="{ name: 'Timeline' }">Timeline</router-link>
		<router-link :to="{ name: 'Skills' }">Skills</router-link>
		<router-link :to="{ name: 'Testimonial' }">Testimonial</router-link>
		<router-link :to="{ name: 'Contact' }">Contact</router-link>
		<button @click="changeColor" class="nav-button">
			<i class="fas fa-moon"></i>
		</button>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			dark_mode_active: false,
		};
	},
	methods: {
		changeColor() {
			let navButton = document.querySelector(".nav-button");
			if (!this.dark_mode_active) {
				this.dark_mode_active = !this.dark_mode_active;

				document.querySelector("html").classList.add("dark");

				navButton.innerHTML = `<i class="fas fa-sun"></i>`;
			} else {
				this.dark_mode_active = !this.dark_mode_active;

				document.querySelector("html").classList.remove("dark");

				navButton.innerHTML = `<i class="fas fa-moon"></i>`;
			}
		},
		toggleNavbar() {
			document.getElementsByClassName("main-nav")[0].classList.toggle("active");
		},
	},
};
</script>

<style scoped>
.main-nav {
	display: flex;
	justify-content: flex-end;
	margin: 40px auto;
}
.main-nav a {
	display: inline-block;
	text-decoration: none;
	margin: 0 10px;
	color: #999;
	font-size: 18px;
}
a {
	transition: 0.3s ease-in;
}
a.router-link-active {
	color: #ed2d34;
	border-bottom: #ed2d34 solid;
}
.navbars {
	display: none;
	border: none;
	background: #fff;
	cursor: pointer;
}
button {
	border: none;
	background-color: #fff;
	cursor: pointer;
}
</style>

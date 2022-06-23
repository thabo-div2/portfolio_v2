<template>
	<div class="home">
		<div class="home-image"></div>
		<div>
			<h1>Thabo <span>Setsubi</span></h1>
		</div>
		<div>
			<h3>
				Aspiring
				<span class="message" :class="{ typing: typeStatus }">{{
					typeValue
				}}</span>
				<span class="cursor">&nbsp;</span>
			</h3>
		</div>
		<div class="home-bio">
			<h2>About <span>Me</span></h2>
			<p>
				My interest with the tech industry started with my brother and his
				computer when I was a child. He would always be busy with his PC and
				sometimes would let me use his computer. So to give my brother his
				space, my parents got me my own PC. I always tried to keep up-to-date
				with the latest tech by reading tech magazine, like NAG. In 2021 I
				decided to chase my passions. I heard about Lifechoices Academy from my
				mother and so I enrolled to do this course to learn coding and web
				development.
			</p>
		</div>
		<div class="home-icons">
			<a href="https://github.com/thabo-div2"><i class="fab fa-github"></i></a>
			<a href="https://www.linkedin.com/in/thabo-setsubi-40b3a9219/"
				><i class="fab fa-linkedin-in"></i
			></a>
			<a href="https://codepen.io/Superthabo"><i class="fab fa-codepen"></i></a>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			typeValue: "",
			typeStatus: false,
			typeArray: [
				"Fullstack Developer",
				"Software Developer",
				"Game Developer",
				"Web App Developer",
			],
			textPosition: 0,
			textSpeed: 100,
			erasingSpeed: 100,
			newTextDelay: 2000,
			typeArrayIndex: 0,
			charIndex: 0,
		};
	},
	methods: {
		typeWriter() {
			if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
				if (!this.typeStatus) {
					this.typeStatus = true;
				}
				this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
					this.charIndex,
				);
				this.charIndex += 1;

				setTimeout(this.typeWriter, this.textSpeed);
			} else {
				this.typeStatus = false;
				setTimeout(this.eraseWriter, this.newTextDelay);
			}
		},
		eraseWriter() {
			if (this.charIndex > 0) {
				if (!this.typeStatus) {
					this.typeStatus = true;
				}

				this.typeValue = this.typeArray[this.typeArrayIndex].substring(
					0,
					this.charIndex - 1,
				);
				this.charIndex -= 1;
				setTimeout(this.eraseWriter, this.erasingSpeed);
			} else {
				this.typeStatus = false;
				this.typeArrayIndex += 1;
				if (this.typeArrayIndex >= this.typeArray.length) {
					this.typeArrayIndex = 0;
				}
				setTimeout(this.typeWriter, this.textSpeed + 1000);
			}
		},
	},
	created() {
		setTimeout(this.typeWriter, this.newTextDelay + 200);
	},
};
</script>

<style scoped>
.home {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.home span {
	color: #ed2d34;
}

span.message {
	color: #ed2d34;
}
span.cursor {
	display: inline-block;
	margin-left: 3px;
	width: 4px;
	background-color: #ed2d34;
	animation: cursorBlink 1s infinite;
}
.home-image {
	background-image: url("../assets/[removal.ai]_tmp-61e7cb502d0a5.png");
	background-position: center;
	background-size: cover;
	width: 250px;
	height: 500px;
	object-fit: contain;
}
.home-icons {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.home-icons i {
	margin: 10px;
	padding: 10px;
	color: #ed2d34;
	border: #ed2d34 solid;
	border-radius: 50%;
	transition: 0.3s ease-in-out;
}
.home-icons i:hover {
	background-color: #ed2d34;
	color: white;
}

span.cursor.typing {
	animation: none;
}

.home-bio {
	width: 500px;
}

@keyframes cursorBlink {
	49% {
		background-color: #ed2d34;
	}
	50% {
		background-color: transparent;
	}
	99% {
		background-color: transparent;
	}
}
</style>

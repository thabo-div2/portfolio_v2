<template>
	<div class="about">
		<h1>About <span>Me.</span></h1>
		<div class="about-container">
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
			<div class="about-details">
				<div>
					<h5>Name:</h5>
					<p>Thabo Setsubi</p>
				</div>
				<div>
					<h5>Age:</h5>
					<p>22</p>
				</div>
				<div>
					<h5>Email:</h5>
					<p>thabosetsubi3@gmail.com</p>
				</div>
				<div>
					<h5>Phone:</h5>
					<p>060 554 5859</p>
				</div>
				<div>
					<h5>Drivers License:</h5>
					<p>Yes</p>
				</div>
				<div>
					<h5>Criminal Record:</h5>
					<p>No</p>
				</div>
				<div>
					<h5>Language(s):</h5>
					<p>English</p>
				</div>
				<div>
					<h5>Location:</h5>
					<p>Rondebosch East, Cape Town</p>
				</div>
				<div>
					<h5>Hobbies:</h5>
					<p>Drumming, OC Gamer, Jogging</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.about {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 10px 20px;
}
.about-container {
	width: 1100px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
}
.about-details {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}
</style>

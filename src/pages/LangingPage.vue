<template>
	<div class="all">
		<div class="nav position-sticky sticky top-0">
			<NavBarVue></NavBarVue>
		</div>
		<transition name="fade">
			<div class="landing">
				<LandingComponentVue></LandingComponentVue>
			</div>
		</transition>
		<div class="ourExpertise">
			<ourExpertise />
		</div>
		<div class="solutions">
			<SolutionComponentsVue></SolutionComponentsVue>
		</div>
		<div class="testimonial">
			<TestimonialComponent></TestimonialComponent>
		</div>
		<div class="team">
			<TeamComponentVue></TeamComponentVue>
		</div>
		<div class="slider">
			<SliderComponentVue />
		</div>
		<!-- 		<div class="contact">
			<ContactComponent/>
		</div> -->
		<div class="footer">
			<FooterComponentVue />
		</div>
	</div>
</template>

<script>
import LandingComponentVue from "../components/LandingComponent.vue";
import NavBarVue from "../components/NavBar.vue";
import ourExpertise from "@/components/ourExpertise.vue";
import SolutionComponentsVue from "@/components/SolutionComponents.vue";
import TestimonialComponent from "@/components/TestimonialComponent.vue";
import TeamComponentVue from "@/components/TeamComponent.vue";
import SliderComponentVue from "@/components/SliderComponent.vue";
/* import ContactComponent from "@/components/ContactComponent.vue"; */
import FooterComponentVue from "@/components/FooterComponent.vue";
export default {
	components: {
		LandingComponentVue,
		NavBarVue,
		ourExpertise,
		SolutionComponentsVue,
		TestimonialComponent,
		TeamComponentVue,
		SliderComponentVue,
		/* 	ContactComponent, */
		FooterComponentVue,
	},
};
</script>

<style>
.nav {
	z-index: 99999;
}
.all {
	display: flex;
	flex-direction: column;
}

.landing {
	height: 100vh;
}

.ourExpertise {
	height: 50vh;
	margin-top: 10px;
}
.solutions {
	margin-top: 10px;
	margin-bottom: 10rem;
}

@media screen and (max-width: 768px) {
	.solutions {
		margin-top: 10rem;
	}
}

@media screen and (max-width: 768px) {
	.ourExpertise {
		margin-bottom: 20rem;
	}
}

@media screen and (max-width: 768px) {
	.footer {
		margin-top: 200rem;
	}
}

@media screen and (max-width: 768px) {
	.contact {
		margin-bottom: 30rem;
	}
}

.team {
	margin-top: 10rem;
}

.footer {
	margin-top: 50px;
	bottom: 0;
}
</style>

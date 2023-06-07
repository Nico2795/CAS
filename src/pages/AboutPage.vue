<template>
  <div class="all">
    <div class="nav position-sticky sticky top-0">
			<NavBarVue></NavBarVue>
		</div>
        <div class="about">
            <AboutCasComponentVue/>
        </div>
        <div class="choose">
            <ChooseUsVue/>
        </div>
        <div class="footer">
			<FooterComponentVue/>
		</div>
  </div>
</template>

<script>
import NavBarVue from '@/components/NavBar.vue'
import FooterComponentVue from '@/components/FooterComponent.vue'
import AboutCasComponentVue from '@/components/AboutCasComponent.vue'
import ChooseUsVue from '@/components/ChooseUs.vue'
export default {
    name:"AboutPage",
components:{
    AboutCasComponentVue,
    NavBarVue,
    FooterComponentVue,
    ChooseUsVue
}
}
</script>

<style scoped>



.footer{
    position: relative;
	bottom: 0;
    margin-bottom: 0;
}

.missionVission{
    margin-bottom: 100px;
}
@media (max-width: 768px) {
		.about{
			height: fit-content; /* Cambias el margen inferior a 2px */
		}
	}

.about{
    margin-bottom: 70px;
}
</style>
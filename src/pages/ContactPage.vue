<template>
    <div class="nav">
        <NavBar/>
    </div>
    <div class="contact">
        <ContactComponent/>
    </div>
    <div class="footer">
<FooterComponent/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ContactComponent from '@/components/ContactComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
components:{
    NavBar,
    ContactComponent,
    FooterComponent
}
}
</script>

<style>
.contact{
    margin: 100px;
    height: 100vh;
}
    .footer{
        bottom: 0;
        position:bottom;
    }
</style>
<template>
  <div>
    <Navbar/>
    <!-- <Synbio id="synbio"/>
    <About id="igem"/> -->
    <!-- <Gallery id="team"/> -->
    <!-- <Projects id="project"/> -->
    <!-- <Action id="fund"/> -->
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from '../components/Organisms/Footer.vue';
import Gallery from '../components/Organisms/Gallery.vue';
import About from '../components/Organisms/About.vue';
import Synbio from '../components/Organisms/Synbio.vue';
import Team from '../components/Organisms/Team.vue';
import Action from '../components/Organisms/Action.vue';
import Projects from '../components/Organisms/Projects.vue';
import Navbar from '../components/Organisms/Navbar.vue';
export default {
    components: {
    Footer,
    Gallery,
    About,
    Synbio,
    Team,
    Projects,
    Action,
    Navbar
}
}
</script>
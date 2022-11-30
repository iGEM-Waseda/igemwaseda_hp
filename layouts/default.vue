<template>
  <div>
    <Header />
    <Synbio id="synbio"/>
    <About id="igem"/>
    <Gallery id="team"/>
    <Projects id="project"/>
    <!-- <Team /> -->
    <Action id="fund"/>
    <!-- <nuxt /> -->
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Organisms/Header.vue';
import Footer from '../components/Organisms/Footer.vue';
import Gallery from '../components/Organisms/Gallery.vue';
import About from '../components/Organisms/About.vue';
import Synbio from '../components/Organisms/Synbio.vue';
import Team from '../components/Organisms/Team.vue';
import Action from '../components/Organisms/Action.vue';
import Projects from '../components/Organisms/Projects.vue';
export default {
    components: {
      Header,
      Footer,
      Gallery,
      About,
      Synbio,
      Team,
      Projects,
      Action,
    }
}
</script>
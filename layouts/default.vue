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
import Navbar from '../components/Organisms/Navbar.vue';
export default {
  components: {
    Footer,
    Navbar
  }
}
</script>
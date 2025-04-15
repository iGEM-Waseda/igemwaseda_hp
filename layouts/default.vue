<template>
  <div>
    <Navbar/>
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
  },
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: `https://igem-waseda.netlify.app${this.$route.path}`,
        },
      ],
    }
  }
}
</script>

<template>
  <div>
    <NavView />
    <router-view/>
  </div>

</template>
<style>
#app {
  font-family: 'Oxygen', sans-serif;
}
</style>

<script>
import NavView from './views/NavView.vue'

export default {
  components: {
    NavView
  },
  mounted() {
    this.$store.commit("auth/GET_USERS")
  }


}
</script>
<template>
  <nav>
    <navComp />
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="zoom" mode="out-in">
      <Component :is="Component" />
    </transition>
  </router-view>
  <FootComp/>
</template>

<script>
import navComp from './components/Navigation.vue';
import FootComp from '@/components/Footer.vue';

export default {
  components: {
    navComp,
    FootComp

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

body{
  background: radial-gradient(#414345, #151314);
  background-repeat: no-repeat;
  background-attachment: fixed;
}




.zoom-leave-to{ 
  opacity: 0;
  transition-duration: 0.25s;
 
}

.zoom-enter-from{
  opacity: 1;
}

.zoom-enter-active,
.zoom-leave-active {
  transition: 1s ease;
 
}
</style>

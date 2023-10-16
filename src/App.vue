<template>
  <nav>
    <navComp />
  </nav>
  <router-view v-slot="{ Component }">
    <transition name="zoom" mode="out-in">
      <Component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import navComp from './components/Navigation.vue';

export default {
  components: {
    navComp
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



nav a.router-link-exact-active {
  color: #ddd;
}

.zoom-leave-to{ 
  opacity: 0;
  transform: scale(3.5) translateY(-50%);
 
}


.zoom-enter-from{
  opacity: 0;
  transform: scale(3.5) translateY(100%);

}

.zoom-enter-active,
.zoom-leave-active {
  transition: 1s ease-in;
 
}
</style>

<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <VModal />
  </div>
</template>

<script>
import VModal from "@/components/V-Modal";

export default {
  name: 'App',
  components: {
    VModal
  },

}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #e5e5e5;
  margin-top: 60px;
}

body {
  background: #3b3b3b;
  margin: 0;
  padding: 0;
}

*, *::after, *::before {
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
}

.title {
  font-size: 30px;
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    display: flex;
  }
}
</style>

<template>
  <div class="home">
    <Header></Header>
    <Worldmap id="world-map"></Worldmap>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "./../components/header";
import Worldmap from "./../components/worldmap";

export default {
  name: "Home",
  components: {
    Header,
    Worldmap,
  },
};
</script>

<style lang="scss">

.home {
  display: flex;
  flex-direction: column;
  align-items: center
}

#world-map {
  max-height: 70vw;
  max-width: 70vw;
}
</style>

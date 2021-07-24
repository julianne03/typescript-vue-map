<template>
  <div id="app" style="position: relative">
    <Map />
    <food-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Map from "./components/map/map.component.vue";
import FoodList from "./components/foodList/food-list.component.vue";

@Component({
  components: {
    Map,
    FoodList,
  },
})
export default class App extends Vue {}
</script>

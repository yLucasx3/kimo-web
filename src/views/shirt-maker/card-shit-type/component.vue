<template>
  <div class="image-container">
    <img class="image" :src="imageLink" />
  </div>
</template>

<script>
export default {
  name: "CardShirtType",
  props: ["imageLink"],
};
</script>

<style scoped>
.image-container {
  margin-top: 1vh;
  margin-bottom: 2vh;
  width: 20vw;
  height: 45vh;
  transition: linear 0.2s;
}
.image-container {
  height: 98%;
}
.image-container:hover {
  box-shadow: 0 8px 22px #00000050, 0 4px 4px #00000048;
}
</style>
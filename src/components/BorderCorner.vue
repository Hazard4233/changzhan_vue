<template>
<div class="special_border" :style="{padding: padding_y + 'px ' + padding_x + 'px'}">
  <div class="left_corner"></div>
  <div class="">{{title}}</div>
</div>
</template>

<script>
export default {
  name: 'BorderCorner',
  props: {
    title: String,
    padding_y: String,
    padding_x: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.special_border {
  position: relative;
  display: flex; 
  justify-content: center; 
  align-items: center;

}
.special_border::after{
  display: block;
    content: "";
    width: 0.52083vw;
    height: 0.52083vw;
    position: absolute;
    bottom: -0.052083vw;
    right: -0.052083vw;
    border-bottom: 0.052083vw solid #2a6b87;
    border-right: 0.052083vw solid #2a6b87;
}
.special_border .left_corner::before {
  display: block;
    content: "";
    width: 0.52083vw;
    height: 0.52083vw;
    position: absolute;
    top: -0.052083vw;
    left: -0.052083vw;
    border-top: 0.052083vw solid #2a6b87;
    border-left: 0.052083vw solid #2a6b87;
}
</style>

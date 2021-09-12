<template>
<div class="" 
    :style="'--w_val: ' + w_val + 'px; --radius_val: ' + radius_val + 'px; --angle_val: ' + angle_val + 'deg; --bg_color: ' + bg_color + '; --border_color:' + border_color +';--border_width:' + border_width +'px;'">
    
</div>
</template>

<script>
export default {
  name: 'BorderCorner',
  props: {
    radius_val: String,
    w_val: String,
    angle_val: String,
    bg_color: String,
    border_color: String,
    border_width: String
  }
}
</script>
<style lang="scss" scoped>

</style>

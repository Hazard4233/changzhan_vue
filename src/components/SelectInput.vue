<template>
<div>
  <div class="mt-1 relative">
    <button type="button" 
        class="relative flex items-center w-full bg-transparent border text-r114g149b164 border-r114g149b164 rounded-md shadow-sm text-left cursor-pointer"
        style="padding-right:2.08333;padding-top:0.208333vw;padding-bottom:0.208333vw;font-size:0.72916vw;"
        aria-haspopup="listbox" 
        aria-expanded="true" 
        aria-labelledby="listbox-label"
        @click="clickSelect()">
      <div class="flex items-center">
        <span class="ml-3 block truncate">
          {{selected_option}}
        </span>
      </div>
      <div class="ml-auto">
        <svg class="text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style="width:1.041666vw;height:1.041666vw;">
          <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
    </button>
    
    <ul v-if="enableList" class="absolute z-10 mt-1 w-full bg-r8g28b37 border-r114g149b164 border shadow-lg rounded-md text-base" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
      <li v-for="(item, index) in options" :key="index" 
            class="text-r114g149b164 cursor-pointer relative hover:bg-r42g107b135"
            style="padding-top:0.20833vw;padding-bottom:0.20833vw;"  
            role="option"
            @click="selectOption(index)">
        <div class="flex items-center justify-center">
          <span class="font-normal text-center block truncate" style="font-size:0.72916vw;">
            {{ item }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'SelectInput',
  props: {
      options: Array
  },
  data() {
      return {
          enableList: false,
          selected_option: this.options[0]
      }
  },
  mounted() {

  },
  methods: {
      clickSelect() {
          this.enableList = !this.enableList
      },
      selectOption(index) {
          this.selected_option = this.options[index]
          this.enableList = false
          this.$emit('eventFromSelect', this.selected_option)
      }
  }
}
</script>
<style lang="scss" scoped>

</style>

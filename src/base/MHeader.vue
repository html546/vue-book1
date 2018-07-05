<!--  -->
<template>
  <div class="header">
      <slot></slot>
      <i class="iconfont icon-fanhui" v-if="back" @click="goback"></i>
  </div>
</template>

<script>
export default {
  props: {
    back: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    goback() {
        this.$router.go(-1);
    }
  }
};
</script>
<style lang='less' scoped>
.header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background: #afd9ee;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  i {
    position: absolute;
    left: 10px;
    font-size: 20px;
  }
}
</style>
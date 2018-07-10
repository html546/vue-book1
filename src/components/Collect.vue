<!-- collect -->
<template>
  <div>
      <MHeader>
        购物车
      </MHeader>
      <ul class="content">
        <li v-for="(l,index) in cartList" :key="index">
            <img :src="l.bookCover" alt="">
            <h3>{{l.bookName}}</h3>
            <p>小计 {{l.bookPrice*l.bookCount}}</p>
            <button>-</button>{{l.bookCount}}<button>+</button>
            <button>删除</button>
        </li>
        <li>共{{count}}本</li>
      </ul>
  </div>
</template>

<script>
import MHeader from "../base/MHeader.vue";
// 辅助函数 语法糖
import {mapState,mapGetters} from 'vuex';
console.log(mapState(['cartList']));
export default {
  data() {
    return {};
  },

  components: {
    MHeader
  },

  computed: {
    ...mapGetters(['count']),
    ...mapState(['cartList'])
  },

  methods: {}
};
</script>
<style lang='less' scoped>
</style>
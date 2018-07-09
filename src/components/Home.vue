<!--home  -->
<template>
  <div>
      <MHeader>
        首页
      </MHeader>
      <div class="content">
        <Loading v-if="loading"></Loading>
        <template v-else>
          <Swiper :swiperSlides="sliders"></Swiper>
          <div class="container">
            <h3>热门图书</h3>
            <ul>
              <li v-for="(hot,index) in hotBooks" :key="index">
                <img :src="hot.bookCover">
                <b>{{hot.bookName}}</b>
              </li>
            </ul>
          </div>
        </template>
      </div>
  </div>
</template>

<script>
// 1.引入组件 2.注册组件 3.使用组件
import MHeader from "../base/MHeader.vue";
import Swiper from "../base/Swiper.vue";
import { getAll } from "../api";
import Loading from '../base/Loading.vue';
export default {
  created() {
    /* this.getSlider(); //获取轮播图
    this.getHot(); //获取最新图书 */
    this.getData();
  },
  data() {
    return {
      sliders: [],
      hotBooks: [],
      loading: true
    };
  },

  components: {
    MHeader,
    Swiper,
    Loading
  },

  computed: {},

  methods: {
    /* async getHot() {
      this.hotBooks = await getHotBook();
    },
    async getSlider() {
      // 给data起别名 对象中的属性名字必须和得到的结果名字一致
      this.sliders = await getSliders();
      // 将获取的数据放到sliders
    } */
    async getData() {
      let [sliders, hotBooks] = await getAll(); //[sliders,books]
      this.sliders = sliders;
      this.hotBooks = hotBooks;
      //  ...轮播图和热门图书已经获取完成
      this.loading = false;
    }
  }
};
</script>
<style lang='less' scoped>
h3 {
  color: #999;
  padding: 5px 0;
}
.container {
  width: 90%;
  margin: 0 auto;
  ul {
    display: flex;
    flex-wrap: wrap; /*默认不换行*/
    padding-bottom: 10px;
    li {
      width: 50%;
      text-align: center;
      margin: 5px 0;
      img {
        width: 100%;
      }
    }
  }
}
</style>
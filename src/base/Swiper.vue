<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "carousel",
  props: ["swiperSlides"], //this.swiperSlides
  data() {
    return {
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        onservePerents: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
</style>

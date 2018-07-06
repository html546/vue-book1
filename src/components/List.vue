<!-- list -->
<template>
  <div>
    <MHeader :back="true">列表页</MHeader>
    <div class="content">
      <ul>
        <router-link v-for="(book,index) in books" :key="index" :to="{name:'detail',params:{bid:book.bookId}}" tag="li">
          <img :src="book.bookCover" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import MHeader from "../base/MHeader.vue";
import { getBooks, removeBook } from "../api";
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      books: []
    };
  },

  components: {
    MHeader
  },

  computed: {},

  methods: {
    async getData() {
      this.books = await getBooks(); //删除某一项
    },
    async remove(id) {
      await removeBook(id);
      // 要删除前台数据
      this.books = this.books.filter(item => item.bookId !== id);
    }
  }
};
</script>
<style scoped>
.content ul {
  padding: 10px;
}
.content ul li {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
}
.content ul li img {
  width: 120px;
  height: 120px;
}
.content h4 {
  font-size: 20px;
  line-height: 35px;
}
.content p {
  color: #2a2a2a;
  line-height: 25px;
}
.content b {
  color: red;
}
.content button {
  display: block;
  width: 60px;
  height: 25px;
  background: orangered;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
}
</style>
<!-- tab -->
<template>
  <div class="footer">
    <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
    </router-link>
    <router-link to="/list">
        <i class="iconfont icon-list"></i>
        <span>列表</span>
    </router-link>
    <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>购物车</span>
    </router-link>
    <router-link to="/add">
        <i class="iconfont icon-tianjia"></i>
        <span>添加</span>
    </router-link>
  </div>
</template>

<style lang='less' scoped>
// display:flex
// flex-direction:row/column
// justify-content:center 垂直局中
// align-item:center 横向局中
// flex:1 每份占1
// router-link-exact-active router-link-active
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #ccc;
  a {
    display: flex;
    color: yellowgreen;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  a.router-link-active{
      color: red;
  }
}
</style>
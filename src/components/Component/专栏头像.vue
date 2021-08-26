<template>
  <div class="bruce flex-ct-x" data-title="专栏头像">
    <div class="article-avatar">
      <p class="left">KaiyiWing</p>
      <p class="right">学前端</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.article-avatar {
  display: flex;
  /* direction wrap 的两个属性 */
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: #f66;
  border-radius: 100%;
  width: 250px;
  height: 250px;
  font-weight: bold;
  font-size: 35px;
  line-height: 50px;
  color: #fff;
  box-shadow: 0 0 50px 5px rgba(#000, 0.2) inset;
  text-shadow: 5px 5px 10px rgba(#000, 0.5);
  .left {
    border-top: 3px solid #fff;
    /* 用负的文本缩进量实现上短线比文字短一点 */
    text-indent: -1em;
  }
  .right {
    text-indent: 2em;
    /* 块元素首行文本内容之前的缩进量 */
    font-size: 40px;
  }
}
</style>

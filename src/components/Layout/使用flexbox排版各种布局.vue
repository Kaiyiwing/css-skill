<template>
  <div class="bruce flex-ct-x" data-title="使用flexbox排版各种布局">
    <div class="layout-box">
      <div class="fullscreen-layout">
        <header></header>
        <main></main>
        <footer></footer>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.fullscreen-layout {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  /* 顶部和底部设置固定高度，主体声明 flex: 1 实现高度自适应 */
  header {
    height: 50px;
    background-color: #f66;
  }
  footer {
    height: 50px;
    background-color: #66f;
  }
  main {
    flex: 1;
    background-color: #3c9;
  }
}
</style>

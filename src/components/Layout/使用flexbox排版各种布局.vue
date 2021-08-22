<template>
  <div class="bruce flex-ct-x" data-title="使用flexbox排版各种布局">
    <div class="layout-box">
      <div class="fullscreen-layout" title="全屏布局">
        <header></header>
        <main></main>
        <footer></footer>
      </div>
      <div class="two-column-layout" title="两列布局">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <div class="three-column-layout" title="三列布局">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
      </div>
      <div class="grail-layout" title="圣杯布局">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
      </div>
      <div class="average-layout" title="多列布局-均分布局">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
      </div>
      <div class="center-layout" title="居中布局">
        <div></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout-box {
  display: flex;
  flex-direction: column;
  > div {
    margin: 20px 0;
    flex-shrink: 0;
    flex-basis: 400px;
  }
}
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

.two-column-layout {
  display: flex;
  width: 400px;
  height: 400px;
  .left {
    width: 100px;
    background-color: #f66;
  }
  .right {
    flex: 1;
    background-color: #66f;
  }
}

.three-column-layout {
  display: flex;
  width: 400px;
  height: 400px;
  .left {
    width: 50px;
    background-color: #f66;
  }
  .center {
    width: 100px;
    background-color: #66f;
  }
  .right {
    flex: 1;
    background-color: #3c9;
  }
}

.grail-layout {
  display: flex;
  width: 400px;
  height: 400px;
  .left {
    width: 100px;
    background-color: #f66;
  }
  .center {
    flex: 1;
    background-color: #3c9;
  }
  .right {
    width: 100px;
    background-color: #66f;
  }
}

.average-layout {
  display: flex;
  width: 400px;
  height: 400px;
  div {
    flex: 1;
  }
  .one {
    background-color: #f66;
  }
  .two {
    background-color: #66f;
  }
  .three {
    background-color: #f90;
  }
  .four {
    background-color: #09f;
  }
}

.center-layout {
  display: flex;
  width: 400px;
  height: 400px;
  background-color: #f66;

  div {
    width: 100px;
    height: 100px;
    background-color: #66f;
    /* 也可以在父元素使用 center 做布局 */
    margin: auto;
  }
}
</style>

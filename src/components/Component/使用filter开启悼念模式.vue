<template>
  <div class="bruce flex-ct-x" data-title="使用filter开启悼念模式">
    <img
      class="mourning-mode"
      src="https://static.yangzw.vip/codepen/car.jpg"
    />
  </div>
</template>

<style lang="scss" scoped>
/* 
  当节点声明不为none的filter时,
  若自身及其后代节点声明了position:absolute/fixed，
  则为其创建一个新容器，使得这些定位节点其定位基准相对这个新容器进行。

  所以如果对全局开启灰度的话，生命到 html 标签上
  <html style="filter:grayscale(1)">
  */
.mourning-mode {
  width: 400px;
  filter: grayscale(100%);
}
</style>

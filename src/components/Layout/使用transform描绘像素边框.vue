<template>
  <div class="bruce flex-ct-y" data-title="使用transform描绘像素边框">
    <div class="onepx-border normal">1px</div>
    <div class="onepx-border thin">0.5px</div>
  </div>
</template>
<style lang="scss" scoped>
.onepx-border {
  width: 200px;
  height: 80px;
  cursor: pointer;
  line-height: 80px;
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  color: #f66;
  & + .onepx-border {
    margin-top: 10px;
  }
  /* 设置 1px 边框时，在手机上可能看起来很粗 */
  &.normal {
    border: 1px solid #f66;
  }
  &.thin {
    position: relative;
    /* 使用缩放后的伪元素来实现 0.5px 像素边框 */
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      border: 1px solid #f66;
      width: 200%;
      height: 200%;
      content: "";
      transform: scale(0.5);
      /*  
        CSS属性让你更改一个元素变形的原点
        x y z
        */
      transform-origin: left top;
    }
  }
}
</style>

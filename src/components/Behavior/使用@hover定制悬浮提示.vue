<template>
  <div class="bruce flex-ct-x" data-title="使用:hover定制悬浮提示">
    <ul class="hover-tips">
      <li data-name="姨妈红"></li>
      <li data-name="基佬紫"></li>
      <li data-name="箩底橙"></li>
      <li data-name="姣婆蓝"></li>
      <li data-name="大粪青"></li>
      <li data-name="原谅绿"></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
$color-list: #f66 #66f #f90 #09f #9c3 #3c9;
.hover-tips {
  display: flex;
  justify-content: space-between;
  width: 200px;
  li {
    position: relative;
    padding: 2px;
    width: 24px;
    height: 24px;
    border: 2px solid transparent;
    border-radius: 100%;
    /* 背景被裁剪至内容区（content box）外沿 */
    background-clip: content-box;
    cursor: pointer;
    transition: all 300ms;
    &::before,
    &::after {
      position: absolute;
      left: 50%;
      bottom: 100%;
      /*
      opacity 为0时也会触发事件
      所以需要关闭事件
      */
      opacity: 0;
      pointer-events: none;
      transform: translate3d(0, -30px, 0);
      transition: all 300ms;
    }
    &::before {
      margin: 0 0 12px -35px;
      border-radius: 5px;
      width: 70px;
      height: 30px;
      background-color: rgba(#000, 0.5);
      line-height: 30px;
      text-align: center;
      color: #fff;
      content: attr(data-name);
    }
    &::after {
      margin-left: -6px;
      /* 通过只设置top的颜色，来绘制三角形 */
      border: 6px solid transparent;
      border-top-color: rgba(#000, 0.5);
      width: 0;
      height: 0;
      content: "";
    }

    @each $color in $color-list {
      $index: index($color-list, $color);
      &:nth-child(#{$index}) {
        background-color: $color;
        &:hover {
          border-color: $color;
        }
      }
    }
    &:hover {
      &::before,
      &::after {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }
}
</style>

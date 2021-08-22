<template>
  <div class="bruce flex-ct-y" data-title="使用attr()抓取节点属性">
    <a
      class="hover-tips btn-1"
      href="https://www.baidu.com"
      data-msg="Hello World"
      >提示框</a
    >
    <a class="hover-tips btn-2" href="https://www.baidu.com"></a>
  </div>
</template>

<style lang="scss" scoped>
.hover-tips {
  position: relative;
  padding: 0 20px;
  background-color: #66f;
  border-radius: 10px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  & + .hover-tips {
    margin-top: 10px;
  }
  &.btn-1 {
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 5px;
      width: 100%;
      height: 100%;
      opacity: 0;
      text-align: center;
      font-size: 12px;
      content: attr(data-msg);
      transition: all 300ms;
      background-color: rgba(#000, 0.5);
    }
    &:hover::after {
      left: calc(100% + 20px);
      opacity: 1;
    }
  }
  &.btn-2:empty::after {
    content: attr(href);
  }
}
</style>

<template>
  <div class="bruce flex-ct-y" data-title="使用text-overflow控制溢出文本">
    <p class="ellipsis-text s-line sl-ellipsis">
      CSS非常有趣和搞怪，可以做一些JS也能做的事情
    </p>
    <p class="ellipsis-text m-line ml-ellipsis">
      层叠样式表(CSS)是一种用来表现HTML(标准通用标记语言的一个应用)或XML(标准通用标记语言的一个子集)等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。
    </p>
    <p class="ellipsis-text m-line mls-ellipsis">
      层叠样式表(CSS)是一种用来表现HTML(标准通用标记语言的一个应用)或XML(标准通用标记语言的一个子集)等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。
    </p>
    <p class="ellipsis-text m-line mls-ellipsis">
      CSS非常有趣和搞怪，可以做一些JS也能做
    </p>
  </div>
</template>
<style lang="scss" scoped>
.ellipsis-text {
  line-height: 30px;
  font-size: 20px;
  /* 单行文字溢出处理 */
  &.s-line {
    width: 200px;
  }
  &.sl-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* 使用旧版的弹性布局模拟多行文字溢出，只能在 Webkit 内核中使用 */
  &.m-line {
    margin-top: 10px;
    width: 400px;
    text-align: justify;
  }
  &.ml-ellipsis {
    /* 将容器作为弹性伸缩盒模型 */
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    /* 弹性伸缩盒模型子节点的排列方式 */
    -webkit-box-orient: vertical;
    /* 限制容器最多显示多少行文本 */
    -webkit-line-clamp: 3;
  }

  /* 
    使用新方法会导致单行文字也会出现省略号，
    只能结合 js 进行额外处理
     */
  &.mls-ellipsis {
    overflow: hidden;
    position: relative;
    /* 
      使用 max-height 和 line-height 配合
      计算出最大的显示行数
     */
    max-height: 90px;
    &::after {
      /* 
      使用布局将省略号伪元素布局
      到整段文字的右下角 
      */
      position: absolute;
      right: 0;
      bottom: 0;
      padding-left: 40px;
      /* 调整渐变背景颜色稍微润色下省略号使其看上去自然一些 */
      background: linear-gradient(to right, transparent, #fff 50%);
      content: "...";
    }
  }
}
</style>

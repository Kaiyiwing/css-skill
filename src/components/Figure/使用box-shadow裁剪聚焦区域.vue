<template>
  <div class="bruce flex-ct-x" data-title="使用box-shadow裁剪聚焦区域">
    <div class="img-cliper">
      <img src="https://static.yangzw.vip/codepen/gz.jpg" />
      <i></i>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.img-cliper {
  overflow: hidden;
  position: relative;
  img {
    width: 400px;
  }
  i {
    position: absolute;
    left: 50px;
    top: 30px;
    width: 100px;
    height: 50px;
    border-radius: 100%;
    /* 设置 spread 到 9999px 覆盖整个网站/图片 */
    box-shadow: 0 0 0 9999px rgba(#000, 0.5);
  }
}
</style>

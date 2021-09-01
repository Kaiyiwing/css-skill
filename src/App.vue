<template>
  <div class="index-page">
    <div class="header flex-ct-y">
      <h1>
        <span class="gradient">iDea CSS</span>
        <img src="./assets/logo.svg" />
      </h1>
      <p>我是KaiyiWing，一位正在入门的CSS爱好者</p>
      <p>欢迎来到<strong class="vue">Pure CSS World</strong></p>
      <p>请往下滚动浏览更多好看实用的纯CSS特效👇</p>
      <p>依据美学标准将以下纯CSS特效划分为五大类</p>
      <p>布局-行为-色彩-图形-组件</p>
      <p>
        目前已发布<strong class="default">{{ state.count }}</strong
        >个，争取每周更新<strong class="react">1~2</strong>个
      </p>
      <p>
        该项目为<a href="https://github.com/JowayYoung/idea-css">JowayYoung</a
        >前辈项目的 Vue3 版本
      </p>
      <p>目的为学习与练习 css 技巧</p>
    </div>
  </div>
  <div class="content layout">
    <Layout1 />
    <Layout2 />
    <Layout3 />
  </div>
  <div class="content behavior">
    <Behavior1 />
    <Behavior2 />
    <Behavior3 />
    <Behavior4 />
    <Behavior5 />
    <Behavior6 />
  </div>
  <div class="content figure">
    <Figure1 />
    <Figure2 />
    <Figure3 />
    <Figure4 />
    <Figure5 />
  </div>
  <div class="content color">
    <Color1 />
    <Color2 />
    <Color3 />
    <Color4 />
  </div>
  <div class="content component">
    <Component1 />
    <Component2 />
    <Component3 />
    <Component4 />
    <Component5 />
    <Component6 />
    <Component7 />
    <Component8 />
    <Component9 />
    <Component10 />
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import Layout1 from "./components/Layout/使用flexbox排版各种布局.vue";
import Layout2 from "./components/Layout/使用float排版环绕文本.vue";
import Layout3 from "./components/Layout/使用text-overflow控制溢出文本.vue";
import Behavior1 from "./components/Behavior/使用attr()抓取节点属性.vue";
import Behavior2 from "./components/Behavior/使用+或~选择指定元素.vue";
import Behavior3 from "./components/Behavior/使用@hover定制悬浮提示.vue";
import Behavior4 from "./components/Behavior/使用@valid和@invalid校验表单内容.vue";
import Behavior5 from "./components/Behavior/使用@focus-within分发冒泡响应.vue";
import Behavior6 from "./components/Behavior/使用@empty监听清空状态.vue";
import Figure1 from "./components/Figure/使用clip-path描绘各种图像.vue";
import Figure2 from "./components/Figure/使用linear-gradient()描绘方格背景.vue";
import Figure3 from "./components/Figure/使用mask雕刻镂空背景.vue";
import Figure4 from "./components/Figure/使用box-shadow裁剪聚焦区域.vue";
import Figure5 from "./components/Figure/使用transform描绘动感心形.vue";
import Component1 from "./components/Component/条形加载条.vue";
import Component2 from "./components/Component/心形加载条.vue";
import Component3 from "./components/Component/标签导航css.vue";
import Component4 from "./components/Component/标签导航js.vue";
import Component5 from "./components/Component/悬浮跟踪按钮.vue";
import Component6 from "./components/Component/悬浮视差按钮.vue";
import Component7 from "./components/Component/ios开关按钮.vue";
import Component8 from "./components/Component/气泡对话框.vue";
import Component9 from "./components/Component/专栏头像.vue";
import Component10 from "./components/Component/使用filter开启悼念模式.vue";
import Color1 from "./components/Color/使用linear-gradient()控制渐变背景.vue";
import Color2 from "./components/Color/使用linear-gradient()控制渐变文本.vue";
import Color3 from "./components/Color/使用linear-gradient()控制闪烁文本.vue";
import Color4 from "./components/Color/使用box-shadow描绘彩虹色带.vue";

const state = reactive({ count: 0 });
onMounted(() => {
  const items = document.getElementsByClassName("bruce") || [];
  state.count = items.length;
});
</script>

<style lang="scss">
/* 设置滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background-color: rgba(#ccc, 0.3);
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: #ccc;
}

.header {
  overflow: hidden;
  height: 100vh;
  background-color: #282c34;
  h1 {
    margin: 20px 0;
    font-size: 10vmin;
  }
  img {
    display: inline-block;
    height: 10vmin;
    /* 基线与父元素的上标基线对齐 */
    vertical-align: super;
    animation: swing 3s infinite;
  }
  p {
    line-height: 1.5;
    font-size: 1.8vmin;
    color: #fff;
    /* 使用紧邻选择符，选择除第一行以外的元素 */
    & + p {
      margin-top: 10px;
    }
  }
  strong {
    display: inline-block;
    margin: 0 3px;
    padding: 0 6px;
    border-radius: 5px;
    line-height: 20px;
    color: #fff;
    &.default {
      background-color: #f66;
    }
    &.react {
      background-color: #61dafb;
    }
    &.vue {
      background-color: #42b983;
    }
  }
  div {
    display: flex;
    margin-top: 20px;
  }

  a {
    color: #fff;
    padding: 0 4px;
    &:hover {
      text-decoration: underline;
    }
  }

  .gradient {
    background-image: linear-gradient(92deg, #f66 0%, #f90 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: #f66;
    animation: hue 5s infinite linear;
    -webkit-text-fill-color: transparent;
  }
}

.bruce {
  overflow: hidden;
  position: relative;
  padding: 50px 0;
  border-bottom: 1px solid #ccc;
  min-height: 300px;
  &::before {
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 99999;
    padding: 0 10px;
    border-radius: 0 0 5px 5px;
    max-width: 300px;
    line-height: 20px;
    transform: translateX(-50%);
    color: #fff;
    content: attr(data-title);
  }
  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 99999;
    padding: 5px 10px;
    border-top-left-radius: 5px;
    background-color: #ccc;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
  }
}
.content {
  overflow: auto;
  transition: all 300ms;
  &.layout .bruce {
    &::before {
      background-color: #f66;
    }
    &::after {
      content: "布局";
    }
  }
  &.behavior .bruce {
    &::before {
      background-color: #66f;
    }
    &::after {
      content: "行为";
    }
  }
  &.color .bruce {
    &::before {
      background-color: #f90;
    }
    &::after {
      content: "颜色";
    }
  }
  &.figure .bruce {
    &::before {
      background-color: #09f;
    }
    &::after {
      content: "图形";
    }
  }
  &.component .bruce {
    &::before {
      background-color: #3c9;
    }
    &::after {
      content: "组件";
    }
  }
}

@keyframes hue {
  from {
    filter: hue-rotate(0);
  }
  to {
    filter: hue-rotate(-360deg);
  }
}

@keyframes swing {
  0%,
  65% {
    transform: rotate(0);
  }
  70% {
    transform: rotate(6deg);
  }
  75% {
    transform: rotate(-6deg);
  }
  80% {
    transform: rotate(6deg);
  }
  85% {
    transform: rotate(-6deg);
  }
  90% {
    transform: rotate(6deg);
  }
  95% {
    transform: rotate(-6deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>

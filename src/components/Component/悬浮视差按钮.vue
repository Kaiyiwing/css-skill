<template>
  <div ref="bg" class="bruce flex-ct-x" data-title="悬浮视差按钮">
    <a
      ref="btn"
      class="parallax-btn"
      data-name="妙用CSS变量，让你的CSS变得更心动"
      @mousemove="move"
      @mouseup="up"
      @mousedown="down"
      @mouseleave="leave"
    ></a>
  </div>
</template>
<style lang="scss" scoped>
.bruce {
  /* perspective指定了观察者与 z=0 平面的距离 */
  transform: perspective(800px);
  /* 设置元素为 3d 模式 */
  transform-style: preserve-3d;
}

.parallax-btn {
  position: relative;
  width: 400px;
  height: 50px;
  cursor: pointer;
  /* 控制用户能否选中文本 */
  user-select: none;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  &::before {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 4px;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    box-shadow: 0 2px 5px rgba(#000, 0.2);
    content: "";
    /* 告知浏览器该元素会有哪些变化的方法 */
    will-change: transform;
    /* 
      translateY 在页面垂直移动元素
      translateZ 在 Z 轴移动元素
      rotateX 沿着 X 轴旋转元素
    */
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0))
      rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));
    transition: box-shadow 500ms ease, transform 200ms ease;
  }
  &::after {
    display: inline-block;
    position: relative;
    font-weight: bold;
    content: attr(data-name);
    will-change: transform;
    transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0))
      rotateY(var(--ry, 0));
    transition: transform 200ms ease;
  }
  &:hover::before {
    box-shadow: 0 5px 15px rgba(#000, 0.3);
  }
}
</style>
<script>
import { onMounted, reactive, ref } from "vue";

export default {
  setup() {
    const state = reactive({ bgStyle: 0 });
    const btn = ref(null);
    const bg = ref(null);

    onMounted(() => {
      state.bgStyle = bg.value.style;
      state.btnRect = btn.value.getBoundingClientRect();
    });
    const down = (e) => {
      state.bgStyle.setProperty("--tz", "-25px");
    };
    const leave = (e) => {
      state.bgStyle.setProperty("--ty", "0");
      state.bgStyle.setProperty("--rx", "0");
      state.bgStyle.setProperty("--ry", "0");
    };
    const move = (e) => {
      const dx = e.offsetX - state.btnRect.width / 2;
      const dy = e.offsetY - state.btnRect.height / 2;
      state.bgStyle.setProperty("--rx", `${dy / -1}deg`);
      state.bgStyle.setProperty("--ry", `${dx / 10}deg`);
    };
    const up = () => {
      state.bgStyle.setProperty("--tz", "-12px");
    };

    return {
      btn,
      bg,
      down,
      leave,
      move,
      up,
    };
  },
};
</script>

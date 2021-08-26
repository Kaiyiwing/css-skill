import { defineConfig } from "vite";

import autoprefixer from "autoprefixer";
import vue from "@vitejs/plugin-vue";

export default ({ mode }) => {
  //生成自定义用户配置
  return defineConfig({
    //样式表插件
    plugins: [vue()],
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  });
};

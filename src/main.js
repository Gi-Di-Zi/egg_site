import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import { createPinia } from "pinia";
import { router } from "./router/index";

const pinia = createPinia();

const app = createApp(App);
app.use(router).use(Antd).use(pinia).mount("#app");

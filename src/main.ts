import { useMainStore } from "./stores/main";
import { useStyleStore } from "./stores/style";
import { createApp } from 'vue'
import router from './router';
import { createPinia } from "pinia";
import App from './App.vue'
import "./css/main.css";

/* Init Pinia */
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');

/* Init Pinia stores */
const mainStore = useMainStore(pinia);
const styleStore = useStyleStore(pinia);

/* Fetch sample data */
// mainStore.fetch("clients");
// mainStore.fetch("history");

/* Default title tag */
const defaultDocumentTitle = "js_bend";

/* Set document title from route meta */
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle;
});

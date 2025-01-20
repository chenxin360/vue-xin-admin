import { createApp } from 'vue';

import { ElLoading } from 'element-plus';

import App from './app.vue';

async function bootstrap(namespace: string) {
  // await
  const app = createApp(App);
  app.directive('loading', ElLoading.directive);

  app.mount('#app');
}

export { bootstrap };

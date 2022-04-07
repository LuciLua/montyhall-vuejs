import { createApp } from 'vue'
import App from "./App"
// import Vue from "vue"

// Criando new instance
// new Vue({
//     el: "#app",
//     render(createElement) {
//         return createElement(App)
//     }
// })


// new Vue({
//     render: h => h(App)
//   }).$mount('#app')


// Só assim ta funcionando, na versao atual
createApp(App).mount('#app')
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {Button,Tabbar,TabItem,Search,Cell,Popup, Navbar,TabContainer,TabContainerItem} from "mint-ui"
import router from './router/index'
import './mock/mockServer'
import store from './store'
Vue.config.productionTip = false
Vue.component(Button.name,Button)
Vue.component(Tabbar.name,Tabbar)
Vue.component(TabItem.name,TabItem)
Vue.component(Search.name,Search)
Vue.component(Popup.name, Popup)
Vue.component(Navbar.name, Navbar)
Vue.component(Cell.name, Cell)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Upload from 'vue-easy-uploader'
import router from './router/index'
import './mock/mockServer'
import store from './store'
import Calendar from 'vue-mobile-calendar'
import Distpicker from 'v-distpicker'
import VueJsonp from 'vue-jsonp'
import './Utils/Utils'
import '../static/jquery/jquery-3.3.1.min'
/*import './assets/util/vconsole'*/

import {  Button,Tabbar,TabItem,Search,Cell,Popup,
          Navbar,TabContainer,TabContainerItem,Badge,
          Switch,Radio,DatetimePicker,Picker} from "mint-ui"
Vue.use(VueJsonp)
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
Vue.component(Badge.name, Badge)
Vue.component(Switch.name, Switch)
Vue.component(Radio.name, Radio)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Picker.name, Picker)
Vue.component('v-distpicker',Distpicker)

Vue.use(Upload,store)
/* eslint-disable no-new */
Vue.use(Calendar)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

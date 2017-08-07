// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.post = function (url,params,fn) {
  var xhr = new XMLHttpRequest()
  xhr.open("POST", url, true)
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    var XMLHttpReq = xhr;
    if (XMLHttpReq.readyState == 4) {
      if (XMLHttpReq.status == 200) {
        var text = XMLHttpReq.responseText
        var res = JSON.parse(text)
        fn(res)
      }
    }
  }
  xhr.send(params)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import marked from 'marked'


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

Vue.prototype.get = function (url,params,fn) {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", url, true)
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
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

vm.$watch('linkName', function(n, o) {
  console.log('new coming')
})

console.log('2222')
// debugger;
console.log(vm.$children)
console.log('sljdflj')
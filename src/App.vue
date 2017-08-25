<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ul id='links'>
        <li> <router-link to="/login">去登录</router-link> </li>
        <li> <router-link to="/myList">用户列表</router-link> </li>
        <li> <router-link to="/markdown">Markdown</router-link> </li>
        <li> <router-link to="/github">Github</router-link> </li>
          <li> <router-link to="/searchGrid">searchGrid</router-link> </li>
    </ul>
     <div class="Link">
        <p>添加网站</p>
        <label>网站名：</label>
        <input type="text" name="linkName" v-model="linkName"/>
         <label>网站地址：</label>
        <input type="text" name="linkUrl"  v-model="linkUrl"/>
        <button name="addLink" @click="addLink" >+</button>
     </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      linkName: '百度',
      linkUrl: 'https://www.baidu.com'
    }
  },
  methods: {
    addLink: function() {
      // alert('hello')
      let _self = this
      let links = document.querySelector('#links')
      let newLinkLi = document.createElement('li')
      let newLink = document.createElement('a')
      newLink.setAttribute('href', _self.linkUrl)
      newLink.innerHTML = _self.linkName
      newLinkLi.appendChild(newLink)
      // alert('okay')
      links.appendChild(newLinkLi)
      this.$router.push('login')
    }
  },
   watch: {
    linkName: function(n, o) {
      console.log(n)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
